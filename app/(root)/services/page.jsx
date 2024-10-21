"use client"
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Services() {
  return (
    <div className="min-h-screen bg-white p-8">
      <Title level={2} className="text-center text-teal-600 mb-8">
        Our Services
      </Title>
      <Paragraph className="text-center max-w-3xl mx-auto mb-12 text-lg text-gray-700">
        At HealthLink, we offer a comprehensive range of healthcare solutions to ensure 
        efficient data management and improve the delivery of healthcare services.
      </Paragraph>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={8}>
          <Card
            title="Patient Management"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Manage patient records, treatments, and appointments seamlessly across 
              different healthcare facilities.
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
              Issue secure prescriptions electronically, reducing errors and ensuring 
              timely medication for patients.
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
              Access an updated directory of hospitals and health facilities to facilitate 
              referrals and patient services.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Chronic Disease Monitoring"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Monitor chronic conditions with real-time data tracking and ensure better 
              patient outcomes.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Health Data Integration"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Integrate with health research platforms to leverage data insights for 
              better healthcare outcomes.
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            title="Support & Consulting"
            bordered={false}
            className="hover:shadow-lg transition-shadow"
          >
            <p>
              Get 24/7 support and consulting services to ensure smooth operations and 
              optimized healthcare delivery.
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
