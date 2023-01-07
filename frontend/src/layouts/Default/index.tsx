import { ArrowUpOutlined, LogoutOutlined, SettingFilled, TableOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC, ReactNode, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useUserProvider } from '../../context/User';
import styles from './index.module.scss';
interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { signOut } = useUserProvider();

  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'all-users':
        navigate('all-users');
        break;
      case 'promote':
        navigate('promote');
        break;
      case 'settings':
        navigate('settings');
        break;
      case 'logout':
        signOut();
        navigate('/');
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
        <Menu
          style={{ background: '#242625' }}
          className={styles.MenuContainerStyle}
          mode="inline"
          theme="dark"
          items={[
            { label: 'All Users', key: 'all-users', icon: <TableOutlined /> },
            { label: 'Promote', key: 'promote', icon: <ArrowUpOutlined /> },
          ]}
          onSelect={handleMenuClick}
        ></Menu>
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
