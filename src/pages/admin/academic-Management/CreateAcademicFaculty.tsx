import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { Button, Flex } from "antd";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.Api";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {

    const [addAcademicFaculty] = useAddAcademicFacultyMutation()

    // const toastId = toast.loading('Creating academic faculty....')
    
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        const facultyData ={
            name:data.name
        }
      try{
        const res = await addAcademicFaculty(facultyData)
        if(res.error){
            toast.error(res.error.data.message)
        }else{
            toast.success('Academic faculty created is successfully',)
        }

      }catch(err){
        toast.error('Failed to create academic',)
        console.log(err);
      }
        
    }
    return (
        <Flex justify="center" align="center">
            <PhForm onSubmit={onSubmit}>
                <PHInputForm type="name" name="name" label="Name" placeholder="Enter the faculty name" />
            <Button htmlType="submit">Submit</Button>
            </PhForm>
        </Flex>
    );
};

export default CreateAcademicFaculty;