import { Modal } from 'antd';
import { FC } from 'react';

interface UserDataPopupProps {
  open: boolean | undefined;
  onOk: () => void;
  onCancel: () => void;
}

const UserDataPopup: FC<UserDataPopupProps> = ({ open, onOk, onCancel }) => {
  return (
    <Modal title="Name+Profile Picture" open={open} onOk={onOk} onCancel={onCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default UserDataPopup;
