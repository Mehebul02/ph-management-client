
import AcademicDepartment from "../pages/admin/academic-Management/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academic-Management/AcademicFaculty";
import AcademicSemester from "../pages/admin/academic-Management/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academic-Management/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academic-Management/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academic-Management/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/coursManagement/Courses";
import CreateCourse from "../pages/admin/coursManagement/CreateCourse";
import OfferCourse from "../pages/admin/coursManagement/OfferCourse";
import OfferedCourses from "../pages/admin/coursManagement/OfferedCourses";
import RegisteredSemester from "../pages/admin/coursManagement/RegisteredSemester";
import SemesterRegistration from "../pages/admin/coursManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/user-management/CreateAdmin";
import CreateFaculty from "../pages/admin/user-management/CreateFaculty";
import CreateStudent from "../pages/admin/user-management/CreateStudent";
import StudentData from "../pages/admin/user-management/StudentData";
import StudentDetails from "../pages/admin/user-management/StudentDetails";
import StudentUpdate from "../pages/admin/user-management/StudentUpdate";

export const adminPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>
    },
    {
        name:'Academic Management',
        children:[
            {
                name:'Create.A Seamster',
                path:'create-academic-semester',
                element:<CreateAcademicSemester/>
            },
            {
                name:'Academic Seamster',
                path:'academic-semester',
                element:<AcademicSemester/>
            },
            {
                name:'Create.A Faculty',
                path:'create-academic-faculty',
                element:<CreateAcademicFaculty/>
            },
            {
                name:'Academic Faculty',
                path:'academic-faculty',
                element:<AcademicFaculty/>
            },
            {
                name:'Create.A Department',
                path:'create-academic-department',
                element:<CreateAcademicDepartment/>
            },
            {
                name:'Academic Department',
                path:'academic-department',
                element:<AcademicDepartment/>
            },
            ]

    },
    {
        name:'User Management',
        children:[
            {
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Students',
                path:'student-data',
                element:<StudentData/>
            },
            {
              
                path:'student/:studentId',
                element:<StudentDetails/>
            },
            {
               
                path:'studentUpdate/:updateId',
                element:<StudentUpdate/>
            },
            {
                name:'Create Student',
                path:'create-student',
                element:<CreateStudent/>
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty/>
            },
            {
                name:'Create Member',
                path:'create-member',
                element:<CreateFaculty/>
            },
        ]
    },
    {
        name:'Course Management',
        children:[
            {
                name:'Semester Registration',
                path:'semester-registration',
                element:<SemesterRegistration/>
            },
            {
                name:'Registered Semester',
                path:'registered-semester',
                element:<RegisteredSemester/>
            },
            
            {
                name:'Offered Course',
                path:'offered-course',
                element:<OfferedCourses/>
            },
            {
                name:'Courses',
                path:'courses',
                element:<Courses/>
            },
            {
                name:'Create-Course',
                path:'create-course',
                element:<CreateCourse/>
            },
            {
                name:'Offer-Course',
                path:'offer-course',
                element:<OfferCourse/>
            },
            
        ]
    }
]



// #Programatical way 

// export const adminSidebarItem = adminPaths.reduce((acc:TSidebarItem[],item)=>{
//     if(item.path && item.name){
//       acc.push({
//           key:item.name,
//        label:<NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
//       })
//     }

//     if(item.children){
        
//             acc.push({
//                 key:item.name,
//                 label:item.name,
//                 children:item.children.map((child)=>({
//                     key:child.name,
//                     label:<NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
//                 }))
//             })
        
//     }

//     return acc
// },[])

// export const adminRoutes = adminPaths.reduce((acc:TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }

//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }

//     return acc; 
// }, []); 


// console.log(adminRoutes);


// export const adminPaths =[
            
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },

//     {
//         path: 'create-admin',
//         element: <CreateAdmin/>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
// ]