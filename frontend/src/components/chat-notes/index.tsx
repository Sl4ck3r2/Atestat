import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import ChatHeader from './header';
import styles from './index.module.scss';
import MessageList from './messageList';
import ToolBar from './toolBar';
interface ChatProps {
  children?: ReactNode;
}

const Chat: FC<ChatProps> = () => {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <div className={styles.bodyContainer}>
        <MessageList />
        <ToolBar />
      </div>
    </div>
  );
};

export default Chat;
