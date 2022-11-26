import React from "react";
import style from "./auth.module.scss";
import Lottie from "react-lottie";
import LoginLotie from "../../assets/lottieFiles/107800-login-leady.json";
import { Checkbox, Form, Input } from "antd";
import ButtonStyle from "../../components/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeadLine from "../../components/headLine";
import { auth } from "../../firebase/fireStore";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // animate component
  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { delay: 0.5 },
    duration: 5,
  };

  // lottie files properties
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginLotie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // form functions
  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          dispatch(login())
          navigate("/");
        })
        .catch((error) => {
          toast.error('invaild email or pasword', {
      position: toast.POSITION.TOP_RIGHT
  });
        });
    } catch (error) {
      console.log(error.message);
     toast.error('invaild email or pasword', {
      position: toast.POSITION.TOP_RIGHT
  });
    }
  };

  return (
    <motion.div {...animations}>
            <HeadLine title='Login'/>

      <div className="row container align-items-center justify-content-center">
        <div className="col d-lg-block d-none">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="form col position-relative">
          <Form
           className={`${style.form}`}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
           <Form.Item
        label="Email"
        name="email"
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
        <Input/>
      </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <ButtonStyle btntitle="submit" htmlType="submit" />
            </Form.Item>
          </Form>
        </div>
      </div>
      <ToastContainer
      autoClose={1000} />
    </motion.div>
  );
};

export default Login;
