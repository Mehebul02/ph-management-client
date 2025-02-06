import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllCoursesQuery, useGetAllRegisteredSemestersQuery, useUpdateRegisteredSemestersMutation } from "../../../redux/features/admin/courseManagement.Api";
import moment from 'moment';
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
            render: () => {
                return <Button>Assign Faculty</Button>
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

export default Courses;