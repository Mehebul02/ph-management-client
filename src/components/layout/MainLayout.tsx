import { Button, Layout, } from 'antd';
const { Header, Content,  } = Layout;
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
const MainLayout = () => {

  const disPatch = useDispatch()
  const handleLogout =()=>{
disPatch(logout())
  }
  return (
    <div>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header style={{ padding: 0, }} ><Button onClick={handleLogout}>Logout</Button></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{
              padding: 24,
              minHeight: 360,
            }}
            >
              <Outlet />
            </div>
          </Content>
         
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;