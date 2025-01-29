import { Button } from "antd";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        console.log(data);
    }
    return (
        <PhForm onSubmit={onsubmit}>
            <PHInputForm type="text" name="name" placeholder="Name"/>
            <PHInputForm type="number" name="year" placeholder="Year"/>
            <Button htmlType="submit">Submit</Button>
        </PhForm>
    );
};

export default CreateAcademicSemester;