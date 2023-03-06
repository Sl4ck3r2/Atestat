import { FC, useRef, useState } from 'react';

import styles from './index.module.scss';
import Message from './message';

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
      className={`${styles.messageChatBodyMessageContainer} ${showScrollbar ? '' : styles.hideScrollbar}`}
    >
      <Message />
    </div>
  );
};

export default MessageChatBody;
