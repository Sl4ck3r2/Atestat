import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';
interface EmptyLayoutProps {
  children?: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Content>{children || <Outlet />}</Layout.Content>
    </Layout>
  );
};

export default EmptyLayout;
