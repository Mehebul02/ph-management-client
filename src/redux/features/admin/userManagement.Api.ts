import { TStudents } from './../../../../types/userManagement.type';
import { TQueryParams, TResponseRedux } from "../../../../types/golbal";
import { baseApi } from "../../api/baseApi";



const userManagementApi = baseApi.injectEndpoints({
     endpoints: (builder) => ({
            getAllStudents: builder.query({
                query: (args) => {
                    const params = new URLSearchParams()
                    if (args) {
                        args.forEach((item:TQueryParams) => {
                            params.append(item.name, item.value as string)
                        });
                    }
                    return {
                        url: '/students',
                        method: 'GET',
                        params: params,
                    }
                },
                transformResponse: (response: TResponseRedux<TStudents[]>) => {
                    console.log('Inside response', response);
                    return {
                        data: response.data,
                        meta: response.meta
                    }
                },
            }),
            addStudent: builder.mutation({
                query: (data) => ({
                    url: '/users/create-student',
                    method: 'POST',
                    body: data,
                }),
            }),
            updateStudent: builder.mutation({
                query: ( {id,data} ) => ({
                    url: `/students/${id}`, 
                    method: 'PATCH',       
                    body: data,    
                }),
            }),
    
           
    
        }),
})

export const {useAddStudentMutation, 
    useGetAllStudentsQuery,
    useUpdateStudentMutation
} = userManagementApi