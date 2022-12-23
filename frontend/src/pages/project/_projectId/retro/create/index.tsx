import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

const RetroCreatePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Create retrospective meeting</title>
      </Helmet>
      <div>Retrospective meeting creation page</div>
    </>
  );
};

export default RetroCreatePage;
