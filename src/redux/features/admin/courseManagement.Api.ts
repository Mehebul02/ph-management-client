import { TSemester } from './../../../../types/CourseManagement.Type';
import { TQueryParams, TResponseRedux } from "../../../../types/golbal";
import { baseApi } from "../../api/baseApi";


const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // course data 
        getAllRegisteredSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.value as string)
                    });
                }
                return {
                    url: '/semester-registrations',
                    method: 'GET',
                    params: params,
                }
            },
            providesTags:['semester'],
            transformResponse: (response: TResponseRedux<TSemester[]>) => {
                console.log('Inside response', response);
                return {
                    data: response.data,
                    meta: response.meta
                }
            },
        }),
        addRegisteredSemesters: builder.mutation({
            query: (data) => ({
                url: '/semester-registrations/create-semester-registration',
                method: 'POST',
                body: data,
            }),
            invalidatesTags:['semester']
        }),
        updateRegisteredSemesters: builder.mutation({
            query: (args) => ({
                url: `/semester-registrations/${args.id}`,
                method: 'PATCH',
                body: args.data,
            }),
            invalidatesTags:['semester']
        }),
    })
})


export const {useAddRegisteredSemestersMutation,
    useGetAllRegisteredSemestersQuery,
    useUpdateRegisteredSemestersMutation,
} = courseManagementApi