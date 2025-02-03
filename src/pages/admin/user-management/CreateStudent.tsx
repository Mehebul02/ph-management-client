import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { bloodGroupOptions, gendersOptions } from "../../../constrants/global";
import PHDatePicker from "../../../components/form/PhDatePicker";
import { useGetAllAcademicDepartmentQuery, useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.Api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.Api";

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

        "email": "mehebul353@gmail.com",
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

    const [addStudent, { data, error }] = useAddStudentMutation()
    console.log({ data, error });
    const { data: sSemesterData, isLoading } = useGetAllSemestersQuery(undefined)

    const { data: departmentData } = useGetAllAcademicDepartmentQuery(undefined,)

    const semesterOptions = sSemesterData?.data?.map((item) => ({
        value: item._id,
        label: `${item.name} ${item.year}`,
    }))

    const departmentOptions = departmentData?.data?.map((item) => ({
        value: item._id,
        label: item.name
    }))
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        const studentData = {
            password: 'student123',
            student: data
        }
        const formData = new FormData();
        formData.append('data', JSON.stringify(studentData));
        formData.append('file',data.image)
        addStudent(formData)
        console.log(Object.fromEntries(formData));


        // this is the for develop
        // just checking purpas 
        // console.log([...formData.entries()]);
        // console.log(Object.fromEntries(formData));
    };

    const studentDefaultVale = {
        "name": {
            "firstName": "I am ",
            "middleName": "Student",
            "lastName": "Number 1"
        },
        "gender": "male",
        // "dateOfBirth": "1990-01-01",
        "bloogGroup": "A+",

       
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


    return (
        <Row gutter={20}>
            <Col span={24}>
                <PhForm onSubmit={onSubmit} defaultValues={studentDefaultVale}>
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
                            <PHDatePicker name="dateOfBirth" label="Date Of Birth" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PhSelectForm options={bloodGroupOptions} name="bloogGroup" label="Blood Group" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                        <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
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
                            <PHInputForm type="text" name="emergencyContactNo" label="Emergency Contact" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="presentAddress" label="Present Address" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="permanentAddress" label="Permanent Address" />
                        </Col>
                    </Row>
                    <Divider>
                        Guardian
                    </Divider>
                    <Row gutter={20}>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="guardian.fatherName" label="Father Name" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="guardian.fatherOccupation" label="Father.Occupation" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="guardian.fatherContactNo" label="Father Contact" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="motherName" label="Mother Name" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="motherOccupation" label="Mother Occupation" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="motherContactNo" label="Mother Contact" />
                        </Col>
                    </Row>
                    <Divider>
                        Local Guardian
                    </Divider>
                    <Row gutter={20}>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="localGuardian.name" label="Name" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="localGuardian.occupation" label="Occupation" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="number" name="localGuardian.contactNo" label="Contact" />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PHInputForm type="text" name="localGuardian.address" label="Address" />
                        </Col>
                    </Row>
                    <Divider>
                        Academic Info
                    </Divider>
                    <Row gutter={20}>
                        <Col xs={24} sm={12} md={8}>
                            <PhSelectForm
                                options={semesterOptions}
                                disabled={isLoading}
                                name="admissionSemester"
                                label="Admission Semester"
                            />
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <PhSelectForm options={departmentOptions} name="academicDepartment" label="Academic Department" />
                        </Col>
                    </Row>
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Row>
    );
};

export default CreateStudent;
