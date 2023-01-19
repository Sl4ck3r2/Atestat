import { UserOutlined } from '@ant-design/icons';
import { Avatar, Modal } from 'antd';
import { FC } from 'react';
interface UserDataPopupProps {
  open: boolean | undefined;
  onOk: () => void;
  onCancel: () => void;
}

const UserDataPopup: FC<UserDataPopupProps> = ({ open, onOk, onCancel }) => {
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default UserDataPopup;
