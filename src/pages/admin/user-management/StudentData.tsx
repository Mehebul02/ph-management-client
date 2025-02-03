
import { Avatar, Button, Image, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
import { TQueryParams } from "../../../../types/golbal";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.Api";
import { TStudents } from "../../../../types/userManagement.type";
import '../../../styles/StudentData.css'; // External CSS file
export type TTableData = Pick<TStudents, 'name' | 'id'>
const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([])
  const { data: semesterData, isLoading, isFetching } = useGetAllStudentsQuery([
    

    ...params

  ])
  const tableData = semesterData?.data?.map(({ _id, fullName, id,profileImg }) => ({
    key: _id,
    fullName,
    id,
    profileImg
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
      title: 'Action',
      key: 'X',
      render: () => {
        return <Space>
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Block</Button>
        </Space>
      },
      width:'1%'
    },
    
  ];

  //   const data: DataType[] = [
  //     {
  //       key: '1',
  //       name: 'John Brown',
  //       age: 32,
  //       address: 'New York No. 1 Lake Park',
  //     },
  //     {
  //       key: '2',
  //       name: 'Jim Green',
  //       age: 42,
  //       address: 'London No. 1 Lake Park',
  //     },
  //     {
  //       key: '3',
  //       name: 'Joe Black',
  //       age: 32,
  //       address: 'Sydney No. 1 Lake Park',
  //     },
  //     {
  //       key: '4',
  //       name: 'Jim Red',
  //       age: 32,
  //       address: 'London No. 2 Lake Park',
  //     },
  //   ];

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
      {tableData?.map((record) => (
        <div key={record.key} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <div className="animated-border">
            <Avatar 
              src={record.profileImg} 
              alt={record.fullName} 
              size={50} 
              style={{ border: '2px solid white' }} 
            />
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '16px', marginLeft: '10px' }}>{record.fullName}</span>
        </div>
      ))}
      <Table<TTableData>
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        onChange={onChange} />
    </div>
  );
};

export default StudentData;