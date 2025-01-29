import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
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

                    <PhSelectForm label='Name' name='name' options={nameOptions} />
                    <PHInputForm type="number" name="year" placeholder="Year" label="Year" />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;