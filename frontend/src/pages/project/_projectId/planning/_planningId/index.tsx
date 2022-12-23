import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

const PlanningPage: FC = () => {
  const { planningId } = useParams();
  return (
    <>
      <Helmet>
        <title>Planning meeting: {planningId}</title>
      </Helmet>
      <div>Planning meeting page. {planningId}</div>
    </>
  );
};

export default PlanningPage;
