import { MessageOutlined, TeamOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
// interface MessageListProps {
//   children?: ReactNode;
// }

const ToolBar: FC = () => {
  return (
    <div className={styles.toolBarContainer}>
      <Badge color="#AA14F0" offset={[-25, 8]} count={5}>
        <Avatar
          style={{ color: '#AA14F0', backgroundColor: '#EEEEEE' }}
          icon={<MessageOutlined />}
          shape="square"
          size="large"
        />
        <div className={styles.toolName}>Conversation</div>
      </Badge>
      <Badge color="#AA14F0" offset={[-10, 8]} count={3}>
        <Avatar
          style={{ color: '#AA14F0', backgroundColor: '#EEEEEE' }}
          icon={<TeamOutlined />}
          shape="square"
          size="large"
        />
        <div className={styles.toolName}>Friends</div>
      </Badge>
      <Badge color="#AA14F0" offset={[-15, 1]} count={2}>
        <Avatar shape="square" size="large" />
        <div className={styles.toolName}>Conversation</div>
      </Badge>
    </div>
  );
};

export default ToolBar;
