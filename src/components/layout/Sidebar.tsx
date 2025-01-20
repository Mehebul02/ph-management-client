import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/faculty.routes";
import { studentPath } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
    ADMIN:'admin',
    FACULTY:'faculty',
    STUDENT:'student'
}

const Sidebar = () => {
    const role ='faculty'
    let sidebarItems


    switch (role) {
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
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0">
                <div style={{ color: 'white', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <h1>Ph Management</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
            </Sider>
        </div>
    );
};

export default Sidebar;