import { baseApi } from "../../api/baseApi";


export const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
        }),

    }),
})


export const {useGetAllSemestersQuery} = academicManagementApi;