import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/features/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}

const Sidebar = () => {
 const user =useAppSelector(selectCurrentUser)
    let sidebarItems

// const role = 'admin';
// let sidebarItems;


    switch (user?.role) {
        case userRole.ADMIN:
        sidebarItems = sidebarItemGenerator(adminPaths,userRole.ADMIN)
            break;
        case userRole.FACULTY:
        sidebarItems = sidebarItemGenerator(facultyPath,userRole.FACULTY)
            break;
        case userRole.STUDENT:
        sidebarItems = sidebarItemGenerator(studentPath,userRole.STUDENT)
            break;
    
        default:
            break;
    }

    return (
        <div className="">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
                >
                <div style={{ color: 'white', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <h1>Ph Management</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
            </Sider>
        </div>
    );
};

export default Sidebar;
