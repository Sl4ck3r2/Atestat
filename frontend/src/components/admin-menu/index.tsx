import { BuildOutlined, GroupOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { UserDto } from '../../generated/api';
import styles from './index.module.scss';
interface DashboardProps {
  user: UserDto | undefined;
}
const AdminDashboard: FC<DashboardProps> = (user) => {
  const navigate = useNavigate();
  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'my-groups':
        navigate('my-groups');
        break;
      case 'profile':
        navigate('profile');
        break;
      case 'create-group':
        navigate('create-group');
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
          label: `${user?.user?.firstName}`, //grid si pentru email unul sub altul
          key: 'profile',
          icon: <Avatar shape="square" size={48} icon={<UserOutlined />}></Avatar>,
        },
        { label: 'My Groups', key: 'my-groups', icon: <GroupOutlined /> },
        { label: 'Create Group', key: 'create-group', icon: <BuildOutlined /> },
      ]}
      onSelect={handleMenuClick}
    ></Menu>
  );
};

export default AdminDashboard;
