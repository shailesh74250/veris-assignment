import React, { FC } from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/reset.css';
import './scheduleMeeting.css';
import { UserDetails } from '../components/UserDetails';
import { MeetingDetails } from '../components/MeetingDetails';
import { Container } from '../components/Container';
import { Card } from '../components/Card';

export const ScheduleMeeting: FC = () => (
  <Container>
    <Card>
      <Row className="card">
        <Col sm={24} md={12} lg={8} xl={10} className="md">
          <MeetingDetails />
        </Col>
        <Col sm={24} md={12} lg={16} xl={14} className="ud">
          <UserDetails />
        </Col>
      </Row>
    </Card>
  </Container>
);
