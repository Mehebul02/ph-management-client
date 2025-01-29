import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { semesterOptions } from "../../../constrants/semester";
import { monthOptions } from "../../../constrants/global";


const currentYear = new Date().getFullYear()
const yearOptions =[0,1,2,3,4].map(number=>({
    value:currentYear+number,
    label:currentYear+number
}))

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // const name =nameOptions.find((item)=>item.value === data.name)
        const name =semesterOptions[Number(data.name)-1].label
        const semesterData ={
            name,
            code:data.name,
            year:data.year

        }
        console.log(semesterData);

        console.log(data);
    }


    return (
        <Flex justify="center" align="center">

            <Col span={4}>
                <PhForm onSubmit={onSubmit}>

                    <PhSelectForm label='Name' name='name' options={semesterOptions} defaultValue='Autumn'/>
                    <PhSelectForm label='Year' name='year' options={yearOptions} defaultValue={currentYear} />
                    <PhSelectForm label='Start Month' name='startMonth' options={monthOptions} />
                    <PhSelectForm label='End Month' name='endMonth' options={monthOptions} />
                
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;