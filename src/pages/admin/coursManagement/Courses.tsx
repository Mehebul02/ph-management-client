import { Button, Modal, Table, } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllCoursesQuery  } from "../../../redux/features/admin/courseManagement.Api";
import { TSemester } from '../../../../types/CourseManagement.Type';
import { useState } from 'react';

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
                return <AddFacultyModal  />;
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



const AddFacultyModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </>
    )
}



export default Courses;