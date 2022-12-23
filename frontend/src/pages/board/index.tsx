import { FC, ReactNode } from 'react';

import SideBar from '../project/sidebar';
import styles from './index.module.scss';

interface EmptyLayoutProps {
  children?: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return <SideBar />;
};

export default EmptyLayout;
