import { NotificationOutlined, TableOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC } from 'react';
import { useNavigate } from 'react-router';

const SuperAdminDashboard: FC = () => {
  const navigate = useNavigate();
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
      mode="inline"
      theme="light"
      items={[
        { label: 'All Users', key: 'all-users', icon: <TableOutlined /> },
        { label: 'Notification', key: 'notification', icon: <NotificationOutlined /> },
        { label: 'Profile', key: 'profile', icon: <UserOutlined /> },
      ]}
      onSelect={handleMenuClick}
    ></Menu>
  );
};

export default SuperAdminDashboard;
