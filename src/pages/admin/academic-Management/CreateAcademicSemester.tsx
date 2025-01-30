import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { semesterOptions } from "../../../constrants/semester";
import { monthOptions } from "../../../constrants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.Schemas";
import { useAddAcademicSemestersMutation } from "../../../redux/features/admin/academicManagement.Api";
import { toast } from "sonner";
const currentYear = new Date().getFullYear()
const yearOptions = [0, 1, 2, 3, 4].map(number => ({
    value:String( currentYear + number),
    label: String(currentYear + number)
}))

const CreateAcademicSemester = () => {
    const [addAcademicSemesters] = useAddAcademicSemestersMutation()
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        // const name =nameOptions.find((item)=>item.value === data.name)
        const toastId = toast.loading('Creating academic semester......')
        const name = semesterOptions[Number(data.name) - 1].label
        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth,
        }
        try {
            const res = await addAcademicSemesters(semesterData)
           if(res.error){
            toast.error(res.error.data.message,{id:toastId})
           }else{
            toast.success('Academic semester is created successfully',{id:toastId})
           }

        } catch (err) {
            console.log(err);
            toast.error('Failed to create academic semester',{id:toastId})
        }
    }

    return (
        <Flex justify="center" align="center">

            <Col span={4}>
                <PhForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <PhSelectForm label='Name' name='name' options={semesterOptions}  />
                    <PhSelectForm label='Year' name='year' options={yearOptions}  />
                    <PhSelectForm label='Start Month' name='startMonth' options={monthOptions} />
                    <PhSelectForm label='End Month' name='endMonth' options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;