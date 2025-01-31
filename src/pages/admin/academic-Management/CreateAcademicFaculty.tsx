import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { Button, Flex } from "antd";

const CreateAcademicFaculty = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
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