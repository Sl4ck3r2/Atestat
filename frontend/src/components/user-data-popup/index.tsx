import { Image, Modal, Select, Tag } from 'antd';
import { FC } from 'react';

import { useUserProvider } from '../../context/User';
import styles from '../user-data-popup/index.module.scss';
interface UserDataPopupProps {
  open: boolean | undefined;
  onOk: () => void;
  onCancel: () => void;
}

const UserDataPopup: FC<UserDataPopupProps> = ({ open, onOk, onCancel }) => {
  const { user } = useUserProvider();
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <div className={styles.headContainer}>
        <div>
          <h1>
            {user?.firstName} {user?.lastName}
          </h1>
          <p>
            <strong>{user?.email}</strong>
            <br />
            <strong className={styles.values}>
              {user?.country},{user?.city}
            </strong>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image sizes="small" className={styles.imageStyle} src={user?.profilePictureUrl}></Image>
        </div>
      </div>
      <div className={styles.spacer}>
        <hr />
      </div>
      <div className={styles.bodyContainer}>
        <div>
          <strong>
            First Name <br />
          </strong>
          <strong className={styles.values}>
            {user?.firstName} <br />
          </strong>
          <br />
          <strong>
            Last Name Name
            <br />
          </strong>
          <strong className={styles.values}>
            {user?.lastName} <br />
          </strong>
          <br />
          <strong>
            Country
            <br />
          </strong>
          <strong className={styles.values}>
            {user?.country} <br />
          </strong>
          <br />
          <strong>
            City
            <br />
          </strong>
          <strong className={styles.values}>
            {user?.city} <br />
          </strong>
        </div>
        <div className={styles.secoundColumn}>
          <strong>Role</strong>
          <br />
          <p>
            {user?.userRole?.name === 'SUPERADMIN' ? (
              <Tag color="purple">SUPERADMIN</Tag>
            ) : user?.userRole?.name === 'ADMIN' ? (
              <Tag color="red">ADMIN</Tag>
            ) : (
              <Tag color="green">USER</Tag>
            )}
          </p>
          <br />
          <strong>Activity</strong>
        </div>
      </div>
    </Modal>
  );
};

export default UserDataPopup;
