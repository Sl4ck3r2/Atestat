import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';

const TextMessage: FC = () => {
  return (
    <div className={styles.textMessageContainer}>
      <p>kjasdhajkaskjdhaksjdhaskjdhaskjdhe</p>
      <div className={styles.sentHoure}>00:00</div>
    </div>
  );
};

export default TextMessage;
