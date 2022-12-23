import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import ErrorImage from './images/404.jpg';
import styles from './index.module.scss';

const Page404: FC = () => {
  return (
    <div className={styles.backgroundColor}>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <img src={ErrorImage}></img>
    </div>
  );
};

export default Page404;
