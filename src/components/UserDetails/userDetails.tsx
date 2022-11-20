import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { CustomButton } from '../CustomButton';
import './userDetails.css';
const { TextArea } = Input;

export const UserDetails: FC = () => {
  const onFinish = (values: any): void => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="user_details_section">
      <h3>
        <b>Enter Details</b>
      </h3>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item
          label="Name"
          name="username"
          rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[{ required: true, message: 'Please input your email' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <CustomButton shape="round" outline="button_outline">
            Add Guest
          </CustomButton>
        </Form.Item>
        <Form.Item label="Please share anything that will help prepare for our meeting.">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <CustomButton type="primary" shape="round" outline="" htmlType="submit">
            Schedule Event
          </CustomButton>
        </Form.Item>
      </Form>
    </div>
  );
};
