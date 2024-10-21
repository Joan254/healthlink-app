"use client"
import React from 'react';
import { Form, Input, Button, Row, Col, Typography, Space, Card } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Item } = Form;
const { TextArea } = Input;

export default function Contact() {
  const onFinish = (values) => {
    console.log('Submitted:', values);
  };

  return (
    <div className="min-h-screen bg-white p-10 md:p-16">
      <Title level={2} className="text-center text-teal-700 mb-8">
        Get in Touch with Us
      </Title>

      <Paragraph className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        We&apos;re here to help! Whether you have questions about our services or need assistance, 
        feel free to contact us through the form below or reach out using the provided contact details.
      </Paragraph>

      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={10}>
          <Card
            bordered={false}
            className="shadow-lg rounded-lg bg-gray-50 p-6"
            style={{ minHeight: '100%' }}
          >
            <Title level={4} className="text-teal-700 mb-4">
              Contact Details
            </Title>
            <Space direction="vertical" size="large">
              <div className="flex items-center">
                <PhoneOutlined className="text-teal-500 mr-3 text-lg" />
                <span className="text-gray-700">+254742299486</span>
              </div>
              <div className="flex items-center">
                <MailOutlined className="text-teal-500 mr-3 text-lg" />
                <span className="text-gray-700">support@healthlink.com</span>
              </div>
              <div className="flex items-center">
                <EnvironmentOutlined className="text-teal-500 mr-3 text-lg" />
                <span className="text-gray-700">123 HealthLink Street, Nairobi, Kenya</span>
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card className="shadow-lg rounded-lg bg-gray-50 p-8">
            <Form layout="vertical" onFinish={onFinish}>
              <Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder="Enter your name" />
              </Item>

              <Item
                label="Email"
                name="email"
                rules={[
                  { required: true, type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Item>

              <Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject!' }]}
              >
                <Input placeholder="Enter the subject" />
              </Item>

              <Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <TextArea rows={5} placeholder="Type your message here" />
              </Item>

              <Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-teal-600 hover:bg-teal-500"
                >
                  Submit
                </Button>
              </Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
