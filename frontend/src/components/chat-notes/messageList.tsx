import { FC } from 'react';

import Conversation from './conversation';
import styles from './index.module.scss';
// interface MessageListProps {
//   children?: ReactNode;
// }

const MessageList: FC = () => {
  return (
    <div className={styles.messageListContainer}>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default MessageList;
