// import { TResponse, TResponseRedux } from "../../../../types/golbal";
import { TResponseRedux } from "../../../../types/golbal";
import { baseApi } from "../../api/baseApi";
import { TAcademicSemester } from '../../../../types/academicManagement.Type'

export const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => {
                // const params = new URLSearchParams()
                // params.append(args[0].name, args[0].value)
                return{
                    url: '/academic-semesters',
                    method: 'GET',
                    // params: params,
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

    }),
})


export const { useGetAllSemestersQuery, useAddAcademicSemestersMutation } = academicManagementApi;