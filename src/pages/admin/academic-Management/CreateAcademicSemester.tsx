import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";

const nameOptions =[
    {
        value:'01',
        label:'Autumn'
    },
    {
        value:'02',
        label:'Summer'
    },
    {
        value:'03',
        label:'Fall'
    },
   
]

const currentYear = new Date().getFullYear()
const yearOptions =[0,1,2,3,4].map(number=>({
    value:currentYear+number,
    label:currentYear+number
}))
console.log(yearOptions);
console.log(currentYear);


const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data.name)
        // const name =nameOptions.find((item)=>item.value === data.name)
        const name =nameOptions[Number(data.name)-1].label
        const semesterData ={
            name,
            label:data.name
        }
        console.log(semesterData);
    }


    return (
        <Flex justify="center" align="center">

            <Col span={4}>
                <PhForm onSubmit={onSubmit}>

                    <PhSelectForm label='Name' name='name' options={nameOptions} defaultValue='Autumn'/>
                    <PhSelectForm label='Year' name='year' options={yearOptions} defaultValue={currentYear} />
                    <PhSelectForm label='Start Month' name='startMonth' options={nameOptions} />
                    <PhSelectForm label='End Month' name='endMonth' options={nameOptions} />
                
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;