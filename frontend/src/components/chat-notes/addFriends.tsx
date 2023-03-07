import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';

const AddFriends: FC = () => {
  return (
    <div className={styles.converationContainer}>
      <div>
        <Avatar size={64} src="https://i.imgur.com/KniTFHh.jpg" />
      </div>
      <div className={styles.conversationDataContainer}>
        <div className={styles.converationData}>
          <div>
            <h1>
              <strong>Ruja Marcello</strong>
            </h1>
            <p>
              <i>rujamarcello@yahoo.com</i>
            </p>
          </div>
          <div className={styles.frendsRequestOptions}>
            <Button size="large" type="text" icon={<UserAddOutlined />} />
          </div>
        </div>
        <div className={styles.conversationBorder}></div>
      </div>
    </div>
  );
};

export default AddFriends;
