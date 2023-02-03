import { UserOutlined } from '@ant-design/icons';
import { Avatar, Modal } from 'antd';
import { FC } from 'react';

import { useUserProvider } from '../../context/User';
interface UserDataPopupProps {
  open: boolean | undefined;
  onOk: () => void;
  onCancel: () => void;
}

const UserDataPopup: FC<UserDataPopupProps> = ({ open, onOk, onCancel }) => {
  const { user } = useUserProvider();
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default UserDataPopup;
