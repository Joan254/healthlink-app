"use client";
import React from 'react';
import { Input, Form, Card, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '/public/icons/logo-black-transparent.png';

export default function LoginPage() {
  const [form] = Form.useForm();
  

  return (
    <div className="flex flex-col lg:flex-row min-h-screen max-h-screen bg-slate-50">
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
          {/* <h1 className="text-2xl font-bold mt-8 text-center">HealthLink</h1> */}
        </div>

        <Card className="w-full max-w-xl mt-6 p-4 shadow-lg rounded-3xl flex-shrink-0">
          <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
          <Form
            form={form}
            name="login"
            layout="vertical"
          >
            <Form.Item
              label="Enter Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your Email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email"
                size="large"
                className="bg-gray-200"
                autoComplete="email"
                aria-label="Email Address"
              />
            </Form.Item>
            <Form.Item
              label="Enter Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
                className="bg-gray-200"
                autoComplete="current-password"
                aria-label="Password"
              />
            </Form.Item>
            <div className="mb-2 flex justify-end">
              <Button type="primary" htmlType="submit" size="large" className="bg-blue-600 border-none">
                LOGIN
              </Button>
            </div>
          </Form>
          <div className="flex justify-center mt-8">
            <span className="text-sm">
              Don&apos;t have an account?&nbsp;
              <Link href="/register" className="text-sm text-blue-600">
                <u>Sign up</u>
              </Link>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}
