import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { FC, ReactNode } from 'react';

import styles from './index.module.scss';
interface ChatHeaderProps {
  children?: ReactNode;
}

const ChatHeader: FC<ChatHeaderProps> = () => {
  return (
    <div>
      <h1 className={styles.title}>Chat</h1>
      <div className={styles.searchBar}>
        <Input />
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </div>
      <div className={styles.utils}>
        <Button type="dashed">Grup Nou</Button>
      </div>
    </div>
  );
};

export default ChatHeader;
