import { ArrowUpOutlined, LogoutOutlined, SettingFilled, TableOutlined } from '@ant-design/icons';
import { Menu, Table } from 'antd';
import { MenuProps } from 'antd';
import Layout from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import api from '../../../utils/api';
import styles from './index.module.scss';
const SideBar: React.FC = () => {
  const navigate = useNavigate();
  type AvailableProjectPaths = 'allusers' | 'promote' | 'settings';

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
      <Sider
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
      </Sider>
    </Layout>
  );
};

export default SideBar;
