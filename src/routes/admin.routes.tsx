import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";




const adminPaths2 =[
    {
        name:'Dashboard',
        pathe:'/admin/dashboard',
        element:<AdminDashboard/>
    },
    {
        name:'User Management',
        children:[
            {
                name:'Create Admin',
                pathe:'/admin/create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Student',
                pathe:'/admin/create-student',
                element:<CreateStudent/>
            },
            {
                name:'Create Faculty',
                pathe:'/admin/create-faculty',
                element:<CreateFaculty/>
            },
        ]
    }
]

export const adminPaths =[
            
    {
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        path: 'create-student',
        element: <CreateStudent />
    },

    {
        path: 'create-admin',
        element: <CreateAdmin/>
    },
    {
        path: 'create-faculty',
        element: <CreateFaculty />
    },
]