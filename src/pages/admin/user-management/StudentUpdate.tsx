import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {  useGetAllStudentsQuery, useUpdateStudentMutation } from "../../../redux/features/admin/userManagement.Api"; // Assuming these hooks exist
import { toast } from "sonner";

const StudentUpdate = () => {
    const { updateId } = useParams(); // Access the updateId from the URL
    const navigate = useNavigate(); // To navigate after update

    const { data: studentData, isLoading, error } = useGetAllStudentsQuery(updateId); // Fetch student data by ID
    const [updateStudent] = useUpdateStudentMutation(); // Mutation for updating student data
console.log(studentData)
    // const [formData, setFormData] = useState({
    //     name: { firstName: "", middleName: "", lastName: "" },
    //     email: "",
    //     contactNo: "",
    //     // Add other fields
    // });

    // useEffect(() => {
    //     if (studentData) {
    //         setFormData({
    //             name: studentData.name,
    //             email: studentData.email,
    //             contactNo: studentData.contactNo,
    //             // Set other fields from the fetched data
    //         });
    //     }
    // }, [studentData]);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await updateStudent({ updateId, data: formData });
    //         toast.success("Student data updated successfully!");
    //         navigate(`/students/${updateId}`); // Navigate back to the student details page
    //     } catch (err) {
    //         console.error(err);
    //         toast.error("Error updating student data.");
    //     }
    // };

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Student </h1>
        </div>
        // <div>
        //     <h1>Update Student: {updateId}</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label>First Name</label>
        //             <input
        //                 type="text"
        //                 name="name.firstName"
        //                 value={formData.name.firstName}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label>Middle Name</label>
        //             <input
        //                 type="text"
        //                 name="name.middleName"
        //                 value={formData.name.middleName}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label>Last Name</label>
        //             <input
        //                 type="text"
        //                 name="name.lastName"
        //                 value={formData.name.lastName}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label>Email</label>
        //             <input
        //                 type="email"
        //                 name="email"
        //                 value={formData.email}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div>
        //             <label>Contact No</label>
        //             <input
        //                 type="text"
        //                 name="contactNo"
        //                 value={formData.contactNo}
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         {/* Add more input fields as necessary */}
        //         <button type="submit">Update</button>
        //     </form>
        // </div>
    );
};

export default StudentUpdate;
