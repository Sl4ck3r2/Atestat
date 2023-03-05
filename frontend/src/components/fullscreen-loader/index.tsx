import { Spin } from 'antd';
import { FC } from 'react';

import styles from './index.module.scss';

const FullscreenLoader: FC = () => {
  return (
    <div className={styles.spinner}>
      <Spin />
    </div>
  );
};

export default FullscreenLoader;
