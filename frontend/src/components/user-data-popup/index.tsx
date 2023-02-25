import { Image, Modal, Select, Skeleton, Tag } from 'antd';
import { FC } from 'react';

import { useUserProvider } from '../../context/User';
import { UserDto } from '../../generated/api';
import styles from '../user-data-popup/index.module.scss';
interface UserDataPopupProps {
  open: boolean | undefined;
  onOk: () => void;
  onCancel: () => void;
  dataUser: UserDto | undefined;
  isLoading: boolean;
}

const UserDataPopup: FC<UserDataPopupProps> = ({ open, onOk, onCancel, dataUser, isLoading }) => {
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <div className={styles.headContainer}>
        <div>
          <h1>{isLoading ? <Skeleton.Input active /> : dataUser?.firstName + ' ' + dataUser?.lastName}</h1>
          <p>
            <strong>{isLoading ? '' : dataUser?.email}</strong>
            <br />
            <strong className={styles.values}>
              {isLoading ? <Skeleton.Input size="small" active /> : dataUser?.country + ',' + dataUser?.city}
            </strong>
          </p>
        </div>
        <div className={styles.imageContainer}>
          {isLoading ? (
            <Skeleton.Avatar active size={100} />
          ) : (
            <Image
              sizes="small"
              className={styles.imageStyle}
              src={
                dataUser?.profilePictureUrl ||
                'https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg'
              }
            ></Image>
          )}
        </div>
      </div>
      <div className={styles.spacer}>
        <hr />
      </div>
      <div className={styles.bodyContainer}>
        <div>
          <strong>
            {isLoading ? <Skeleton.Input active size="small" /> : 'First Name'}
            <br />
          </strong>
          <strong className={styles.values}>
            {isLoading ? '' : dataUser?.firstName} <br />
          </strong>
          <br />
          <strong>
            {isLoading ? <Skeleton.Input active size="small" /> : 'Last Name'}
            <br />
          </strong>
          <strong className={styles.values}>
            {isLoading ? '' : dataUser?.lastName} <br />
          </strong>
          <br />
          <strong>
            {isLoading ? <Skeleton.Input active size="small" /> : 'Country'}
            <br />
          </strong>
          <strong className={styles.values}>
            {isLoading ? '' : dataUser?.country} <br />
          </strong>
          <br />
          <strong>
            {isLoading ? <Skeleton.Input active size="small" /> : 'City'}
            <br />
          </strong>
          <strong className={styles.values}>
            {isLoading ? '' : dataUser?.city} <br />
          </strong>
        </div>
        <div className={styles.secoundColumn}>
          <strong>{isLoading ? <Skeleton.Input active size="small" /> : 'Role'}</strong>
          <br />
          <p>
            {isLoading ? (
              ''
            ) : dataUser?.userRole?.name === 'SUPERADMIN' ? (
              <Tag color="purple">SUPERADMIN</Tag>
            ) : dataUser?.userRole?.name === 'ADMIN' ? (
              <Tag color="red">ADMIN</Tag>
            ) : (
              <Tag color="green">USER</Tag>
            )}
          </p>
          <br />
          <strong>
            {isLoading ? <Skeleton.Input active size="small" /> : 'Activity'}
            <br />
          </strong>
        </div>
      </div>
    </Modal>
  );
};

export default UserDataPopup;
