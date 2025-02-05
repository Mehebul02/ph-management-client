import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.Api";
import { Button, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../../types/academicManagement.Type";
import { useState } from "react";
import { TQueryParams } from "../../../../types/golbal";
export type TTableData = Pick<TAcademicSemester,  'name' | 'year' | 'startMonth' | 'endMonth'>
const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
  const { data: semesterData, isLoading,isFetching } = useGetAllSemestersQuery(params)
  const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
  key:_id, name, startMonth, endMonth, year
  }))

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
      filters: [
      
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        },
        {
          text: '2028',
          value: '2028',
        },
        {
          text: '2029',
          value: '2030',
        },
      ],
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
    {
      title:'Action',
      key:'X',
      render:()=>{
        return <div>  
          <Button>Update</Button>
          </div>
      }
    },
    {
      title:'Delete',
      key:'X',
      render:()=>{
        return <Button>Delete</Button>
      }
    }
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
      const queryParams:TQueryParams[] = []
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
      <Table<TTableData>
        loading={isFetching}
       columns={columns} 
       dataSource={tableData} 
       onChange={onChange} />
    </div>
  );
};

export default AcademicSemester;