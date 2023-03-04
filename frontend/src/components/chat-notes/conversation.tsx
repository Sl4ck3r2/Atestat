import { Avatar, Badge } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';
// interface MessageListProps {
//   children?: ReactNode;
// }

const Conversation: FC = () => {
  return (
    <div className={styles.converationContainer}>
      <div>
        <Avatar size={64} src="https://i.imgur.com/KniTFHh.jpg" />
      </div>
      <div className={styles.conversationDataContainer}>
        <div className={styles.converationData}>
          <div>
            <h1>
              <strong>Macello</strong>
            </h1>
            <p>
              <i>scrie...</i>
            </p>
          </div>
          <div className={styles.converationTime}>
            <p>12:42</p>
            <Badge count={99 + '+'} />
          </div>
        </div>
        <div className={styles.conversationBorder}></div>
      </div>
    </div>
  );
};

export default Conversation;
