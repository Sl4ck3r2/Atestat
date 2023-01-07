import { FC, useEffect, useState } from 'react';

import UserTable from '../../../components/users-table';
import { DataDto } from '../../../generated/api';
import DefaultLayout from '../../../layouts/Default';
import api from '../../../utils/api';

const EmptyLayout: FC = () => {
  const [data, setData] = useState<DataDto[]>([]);
  useEffect(() => {
    const fetcher = async () => {
      const response = await api.user.usersGet();
      setData(response.data);
    };
    fetcher();
  }, []);
  return (
    <DefaultLayout>
      <UserTable data={data} />
    </DefaultLayout>
  );
};

export default EmptyLayout;
