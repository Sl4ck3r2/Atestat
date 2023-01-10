import {
  BuildOutlined,
  GroupOutlined,
  LogoutOutlined,
  NotificationOutlined,
  SettingFilled,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC, ReactNode, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Role } from '../../context/Role';
import { useUserProvider } from '../../context/User';
import styles from './index.module.scss';
interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useUserProvider();
  const { signOut } = useUserProvider();
  console.log(user);
  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'all-users':
        navigate('all-users');
        break;
      case 'notification':
        navigate('notification');
        break;
      case 'settings':
        navigate('settings');
        break;
      case 'profile':
        navigate('profile');
        break;
      case 'create-group':
        navigate('create-group');
        break;
      case 'my-groups':
        navigate('my-groups');
        break;
      case 'logout':
        signOut();
        navigate('/login');
        break;
    }
  };

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
          <Menu
            style={{ background: '#242625' }}
            className={styles.MenuContainerStyle}
            mode="inline"
            theme="dark"
            items={[
              {
                label: 'Profile',
                key: 'profile',
                icon: <Avatar shape="square" size={48} icon={<UserOutlined />}></Avatar>,
              },
              { label: 'All Users', key: 'all-users', icon: <TableOutlined /> },
              { label: 'Notification', key: 'notification', icon: <NotificationOutlined /> },
            ]}
            onSelect={handleMenuClick}
          ></Menu>
        </Role>
        <Role renderIf={({ ADMIN }) => ADMIN}>
          <Menu
            style={{ background: '#242625' }}
            className={styles.MenuContainerStyle}
            mode="inline"
            theme="dark"
            items={[
              {
                label: 'Profile',
                key: 'profile',
                icon: <Avatar shape="square" size={48} icon={<UserOutlined />}></Avatar>,
              },
              { label: 'My Groups', key: 'my-groups', icon: <GroupOutlined /> },
              { label: 'Create Group', key: 'create-group', icon: <BuildOutlined /> },
            ]}
            onSelect={handleMenuClick}
          ></Menu>
        </Role>
        <Role renderIf={({ USER }) => USER}>
          <Menu
            style={{ background: '#242625' }}
            className={styles.MenuContainerStyle}
            mode="inline"
            theme="dark"
            items={[
              {
                label: 'Profile',
                key: 'profile',
                icon: <Avatar shape="square" size={48} icon={<UserOutlined />}></Avatar>,
              },
              { label: 'My Groups', key: 'all-users', icon: <GroupOutlined /> },
            ]}
            onSelect={handleMenuClick}
          ></Menu>
        </Role>
        <div className={styles.Spacer}></div>
        <Menu
          style={{ background: '#242625' }}
          selectedKeys={[]}
          mode="inline"
          theme="dark"
          items={[
            { label: 'Logout', key: 'logout', icon: <LogoutOutlined /> },
            { label: 'Settings', key: 'settings', icon: <SettingFilled /> },
          ]}
          onSelect={handleMenuClick}
        ></Menu>
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
