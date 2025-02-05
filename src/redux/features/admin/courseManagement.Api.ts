import { baseApi } from "../../api/baseApi";


const courseManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // course data 
        // getAllSemesters: builder.query({
        //     query: (args) => {
        //         const params = new URLSearchParams()
        //         if (args) {
        //             args.forEach((item: TQueryParams) => {
        //                 params.append(item.name, item.value as string)
        //             });
        //         }
        //         return {
        //             url: '/academic-semesters',
        //             method: 'GET',
        //             params: params,
        //         }
        //     },
        //     transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        //         console.log('Inside response', response);
        //         return {
        //             data: response.data,
        //             meta: response.meta
        //         }
        //     },
        // }),
        addRegisteredSemesters: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: 'POST',
                body: data,
            }),
        }),

    })
})


export const {useAddRegisteredSemestersMutation} = courseManagementApi