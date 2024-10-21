"use client"
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Title level={2} className="text-center text-teal-600 mb-8">
        About HealthLink
      </Title>
      <Paragraph className="text-center max-w-3xl mx-auto mb-12 text-lg text-gray-700">
        HealthLink Health Information Management System is designed to 
        streamline data management across health facilities. It enables 
        medical practitioners, chronic disease trackers, and health research 
        organizations to access comprehensive data, thereby enhancing 
        operational efficiency, facilitating informed decision-making, and 
        supporting advancements in healthcare delivery and research.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8}>
          <Card
            title="Patient Portal"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Provides patients access to their treatment history, prescriptions,
              and appointment schedules to stay engaged with their care.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Practitioner Portal"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Allows doctors and healthcare professionals to manage patient 
              treatments, issue electronic prescriptions, and access vital records.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Hospital Directory"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              A comprehensive directory of health facilities, ensuring quick access
              to services and improved patient referrals across locations.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Electronic Prescriptions"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Enables practitioners to issue secure prescriptions electronically,
              ensuring seamless delivery of care and medication tracking.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Chronic Disease Tracking"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Supports continuous monitoring and management of chronic conditions,
              providing better patient outcomes through data-driven insights.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Health Research Integration"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Facilitates collaboration with research organizations, leveraging data
              to advance healthcare and implement the latest treatments.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
