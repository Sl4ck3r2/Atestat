import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router';

import UserTable from '../../components/users-table';
import DefaultLayout from '../../layouts/Default';

interface EmptyLayoutProps {
  children?: ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = () => {
  return (
    <DefaultLayout>
      <UserTable />
    </DefaultLayout>
  );
};
export default EmptyLayout;
