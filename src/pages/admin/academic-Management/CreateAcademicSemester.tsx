import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <Flex justify="center" align="center">

            <Col span={4}>
                <PhForm onSubmit={onSubmit}>
                   
                    <PhSelectForm label='Name' name='name'/>
                    <PHInputForm type="number" name="year" placeholder="Year" label="Year" />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;