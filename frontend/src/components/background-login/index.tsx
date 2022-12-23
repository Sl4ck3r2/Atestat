import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';

interface BackgroundLoginProps {
  children?: ReactNode;
}

const BackgroundLogin: FC<BackgroundLoginProps> = ({ children }) => {
  return (
    <>
      <div className={styles.context}>{children || <Outlet />}</div>

      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default BackgroundLogin;
