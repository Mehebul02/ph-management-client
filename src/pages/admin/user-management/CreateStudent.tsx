import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { Button, Col, Divider, Row } from "antd";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { bloodGroupOptions, gendersOptions } from "../../../constrants/global";
import PHDatePicker from "../../../components/form/PhDatePicker";



const studentDummyData = {
    "password": "student123",
    "student": {
        "name": {
            "firstName": "I am ",
            "middleName": "Student",
            "lastName": "Number 1"
        },
        "gender": "male",
        "dateOfBirth": "1990-01-01",
        "bloogGroup": "A+",

        "email": "student2@gmail.com",
        "contactNo": "1235678",
        "emergencyContactNo": "987-654-3210",
        "presentAddress": "123 Main St, Cityville",
        "permanentAddress": "456 Oak St, Townsville",

        "guardian": {
            "fatherName": "James Doe",
            "fatherOccupation": "Engineer",
            "fatherContactNo": "111-222-3333",
            "motherName": "Mary Doe",
            "motherOccupation": "Teacher",
            "motherContactNo": "444-555-6666"
        },
        "localGuardian": {
            "name": "Alice Johnson",
            "occupation": "Doctor",
            "contactNo": "777-888-9999",
            "address": "789 Pine St, Villageton"
        },
        "admissionSemester": "65b0104110b74fcbd7a25d92",
        "academicDepartment": "65b00fb010b74fcbd7a25d8e"
    }
}

const CreateStudent = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));
        console.log(Object.fromEntries(formData));


        // this is the for develop
        // just checking purpas 
        // console.log([...formData.entries()]);
        // console.log(Object.fromEntries(formData));
    };

   

    return (
        <Row gutter={20}>
            <Col span={24}>
                <PhForm onSubmit={onSubmit}>
                    <Divider>
                        Personal info
                    </Divider>
                    <Row gutter={20}>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="name.firstName" label="First Name" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="name.middleName" label="Middle Name" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="name.lastName" label="Last Name" />
                        </Col>
                        <Col span={24} xs={24} sm={12} md={8}>
                            <PhSelectForm options={gendersOptions} name="gender" label="Gender" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            {/* <PHInputForm type="date" name="dateOfBirth" label="Date Of Birth" /> */}
                            <PHDatePicker name="dateOfBirth" label="Date Of Birth"/>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PhSelectForm options={bloodGroupOptions} name="bloogGroup" label="Blood Group" />
                        </Col>
                        {/* Add more fields as needed */}
                    </Row>
                    <Divider>
                       Contact info
                    </Divider>
                    <Row gutter={20}>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="email" name="email" label="Email" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="number" name="contactNo" label="Contact" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="emergencyContactNo" name="emergencyContactNo" label="Emergency Contact" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="presentAddress" name="presentAddress" label="Present Address" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="permanentAddress" name="permanentAddress" label="Permanent Address" />
                        </Col>
                        
                        
                        {/* Add more fields as needed */}
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;
