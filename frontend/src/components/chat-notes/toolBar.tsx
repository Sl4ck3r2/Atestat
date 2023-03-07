import { MessageOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Space } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
import { WINDOW } from './window';
interface ToolBarProps {
  handleWindow: (window: string) => void;
}

const ToolBar: FC<ToolBarProps> = ({ handleWindow }) => {
  return (
    <div className={styles.toolBarContainer}>
      <Badge color="#AA14F0" offset={[-25, 8]} count={5}>
        <Avatar
          onClick={() => handleWindow(WINDOW.conversation)}
          style={{ color: '#AA14F0', backgroundColor: '#EEEEEE' }}
          icon={<MessageOutlined />}
          shape="square"
          size="large"
        />
        <div className={styles.toolName}>Conversation</div>
      </Badge>
      <Badge color="#AA14F0" offset={[-10, 8]} count={3}>
        <Avatar
          onClick={() => handleWindow(WINDOW.friends)}
          style={{ color: '#AA14F0', backgroundColor: '#EEEEEE' }}
          icon={<TeamOutlined />}
          shape="square"
          size="large"
        />
        <div className={styles.toolName}>Friends</div>
      </Badge>
      <Badge>
        <Avatar
          onClick={() => handleWindow(WINDOW.addFriends)}
          style={{ color: '#AA14F0', backgroundColor: '#EEEEEE' }}
          icon={<UsergroupAddOutlined />}
          shape="square"
          size="large"
        />
        <div className={styles.toolName}>Add Friends</div>
      </Badge>
    </div>
  );
};

export default ToolBar;
