import { NotificationOutlined, TableOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { useUserProvider } from '../../../context/User';
import { UserDto } from '../../../generated/api';
import styles from '../index.module.scss';
interface DashboardProps {
  user: UserDto | undefined;
}
const SuperAdminDashboard: FC<DashboardProps> = (user) => {
  const navigate = useNavigate();
  const { signOut } = useUserProvider();
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
    }
  };
  return (
    <Menu
      style={{ background: '#242625' }}
      className={styles.MenuContainerStyle}
      mode="inline"
      theme="dark"
      items={[
        {
          label: `${user?.user?.firstName}`,
          key: 'profile',
          icon: <Avatar shape="square" size={48} icon={<UserOutlined />}></Avatar>,
        },
        { label: 'All Users', key: 'all-users', icon: <TableOutlined /> },
        { label: 'Notification', key: 'notification', icon: <NotificationOutlined /> },
      ]}
      onSelect={handleMenuClick}
    ></Menu>
  );
};

export default SuperAdminDashboard;
