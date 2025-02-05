import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { TAcademicSemester } from "../../../../types/academicManagement.Type";
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.Api";
import moment from 'moment';
export type TTableData = Pick<TAcademicSemester,  'name' | 'year' | 'startMonth' | 'endMonth'>
const RegisteredSemester = () => {

  const { data: semesterData, isLoading,isFetching } = useGetAllRegisteredSemestersQuery(undefined)
  const tableData = semesterData?.data?.map(({  _id, academicSemester, startDate, endDate, year,status }) => ({
   key:_id,
    name:`${academicSemester.name} ${academicSemester.year}`,
     startDate:moment(new Date(startDate)).format('MMMM Do YYYY,'),
      endDate:moment(new Date(endDate)).format('MMM Do YYYY'), 
      year,
      status 
  }))

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Status',
      key:'status',
      dataIndex: 'status',
    },
    {
      title: 'Start Date',
      key:'startDate',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      key:'endDate',
      dataIndex: 'endDate',
    },
    {
      title: 'Year',
      key:'year',
      dataIndex: 'year',
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

//   const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
//     console.log('params', pagination, filters, sorter, extra);
//     if (extra.action === 'filter') {
//       const queryParams:TQueryParams[] = []
//       filters.name?.forEach((item) =>
//         queryParams.push({ name: 'name', value: item })

//       )
//       filters.year?.forEach((item) =>
//         queryParams.push({ name: 'year', value: item })

//       )
//       setParams(queryParams)
//     }
//   };

  // if(isLoading){
  //   return <p>Loading</p>
  // }
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

export default RegisteredSemester;