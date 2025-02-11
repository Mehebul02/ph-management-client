import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.Api";
import PHInputForm from "../../../components/form/PHInputForm";
import PhSelectFormWithWatch from "../../../components/form/PhSelectFormWithWatch";
import { useState } from "react";

const OfferCourse = () => {

    const [id, setId] = useState('')

    console.log('Inside the parentId',id);

    const {data:academicFacultyData} = useGetAcademicFacultyQuery(undefined)

 const academicSemesterOptions = academicFacultyData?.data?.map((item)=>({
        value:item._id,
        label : item.name,
    }))
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm onSubmit={onSubmit}>
            <PhSelectFormWithWatch
              label="Academic Semester"
              name="academicSemester"
              onValueChange={setId}
             
              options={academicSemesterOptions}
            />
            <PHInputForm  disabled={!id} type="text" name="test" label="Text"/>
           
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default OfferCourse;