import { GroupOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC } from 'react';
import { useNavigate } from 'react-router';

const UserDashboard: FC = () => {
  const navigate = useNavigate();
  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'my-groups':
        navigate('my-groups');
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
        { label: 'My Groups', key: 'my-groups', icon: <GroupOutlined /> },
        { label: 'Profile', key: 'profile', icon: <UserOutlined /> },
      ]}
      onSelect={handleMenuClick}
    ></Menu>
  );
};

export default UserDashboard;
