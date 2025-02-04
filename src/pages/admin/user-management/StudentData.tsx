
import { Avatar, Button, Image, Pagination, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
import { TQueryParams } from "../../../../types/golbal";
import { useGetAllStudentsQuery, useUpdateStudentMutation } from "../../../redux/features/admin/userManagement.Api";
import { TStudents } from "../../../../types/userManagement.type";
import '../../../styles/StudentData.css'; // External CSS file
import { Link } from 'react-router-dom';
export type TTableData = Pick<TStudents, 'fullName' | 'id'>
const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([])
  const [page, setPage] = useState(1)
  const [updateStudent] = useUpdateStudentMutation();
  const updateHandler=(id)=>{
    // updateStudent(data)
    console.log(id,'Banga');
  }
  console.log(updateStudent);
  const { data: studentData, isLoading, isFetching } = useGetAllStudentsQuery([
    { name: 'limit', value: 2 },
    { name: 'page', value: page },
    { name: 'sort', value: 'id' },

    ...params

  ])
  const metaData = studentData?.meta
  const tableData = studentData?.data?.map(({ _id, fullName, id, profileImg, contactNo, email,gender }) => ({
    key: _id,
    fullName,
    id,
    profileImg,
    contactNo,
    email,
    gender
  }))

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Roll',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact No',
      key: 'contactNo',
      dataIndex: 'contactNo',
    },
    {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender',
    },

    {
      title: 'Action',
      key: 'X',
      render: (item) => {
        console.log(item);
        return <Space>
          <Link to={`/admin/student/${item.key}`}>
          <Button>Details</Button>
          </Link>
          <Button onClick={()=>updateHandler(item.key)}>Update</Button>
          <Button>Block</Button>
        </Space>
      },
      width: '1%'
    },

  ];

  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
    if (extra.action === 'filter') {
      const queryParams: TQueryParams[] = []
      filters.name?.forEach((item) =>
        queryParams.push({ name: 'name', value: item })

      )
      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })

      )
      setParams(queryParams)
    }
  };

  // if(isLoading){
  //   return <p>Loading</p>
  // }
  return (
    <div>
      {/* {tableData?.map((record) => (
        <div key={record.key} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div className="animated-border">
            <Avatar 
              src={record.profileImg} 
              alt={record.fullName} 
              size={70} 
              style={{ border: '2px solid white' }} 
            />
          </div>
         <div style={{display:'flex-column', marginLeft:'10px'}}>
         <span style={{ fontWeight: 'bold', fontSize: '16px', marginLeft: '10px' }}>{record.fullName}</span>
         <div>Roll: {record.id}</div>
         </div>
        </div>
      ))} */}
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        current={page}
        onChange={(page) => setPage(page)}
        pageSize={metaData?.limit}
        total={metaData?.total} />
    </div>
  );
};

export default StudentData;