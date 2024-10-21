"use client"
import { Button, Card, Col, Row, Typography } from 'antd';
import { MedicineBoxOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="bg-teal-600 text-white p-16 rounded-lg shadow-lg text-center mb-8">
        <Title className="text-white">HealthLink Health Information Management System</Title>
        <Paragraph className="text-lg">
          Streamlining data management across health facilities to empower healthcare delivery, research, and decision-making.
        </Paragraph>
        <Button href="/register" type="primary" size="large" className="mt-4 bg-teal-400 hover:bg-teal-500">
          Get Started
        </Button>
      </div>

      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={24} md={8}>
          <Card 
            className="hover:shadow-lg" 
            title="Patient and Practitioner Portals" 
            bordered={false} 
            cover={
              <UserOutlined 
                style={{ fontSize: 48, margin: 'auto', padding: '16px', color: '#52c41a' }} 
              />
            }
          >
            <Paragraph>
              Manage treatments and appointments with secure access for both patients and medical practitioners.
            </Paragraph>
          </Card>
        </Col>

        {/* Hospital Directories Card */}
        <Col xs={24} md={8}>
          <Card 
            className="hover:shadow-lg" 
            title="Hospital Directories" 
            bordered={false} 
            cover={
              <MedicineBoxOutlined 
                style={{ fontSize: 48, margin: 'auto', padding: '16px', color: '#0891b2' }} 
              />
            }
          >
            <Paragraph>
              Access comprehensive directories of healthcare facilities for smooth referrals and care coordination.
            </Paragraph>
          </Card>
        </Col>

        {/* Electronic Prescriptions Card */}
        <Col xs={24} md={8}>
          <Card 
            className="hover:shadow-lg" 
            title="Electronic Prescriptions" 
            bordered={false} 
            cover={
              <FileTextOutlined 
                style={{ fontSize: 48, margin: 'auto', padding: '16px', color: '#eb2f96' }} 
              />
            }
          >
            <Paragraph>
              Issue and manage electronic prescriptions seamlessly, reducing paperwork and improving accuracy.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Call-to-Action Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <Title level={3}>Join HealthLink Today!</Title>
        <Paragraph className="text-lg">
          Enhance healthcare delivery through integrated data management and innovative tools.
        </Paragraph>
        <Button href="/about" type="primary" size="large" className="bg-teal-400 hover:bg-teal-500">
          Learn More
        </Button>
      </div>
    </div>
  );
}
