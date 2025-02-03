// import { TResponse, TResponseRedux } from "../../../../types/golbal";
import { TResponseRedux } from "../../../../types/golbal";
import { baseApi } from "../../api/baseApi";
import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from '../../../../types/academicManagement.Type'

export const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // semester data 
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

        // Faculty data 

        getAcademicFaculty: builder.query({
            query: () => {
                return { url: '/academic-faculties', method: 'GET' }
            },
            transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
                console.log("Inside the response", response);
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicFaculty: builder.mutation({
            query: (data) => ({
                url: '/academic-faculties/create-academic-faculty',
                method: 'POST',
                body: data
            })
        }),

        // Department data 
        getAllAcademicDepartment: builder.query({
            query: () => ({
                url: '/academic-departments',
                method: 'GET'
            }),
            transformResponse: (response: TResponseRedux<TAcademicDepartment>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicDepartment:builder.mutation({
            query:(data)=>({
                url:'/academic-departments/create-academic-department',
                method:"POST",
                body:data
            })
        })
    }),

})


export const { useGetAllSemestersQuery,
    useAddAcademicSemestersMutation,
    useGetAcademicFacultyQuery,
    useAddAcademicFacultyMutation,
    useGetAllAcademicDepartmentQuery,
    useAddAcademicDepartmentMutation,
} = academicManagementApi;