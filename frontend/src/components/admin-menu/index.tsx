import { BuildOutlined, GroupOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC } from 'react';
import { useNavigate } from 'react-router';

const AdminDashboard: FC = () => {
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
      mode="inline"
      theme="light"
      items={[
        { label: 'My Groups', key: 'my-groups', icon: <GroupOutlined /> },
        { label: 'Create Group', key: 'create-group', icon: <BuildOutlined /> },
        { label: 'Profile', key: 'profile', icon: <UserOutlined /> },
      ]}
      onSelect={handleMenuClick}
    ></Menu>
  );
};

export default AdminDashboard;
