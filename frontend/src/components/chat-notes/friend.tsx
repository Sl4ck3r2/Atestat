import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
// interface MessageListProps {
//   children?: ReactNode;
// }

const Friend: FC<any> = ({ data, addFriendRequest }) => {
  const acceptFriendRequest = async (inf: any) => {
    console.log(inf);
    const URL =
      'http://localhost:3001/api/accept-friend?' +
      new URLSearchParams({
        friendId: inf,
      });
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token') || '',
      },
    }).then((response) => {
      if (response.status == 200) {
        addFriendRequest(data.id);
      }
    });
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
              <i>{data.lastName}</i>
            </p>
          </div>
          {data.status === 'padding' ? (
            <div className={styles.frendsRequestOptions}>
              <Button
                onClick={() => acceptFriendRequest(data.id)}
                style={{ color: 'green', borderColor: 'green' }}
                icon={<CheckOutlined />}
              />
              <Button danger icon={<CloseOutlined />} />
            </div>
          ) : null}
        </div>
        <div className={styles.conversationBorder}></div>
      </div>
    </div>
  );
};

export default Friend;
