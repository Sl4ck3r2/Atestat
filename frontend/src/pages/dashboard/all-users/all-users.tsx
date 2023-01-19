import { FC, useEffect, useState } from 'react';

import UserTable from '../../../components/users-table';
import { TableDataDto } from '../../../generated/api';
import api from '../../../utils/api';

const AllUsers: FC = () => {
  const [data, setData] = useState<TableDataDto | undefined>();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const getCurrentPage = (currentPage: number) => {
    setPage(currentPage);
  };

  useEffect(() => {
    const fetcher = async () => {
      setLoading(true);
      const response = await api.user.usersGet({ page: page }).finally(() => setLoading(false));
      console.log(response.data);
      setData(response.data);
    };
    fetcher();
  }, [page]);

  return <UserTable loading={loading} getCurrentPage={getCurrentPage} data={data} />;
};

export default AllUsers;
