import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import AdminContent from '../project/_projectId/adminContent';
import SideBar from '../project/sidebar';
import styles from './index.module.scss';

interface EmptyLayoutProps {
  children?: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return (
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
          <SideBar />
        </Sider>
        <Content className={styles.content}>
          <AdminContent />
        </Content>
      </Layout>
    </Layout>
  );
};
export default EmptyLayout;
