import { MessageFilled } from '@ant-design/icons';
import { FC, ReactNode } from 'react';

import styles from '../window-chat/index.module.scss';
interface EmptyLayoutProps {
  children?: ReactNode;
}

const WindowChat: FC<EmptyLayoutProps> = ({ children }) => {
  return <MessageFilled className={styles.popup} />;
};

export default WindowChat;
