"use client";
import React from 'react';
import { Form, Input, Card, Button, message, Row, Col, Select } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/icons/logo-black-transparent.png';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

const { Item } = Form;
// const { Option } = Select;

export default function RegisterPage() {
//   const router = useRouter();
  const [form] = Form.useForm();

  const register = async (userDetails) => {
    const formData = new FormData();
    for (const key in userDetails) {
      formData.append(key, userDetails[key]);
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/register/users`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201 || response.status === 200) {
        console.log(response.data);
        router.push('/login');
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Registration error");
    }
  };

  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error('Passwords do not match!');
      return;
    }

    try {
      await register({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        phone: values.phoneNumber,
        password: values.password,
      });
    } catch (error) {
      console.error('Registration error:', error);
      message.error('Registration failed');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Registration failed');
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
      <div className="flex flex-col justify-center items-center w-full p-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          {/* <h1 className="text-xl font-bold text-center mt-4">HealthLink</h1> */}
        </div>

        <Card className="w-full max-w-2xl mt-2 p-4 shadow-lg flex flex-col items-center">
          <h2 className="text-lg font-bold text-center mb-4">Sign Up</h2>
          <Form
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: '100%' }}
            layout="vertical"
              >
            <Row gutter={16}>
              <Col span={24} md={12}>
                <Item
                  name="firstName"
                  rules={[{ required: true, message: 'Please input your first name!' }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="First Name"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="given-name"
                  />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item
                  name="lastName"
                  rules={[{ required: true, message: 'Please input your last name!' }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Last Name"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="family-name"
                  />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24} md={12}>
                <Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="Email Address"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="email"
                  />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="Phone Number"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="tel"
                  />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24} md={12}>
                <Item
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 6, message: 'Password must be at least 6 characters!' },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="new-password"
                  />
                </Item>
              </Col>
              <Col span={24} md={12}>
                <Item
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match!'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Confirm Password"
                    size="large"
                    className="mb-2 bg-gray-300"
                    autoComplete="new-password"
                  />
                </Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="w-full bg-blue-600 border-none">
                REGISTER
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center mt-8">
            <span className="text-sm">
              Already have an account?&nbsp;
              <Link href="/login" className="text-sm text-blue-600">
                <u>Log in</u>
              </Link>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
