import { Avatar, Badge, Space } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
// interface MessageListProps {
//   children?: ReactNode;
// }

const ToolBar: FC = () => {
  return (
    <div className={styles.toolBarContainer}>
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={3}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={2}>
        <Avatar shape="square" size="large" />
      </Badge>
    </div>
  );
};

export default ToolBar;
