import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { FC, useEffect } from 'react';

import api from '../../utils/api';
import styles from './index.module.scss';
interface AddFriendsProps {
  data: any;
  deleteUserFromList: any;
}
const AddFriends: FC<AddFriendsProps> = ({ data, deleteUserFromList }) => {
  const sendFriendRequest = async (id: number) => {
    try {
      await api.chat.addFriendPost({ friendId: id, token: localStorage.getItem('token') || '' }).then((res) => {
        if (res.status === 200) {
          deleteUserFromList(id);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.converationContainer}>
      <div>
        <Avatar size={64} src={data.profilePictureUrl} />
      </div>
      <div className={styles.conversationDataContainer}>
        <div className={styles.converationData}>
          <div>
            <h1>
              <strong>{data.firstName}</strong>
            </h1>
            <p>
              <i>{data.email}</i>
            </p>
          </div>
          <div className={styles.frendsRequestOptions}>
            <Button onClick={() => sendFriendRequest(data.id)} size="large" type="text" icon={<UserAddOutlined />} />
          </div>
        </div>
        <div className={styles.conversationBorder}></div>
      </div>
    </div>
  );
};

export default AddFriends;
