import { Button } from 'antd';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import AsyncStateRender from '../../../../components/async-state-render';
import api from '../../../../utils/api';

const DailyListPage: FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleCreateButtonClick = () => {
    navigate(`/project/${projectId}/daily/create`);
  };

  return (
    <>
      <Helmet>
        <title>Daily meetings</title>
      </Helmet>
    </>
  );
};

export default DailyListPage;
