import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import PhSelectForm from "../../../components/form/PhSelectForm";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.Api";

const OfferCourse = () => {

    const {data:academicFacultyData} = useGetAcademicFacultyQuery(undefined)

 const academicSemesterOptions = academicFacultyData?.data?.map((item)=>({
        value:item._id,
        label : `${item.name} ${item.year}`
    }))
    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <Flex justify="center" align="center">
        <Col span={6}>
          <PhForm onSubmit={onSubmit}>
            <PhSelectForm
              label="Academic Semester"
              name="academicSemester"
              options={academicSemesterOptions}
            />
           
            <Button htmlType="submit">Submit</Button>
          </PhForm>
        </Col>
      </Flex>
    );
};

export default OfferCourse;