import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { Typography, Form, Input, Col, Row, Button, Checkbox, Divider, Layout } from 'antd';
import {LogoImage} from "../../../ImageConst"
import { useAuth } from '../../../Auth/Auth';


const { Title } = Typography;
const { Header } = Layout;
const baseURL = "https://6nbolpl8pk.execute-api.us-west-2.amazonaws.com/SocotraIntigration_Demo1/socotra-auth/gettoken";

const LoginComponent = (props) => 
  {
    const [userName, setUserName] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const navigate = useNavigate();
    const auth = useAuth();
    const goToSignUpPage = () => {
      navigate("/SignUp");
    }

    const LoginSubmit = () => {
      auth.login({userName, passwordValue});
      navigate("/profile", {replace: true});
      
    }

    // console.log([form], "form");
    
    return(
      <>
      <Header className='custom-header'>
        <div className='container'>
          <Row justify='center' align='middle'>
            <Col><img src={LogoImage} alt="logo" className='logo-image'/></Col>
          </Row>
        </div>
      </Header>
        <div className='box-wrapper'>
          <div className='container-box'>
                <Title level={3} className="primary-title">Sign into your account</Title>
                <Form onFinish={LoginSubmit} className='custom-form-wrapper custom-form-wrapper-full mt-2'>
                <Form.Item
                    gutter={24}
                    wrapperCol={{ xs: 24 }}
                    labelCol={{ xs: 24 }}
                    label="Email address"
                    rules={[{ required: true, message: 'Please enter Email' }]}
                    name="email"
                    >
                    <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </Form.Item>
                    
                    <Title level={5} className="forgot-text">Forgot Password?</Title>
                        <Form.Item
                    gutter={24}
                    wrapperCol={{ xs: 24 }}
                    labelCol={{ xs: 24 }}
                    label="Password"
                    rules={[{ required: true, message: 'Please enter Password' }]}
                    name="password"
                    >
                    <Input.Password value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                    <Checkbox className='checkbox-normal'>Stay signed in</Checkbox>
                    </Form.Item>
                    <Row gutter={24} align="middle">
                        <Col xs={24}>
                            <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue'>
                            Sign In
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Divider className='mt-3' />
                  <Title level={3} className="primary-title mt-3">Register for a Jaunt account</Title>
                    <p className='label-text'>In order to receive super fast short term insurance quotes, please register for a Jaunt account</p>
                    <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue' onClick={goToSignUpPage}>Create Account</Button>
            </div>
          </div>
        </>
    );
  }

export default LoginComponent;