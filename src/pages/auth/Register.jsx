import style from "./auth.module.scss";
import registerImg from "../../assets/images/Register.jpg";
import { motion } from "framer-motion";
import {Checkbox, Form, Input } from 'antd';
import ButtonStyle from '../../components/button';
import HeadLine from "../../components/headLine";
import { useState } from "react";
import { auth  , googleProvider} from "../../firebase/fireStore";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Success from "../../components/success signup";
import { setLogin } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [isLoading , setIsLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // form functions
  const onFinish = async (values) => {
    const { email , password} = values;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
        );
        if (user) {
          dispatch(setLogin());
          setIsLoading(false);
        setTimeout(() => { // wait for success lottie to show 
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error('email is already existed', {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };
    // animate component
  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { delay: 0.5 },
    duration: 5,
  }
// google sign up 
const handleGoogleSignup = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    dispatch(setLogin());
          setIsLoading(false);
        setTimeout(() => { // wait for success lottie to show 
          navigate("/");
        }, 2000);
  });
};
  return (
    <>
    <motion.div {...animations}>
      {
        isLoading ? 
      <>
      <HeadLine title='Registeration'/>
    <div className=" row container align-items-center">
      <div className={`${style.img_wrapper} col d-lg-block d-none`}>
              <img src={registerImg} alt="registerImg" className="w-100" />
      </div>
    <div className={`${style.form_container} form col position-relative`}>
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />

      </Form.Item>

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
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              hasFeedback
              rules={[{ required: true }, { min: 8 }]}
              
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
               label="Confirm-Password"
              name="confirmPassword"
              hasFeedback
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      " passwords does not match."
                    );
                  },
                }),
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
        <ButtonStyle btntitle="submit" htmlType="submit"/>
      </Form.Item>
    </Form>
    <div className={`${style.btn_position} position-absolute`}>
              <FcGoogle onClick={()=> handleGoogleSignup()} className="pointer" style = {{fontSize:"50px"}} />
          </div>
    </div>
    
    </div>
        </> :
        <Success/>
      }

      <ToastContainer autoClose={1000} />
    </motion.div>
    </>
  )
}

export default Register