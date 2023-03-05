import { FC, useRef, useState } from 'react';

import FriendsList from './addFriendsList';
import Conversation from './conversation';
import styles from './index.module.scss';

const MessageList: FC = () => {
  const [showScrollbar, setShowScrollbar] = useState<boolean>(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    setShowScrollbar(true);

    clearTimeout(timerRef.current || 0);

    timerRef.current = setTimeout(() => {
      setShowScrollbar(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  };
  return (
    <div
      onScroll={handleScroll}
      className={`${styles.messageListContainer} ${showScrollbar ? '' : styles.hideScrollbar}`}
    >
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
      <FriendsList />
    </div>
  );
};

export default MessageList;
