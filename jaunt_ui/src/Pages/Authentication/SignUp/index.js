import React, { useState } from 'react';
import { Typography, Form, Input, Col, Row, Button, Layout, Divider } from 'antd';
import {LogoImage} from "../../../ImageConst"



const { Title } = Typography;
const { Header } = Layout;

const SignUpComponent = (props) => 
  {
    
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
                <Title level={3} className="primary-title">Create an account</Title>
                <Form className='custom-form-wrapper custom-form-wrapper-full mt-2'>
                <Form.Item
                    gutter={24}
                    wrapperCol={{ xs: 24 }}
                    labelCol={{ xs: 24 }}
                    label="First Name"
                    rules={[{ required: true, message: 'Please enter first name' }]}
                    name="firstName"
                    >
                    <Input />
                    </Form.Item>

                    <Form.Item
                    gutter={24}
                    wrapperCol={{ xs: 24 }}
                    labelCol={{ xs: 24 }}
                    label="Email address"
                    rules={[{ required: true, message: 'Please enter email address' }]}
                    name="firstName"
                    >
                    <Input />
                    </Form.Item>
                        <Form.Item
                    gutter={24}
                    wrapperCol={{ xs: 24 }}
                    labelCol={{ xs: 24 }}
                    label="Password"
                    rules={[{ required: true, message: 'Please enter Password' }]}
                    name="password"
                    >
                    <Input.Password />
                    </Form.Item>
                    <Form.Item>
                    </Form.Item>
                    <Row gutter={24} align="middle">
                        <Col xs={24}>
                            <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue'>
                            Register
                            </Button>
                        </Col>
                    </Row>

                    
                </Form>
                <Divider />
                <Title level={3} className="primary-title mt-4">Already have an account?</Title>
                    <p className='label-text'>Login to your Jaunt account to get super fast short term insurance quotes</p>
                    <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue' onClick={props.continueDetails}>Login</Button>
            </div>
        </div>
    </>
    );
  }

export default SignUpComponent;