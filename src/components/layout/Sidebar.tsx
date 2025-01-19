import { Layout, Menu } from "antd";
import { sidebarItemGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;
const Sidebar = () => {
    return (
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0">
                <div style={{ color: 'white', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <h1>Ph Management</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemGenerator(adminPaths, 'admin')} />
            </Sider>
        </div>
    );
};

export default Sidebar;