import { FC, useRef, useState } from 'react';

import styles from './index.module.scss';
import TextMessage from './message';

const MessageChatBody: FC = () => {
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
      className={`${styles.messageChatBodyContainer} ${showScrollbar ? '' : styles.hideScrollbar}`}
    >
      <div className={styles.userMessage}>
        <TextMessage />
      </div>
      <div className={styles.userMessage}>
        <TextMessage />
      </div>
      <div className={styles.peopleMessage}>
        <TextMessage />
      </div>
      <div className={styles.peopleMessage}>
        <TextMessage />
      </div>
      <div className={styles.userMessage}>
        <TextMessage />
      </div>
      <div className={styles.peopleMessage}>
        <TextMessage />
      </div>
      <div className={styles.userMessage}>
        <TextMessage />
      </div>
    </div>
  );
};

export default MessageChatBody;
