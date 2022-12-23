import { LogoutOutlined, ProfileOutlined, ProjectOutlined, RocketOutlined, TableOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { FC, ReactNode, useMemo } from 'react';
import { matchPath, useLocation, useParams } from 'react-router';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

interface DefaultLayoutProps {
  children?: ReactNode;
}

type AvailableProjectPaths = 'daily' | 'retro' | 'planning';

const isActive = (projectPath: AvailableProjectPaths, currentPath: string): boolean => {
  return !!matchPath(`/project/:projectId/${projectPath}`, currentPath);
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  const { projectId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick: MenuProps['onSelect'] = ({ key }) => {
    switch (key) {
      case 'projects':
        navigate('/project');
        break;
      case 'logout':
        console.log('logout action');
        break;
      default: {
        const path = `/project/${projectId}/${key}`;
        navigate(path);
      }
    }
  };

  const activeMenuItem = useMemo<Array<string>>(() => {
    const path = location.pathname;

    if (isActive('daily', path)) {
      return ['daily'];
    }
    if (isActive('retro', path)) {
      return ['retro'];
    }
    if (isActive('planning', path)) {
      return ['planning'];
    }

    return [];
  }, [location]);

  return (
    <Layout>
      <Layout.Sider
        className={styles.MenuContainer}
        breakpoint={'lg'}
        collapsedWidth={0}
        width={62}
        style={{ minHeight: '100vh' }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={activeMenuItem}
          items={[
            { key: 'daily', icon: <ProfileOutlined /> },
            { key: 'retro', icon: <TableOutlined /> },
            { key: 'planning', icon: <RocketOutlined /> },
          ]}
          onSelect={handleMenuClick}
        />
        <div className={styles.Spacer} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[]}
          items={[
            { key: 'projects', icon: <ProjectOutlined /> },
            { key: 'logout', icon: <LogoutOutlined /> },
          ]}
          onSelect={handleMenuClick}
        ></Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header />
        <Layout.Content style={{ margin: '24px 16px' }}>{children || <Outlet />}</Layout.Content>
        <Layout.Footer />
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
