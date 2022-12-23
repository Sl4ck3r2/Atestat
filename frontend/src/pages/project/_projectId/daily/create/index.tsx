import { Col, Row } from 'antd';
import { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

import CreateDailyMeetingForm, { FormState } from '../../../../../components/create-daily-meeting-form';

const DailyCreatePage: FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (form: FormState) => {
    if (!projectId) {
      return;
    }

    setIsLoading(true);

    try {
      navigate(`/project/${projectId}/daily/`);
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Create daily meeting</title>
      </Helmet>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={6}>
          <CreateDailyMeetingForm loading={isLoading} onSubmit={handleFormSubmit} />
        </Col>
      </Row>
    </>
  );
};

export default DailyCreatePage;
