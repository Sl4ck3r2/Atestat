import { FC, useEffect, useState } from 'react';

import UserTable from '../../../components/users-table';
import { DataDto } from '../../../generated/api';
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
  return <UserTable data={data} />;
};

export default EmptyLayout;
