import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType } from 'antd';
import { useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement.Api";
import moment from 'moment';
import { TSemester } from '../../../../types/CourseManagement.Type';

const items = [
    {
        label:'upcoming',
        key:'UPCOMING'
    },
    {
        label:'ongoing',
        key:'ONGOING'
    },
    {
        label:'ended',
        key:'ENDED'
    },
]
export type TTableData = Pick<TSemester,  'startDate'| 'endDate' | 'status'>
const RegisteredSemester = () => {

  const { data: semesterData,isFetching } = useGetAllRegisteredSemestersQuery(undefined)
  const tableData = semesterData?.data?.map(({  _id, academicSemester, startDate, endDate,status }) => ({
   key:_id,
    name:`${academicSemester.name} ${academicSemester.year}`,
     startDate:moment(new Date(startDate)).format('MMMM Do YYYY,'),
      endDate:moment(new Date(endDate)).format('MMM Do YYYY'), 
      
      status 
  }))

  const handleStatusDropdown =(data)=>{
    console.log(data);
  }

  const menuProps = {
    items,
    onClick:handleStatusDropdown
  }
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
      render:(item)=>{
        let color;
        if(item === 'ONGOING'){
            color ='blue'
        }
        if(item === 'UPCOMING'){
            color = 'green'
        }
         if(item === 'ENDED'){
            color = 'red'
        }
       
        return <Tag color={color}>{item}</Tag>
      }
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
      title:'Action',
      key:'X',
      render:()=>{
        return <Dropdown menu={menuProps}>  
          <Button>Update</Button>
          </Dropdown>
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