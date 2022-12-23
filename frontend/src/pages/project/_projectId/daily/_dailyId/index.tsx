import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

const DailyPage: FC = () => {
  const { dailyId } = useParams();
  return (
    <>
      <Helmet>
        <title>Daily: {dailyId}</title>
      </Helmet>
      <div>Daily meeting page. {dailyId}</div>
    </>
  );
};

export default DailyPage;
