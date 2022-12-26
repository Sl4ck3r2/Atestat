import { ArrowUpOutlined, LogoutOutlined, SettingFilled, TableOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC, ReactNode, useEffect, useState } from 'react';
import { matchPath } from 'react-router';
import { Outlet, useNavigate } from 'react-router-dom';

import api from '../../utils/api';
import styles from './index.module.scss';
interface DefaultLayoutProps {
  children?: ReactNode;
}

type AvailableProjectPaths = 'daily' | 'retro' | 'planning';

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'allusers':
        navigate('allusers');
        break;
      case 'promote':
        navigate('promote');
        break;
      case 'settings':
        navigate('settings');
        break;
      case 'logout':
        localStorage.removeItem('token');
        navigate('/login');
        break;
    }
  };

  const [collappsed, setCollapsed] = useState(false);
  useEffect(() => {
    const fetcher = async () => {
      await api.user.userCurrentGet({
        token: localStorage.getItem('token') || '',
      });
    };
    fetcher();
  }, []);

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
            { label: 'All Users', key: 'allusers', icon: <TableOutlined /> },
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
