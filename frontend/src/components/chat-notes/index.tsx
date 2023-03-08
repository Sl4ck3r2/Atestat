import { FC, useState } from 'react';

import ChatContent from './chatContent';
import MessageChatInput from './chatInput';
import ChatHeader from './header';
import styles from './index.module.scss';
import MessageChatHeader from './messageChatHeader';
import ToolBar from './toolBar';
import { WINDOW } from './window';

const Chat: FC = () => {
  const [currentWindow, setCurrentWindos] = useState<string>(WINDOW.conversation);

  const handleWindow = (window: string) => {
    setCurrentWindos(window);
  };

  return (
    <div className={styles.container}>
      {currentWindow === WINDOW.chat ? <MessageChatHeader handleWindow={handleWindow} /> : <ChatHeader />}
      <div className={styles.bodyContainer}>
        <ChatContent handleWindow={handleWindow} currentWindow={currentWindow} />
        {currentWindow === WINDOW.chat ? (
          <MessageChatInput />
        ) : (
          <ToolBar selectedWindow={currentWindow} handleWindow={handleWindow} />
        )}
      </div>
    </div>
  );
};

export default Chat;
