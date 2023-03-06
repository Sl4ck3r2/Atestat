import { FC } from 'react';

import styles from './index.module.scss';

const Message: FC = () => {
  return (
    <div className={styles.textMessageContainerUser}>
      <div className={styles.message}>
        <p>Test trece pe rand nou si nu taie cuvintele e ok totul</p>
        <div className={styles.sentHoure}>00:00</div>
      </div>
    </div>
  );
};

export default Message;
