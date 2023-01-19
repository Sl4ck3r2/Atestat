import { Layout } from 'antd';
import { FC, ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';

import AdminDashboard from '../../components/admin-menu';
import BottomDashboard from '../../components/bottom-menu';
import SuperAdminDashboard from '../../components/superadmin-menu';
import UserDashboard from '../../components/user-menu';
import { Role } from '../../context/Role';
import { useUserProvider } from '../../context/User';
import styles from './index.module.scss';
interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const { user } = useUserProvider();
  const [collappsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Layout.Sider
        style={{ minHeight: '100vh', background: '#242625' }}
        className={styles.MenuContainer}
        collapsible
        collapsed={collappsed}
        onCollapse={(value) => {
          setCollapsed(value);
        }}
        collapsedWidth={64}
        width={150}
      >
        <Role renderIf={({ SUPERADMIN }) => SUPERADMIN}>
          <SuperAdminDashboard user={user} />
        </Role>
        <Role renderIf={({ ADMIN }) => ADMIN}>
          <AdminDashboard user={user} />
        </Role>
        <Role renderIf={({ USER }) => USER}>
          <UserDashboard user={user} />
        </Role>
        <div className={styles.Spacer}></div>
        <BottomDashboard />
      </Layout.Sider>
      <Layout>
        <Layout.Header />
        <Layout.Content style={{ margin: '24px 16px' }}>{children || <Outlet />}</Layout.Content>
        <Layout.Footer />
      </Layout>
      <Layout.Footer />
    </Layout>
  );
};

export default DefaultLayout;
