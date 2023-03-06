import { FC } from 'react';

import ChatContent from './chatContent';
import MessageChatInput from './chatInput';
import styles from './index.module.scss';
import MessageChatBody from './messageChatBody';
import MessageChatHeader from './messageChatHeader';

const Chat: FC = () => {
  return (
    <div className={styles.container}>
      <MessageChatHeader />
      <div className={styles.bodyContainer}>
        <ChatContent />
        <MessageChatInput />
      </div>
    </div>
  );
};

export default Chat;
