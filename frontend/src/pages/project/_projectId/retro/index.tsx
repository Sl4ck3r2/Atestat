import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const RetroListPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Retrospective meetings</title>
      </Helmet>
      <div>Retrospective meetings list page</div>
    </>
  );
};

export default RetroListPage;
