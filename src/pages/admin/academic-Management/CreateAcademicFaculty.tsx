import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { Button, Flex } from "antd";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.Api";

const CreateAcademicFaculty = () => {

    const [addAcademicFaculty] = useAddAcademicFacultyMutation()
    
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        const facultyData ={
            name:data.name
        }
      try{
        const res = await addAcademicFaculty(facultyData)
        console.log(res);

      }catch(err){
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