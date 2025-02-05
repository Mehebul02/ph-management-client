import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { semesterStatusOptions } from "../../../constrants/semester";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.Api";
import PHDatePicker from "../../../components/form/PhDatePicker";
import PHInputForm from "../../../components/form/PHInputForm";
import { useAddRegisteredSemestersMutation } from "../../../redux/features/admin/courseManagement.Api";


const SemesterRegistration = () => {

  const [addSemester] = useAddRegisteredSemestersMutation()

    const {data:academicSemester} = useGetAllSemestersQuery([
        {name:'sort', value:'year'}
    ])
    console.log(academicSemester);

    const academicSemesterOptions = academicSemester?.data?.map((item)=>({
        value:item._id,
        label : `${item.name} ${item.year}`
    }))

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // const name =nameOptions.find((item)=>item.value === data.name)
        const toastId = toast.loading('Creating academic semester......')
        
        const semesterData = {
            ...data,
            minCredit:Number(data.minCredit),
            maxCredit:Number(data.maxCredit)
        }
        console.log(semesterData);
        try {
            const res = (await addSemester(semesterData)) as TResponse<any>;
            // if(res.data.startMonth !==res.data.endMonth){
            //     toast.error('same month not exists')

            // }
           if(res.error){
            toast.error(res.error.data.message,{id:toastId})
           }
           else{
            toast.success('Academic semester is created successfully',{id:toastId})
           }

        } catch (err) {
            console.log(err);
            toast.error('Failed to create academic semester',{id:toastId})
        }
    }

    return (
        <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm onSubmit={onSubmit}>
            <PhSelectForm
              label="Academic Semester"
              name="academicSemester"
              options={academicSemesterOptions}
            />
  
            <PhSelectForm
              name="status"
              label="Status"
              options={semesterStatusOptions}
            />
            <PHDatePicker name="startDate" label="Start Date" />
            <PHDatePicker name="endDate" label="End Date" />
            <PHInputForm type="text" name="minCredit" label="Min Credit" />
            <PHInputForm type="text" name="maxCredit" label="Max Credit" />
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default SemesterRegistration;