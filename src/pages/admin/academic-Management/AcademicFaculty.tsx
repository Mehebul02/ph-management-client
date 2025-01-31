import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.Api";

const AcademicFaculty = () => {

    const {data} = useGetAcademicFacultyQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>Academic Faculty</h1>
        </div>
    );
};

export default AcademicFaculty;