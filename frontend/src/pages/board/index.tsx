import { FC, ReactNode } from 'react';

import SideBar from '../project/sidebar';
interface EmptyLayoutProps {
  children?: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return <SideBar />;
};

export default EmptyLayout;
