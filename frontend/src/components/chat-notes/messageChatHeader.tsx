import { LeftOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout } from 'antd';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';

const MessageChatHeader: FC = () => {
  return (
    <div className={styles.messageChatHeaderContainer}>
      <Button type="text" size="large" style={{ color: '#AA14F0' }} icon={<LeftOutlined />}></Button>
      <div className={styles.messageChatHeaderImage}>
        <Avatar size={48} src="https://i.imgur.com/KniTFHh.jpg"></Avatar>
        <h1 className={styles.messageChatHeaderFriendName}>Ceapa</h1>
      </div>
    </div>
  );
};

export default MessageChatHeader;
