import { Button, Card, Col, Row, Typography } from 'antd';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import AsyncStateRender from '../../components/async-state-render';
import api from '../../utils/api';

const ProjectListPage: FC = () => {
  //const state = useAsync(() => api.auth.getDataGet());
  // console.log(state);
  const navigate = useNavigate();

  const handleOpenProjectClick = (id?: number) => {
    if (id === undefined) {
      return;
    }

    navigate(`/project/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Typography.Title>Select a project</Typography.Title>
      <Row>
        <Col span={24}>
          {/* <AsyncStateRender state={state} onSuccess={(response) => <Row gutter={[15, 15]}></Row>} /> */}
        </Col>
      </Row>
    </>
  );
};

export default ProjectListPage;
