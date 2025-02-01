// import { TResponse, TResponseRedux } from "../../../../types/golbal";
import { TResponseRedux } from "../../../../types/golbal";
import { baseApi } from "../../api/baseApi";
import { TAcademicSemester } from '../../../../types/academicManagement.Type'

export const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args) => {
                const params = new URLSearchParams()

                if (args) {
                    args.forEach(item => {
                        params.append(item.name, item.value)
                    });
                }
                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params,
                }
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                console.log('Inside response', response);
                return {
                    data: response.data,
                    meta: response.meta
                }
            },
        }),
        addAcademicSemesters: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: 'POST',
                body: data,
            }),
        }),

        getAcademicFaculty:builder.query({
            query:()=>{
                return{url:'/academic-faculties', method:'GET'}
            },
            transformResponse:(response)=>{
                console.log("Inside the response",response);

                return{
                    data:response.data,
                    meta:response.meta
                }
            }
        })

    }),
})


export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation,useGetAcademicFacultyQuery } = academicManagementApi;