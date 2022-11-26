import React, { useState } from "react";
import style from "./Payment.module.css";
import ButtonStyle from "../../components/button";
import {
  Checkbox,
  Form,
  Input,
} from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const PaymentDetails = () => {

    const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <div className="d-flex flex-wrap" >
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      className={`${style.payForm} w-25 m-auto `}
    >
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Required',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the agreement
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
       <ButtonStyle btntitle="Order" />
      </Form.Item>
    </Form>
    <div>

    </div>
    </div>
    
  )
};

export default PaymentDetails;
