import { FC, useRef, useState } from 'react';

import AddFriends from './addFriends';
import Conversation from './conversation';
import Friend from './friend';
import styles from './index.module.scss';
import Message from './message';
import { WINDOW } from './window';
interface ChatContentProps {
  currentWindow: string;
  handleWindow: (window: string) => void;
}

const ChatContent: FC<ChatContentProps> = ({ currentWindow, handleWindow }) => {
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
      className={`${currentWindow === WINDOW.chat ? styles.chatContentMessages : styles.chatContentGeneral} ${
        showScrollbar ? '' : styles.hideScrollbar
      }`}
    >
      {currentWindow === WINDOW.chat ? (
        <Message />
      ) : currentWindow === WINDOW.friends ? (
        <Friend />
      ) : currentWindow === WINDOW.addFriends ? (
        <AddFriends />
      ) : (
        <Conversation handleWindow={handleWindow} />
      )}
    </div>
  );
};

export default ChatContent;
