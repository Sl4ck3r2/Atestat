import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

const RetroPage: FC = () => {
  const { retroId } = useParams();
  return (
    <>
      <Helmet>
        <title>Retrospective meeting: ${retroId}</title>
      </Helmet>
      <div>Retrospective meeting page. {retroId}</div>
    </>
  );
};

export default RetroPage;
