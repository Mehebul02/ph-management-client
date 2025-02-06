import { Button, Col, Flex } from "antd";
import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelectForm from "../../../components/form/PhSelectForm";
import PHInputForm from "../../../components/form/PHInputForm";
import { useAddCoursesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.Api";
import { toast } from "sonner";
import { TResponse } from "../../../../types/golbal";

const CreateCourse = () => {
  const [createCourse] = useAddCoursesMutation()
  const { data: course } = useGetAllCoursesQuery(undefined)
  const preRequisiteCoursesOptions = course?.data?.map((item) => ({
    value: item._id,
    label: item.title
  }))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    const toastId = toast.loading('Creating academic semester......')

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses?.map((item: any) => ({
        course: item,
        isDeleted: false
      })) : []
    }
    console.log(courseData);
    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      // if(res.data.startMonth !==res.data.endMonth){
      //     toast.error('same month not exists')

      // }
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId })
      }
      else {
        toast.success('Course is created successfully', { id: toastId })
      }

    } catch (err) {
      console.log(err);
      toast.error('Failed to create course', { id: toastId })
    }
  }

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm onSubmit={onSubmit}>
          <PHInputForm type="text" name="title" label="Title" />
          <PHInputForm type="text" name="prefix" label="Prefix" />
          <PHInputForm type="text" name="code" label="Code" />
          <PHInputForm type="text" name="credits" label="Credits" />

          <PhSelectForm
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="preRequisiteCourses"
          />
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;