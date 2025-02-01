import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.Api";
import { TAcademicFaculty } from "../../../../types/academicManagement.Type";

export type TTableData = Pick<TAcademicFaculty, 'name'>

const AcademicFaculty = () => {

    const { data: facultyData,isFetching,isLoading } = useGetAcademicFacultyQuery(undefined)
    const tableData = facultyData?.data?.map((item, idx) => ({
        no:idx+1,
        name: item.name
    }))
    const columns: TableColumnsType<TTableData> = [
        {
            title: 'No',
            key: 'no',
            dataIndex: 'no',
            filters: [

                {
                    text: 'No',
                    value: 'No',
                },

            ],
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            filters: [

                {
                    text: 'Name',
                    value: 'Name',
                },
            ],
        },
        {
            title: 'Action',
            key: 'X',
            render: () => {
                return <div>
                    <Button>Update</Button>
                </div>
            }
        }

    ];


    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
        // if (extra.action === 'filter') {
        //   const queryParams = []
        //   filters.name?.forEach((item) =>
        //     queryParams.push({ name: 'name', value: item })

        //   )
        //   filters.year?.forEach((item) =>
        //     queryParams.push({ name: 'year', value: item })

        //   )
        //   setParams(queryParams)
        // }
    };
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

export default AcademicFaculty;