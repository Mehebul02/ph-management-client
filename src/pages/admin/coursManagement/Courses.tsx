import { Button, Modal, Table, } from 'antd';
import type { TableColumnsType } from 'antd';
import { useAddFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.Api";
import { TSemester } from '../../../../types/CourseManagement.Type';
import { useState } from 'react';
import PhForm from '../../../components/form/PhForm';
import PhSelectForm from '../../../components/form/PhSelectForm';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagement.Api';

export type TTableData = Pick<TSemester, 'startDate' | 'endDate' | 'status'>
const Courses = () => {

    const { data: semesterData, isFetching } = useGetAllCoursesQuery(undefined)
    const tableData = semesterData?.data?.map(({ _id, title, prefix, code }) => ({
        key: _id,
        title,
        code: `${prefix} ${code}`
    }))

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Title',
            key: 'title',
            dataIndex: 'title',
        },
        {
            title: 'Code',
            key: 'code',
            dataIndex: 'code',
        },
        {
            title: 'Action',
            key: 'X',
            render: (item) => {
                return <AddFacultyModal facultyInfo={item} />;
            }
        }
    ];

    return (
        <div>
            <Table<TTableData>
                loading={isFetching}
                columns={columns}
                dataSource={tableData}
            //    onChange={onChange}
            />
        </div>
    );
};



const AddFacultyModal = ({ facultyInfo }) => {
    console.log(facultyInfo);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data: facultiesData } = useGetAllFacultiesQuery(undefined)
    console.log(facultiesData);

    const [addFaculties] = useAddFacultiesMutation(undefined)

    const facultiesOption = facultiesData?.data?.map((item) => ({
        value: item._id,
        label: item.fullName,
    }));

    const handleSubmit = (data) => {
        const facultyData = {
            courseId: data.key,
                data,
        };
        addFaculties(facultyData)
    }


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal}>Add Faculty</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <PhForm onSubmit={handleSubmit}>

                    <PhSelectForm mode='multiple' options={facultiesOption} name='faculties' label='Faculty' />
                    <Button htmlType='submit'>Submit</Button>

                </PhForm>
            </Modal>

        </>
    )
}



export default Courses;