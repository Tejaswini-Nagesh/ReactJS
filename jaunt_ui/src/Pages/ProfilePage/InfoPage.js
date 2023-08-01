import React, { useState } from 'react';
import { Select, Typography, Form, Input, Row, Col, Button, Collapse } from 'antd';
import CancelPolicy from './CancelPolicy';

const { Title } = Typography;
const { Panel } = Collapse;

const documentList =[
    {name: "Certificate and Schedule"},
    {name: "Acceptance Criteria"},
    {name: "Motor Policy Wording"},
    {name: "Insurance product information document"},
    {name: "Legal Expenses policy wording"},
    {name: "Legal expenses IPID"},
    {name: "Terms of Business"},
    {name: "Privacy Policy"}
]


const InfoPage = (props) => 
  {
    return(
      <div className='box-wrapper'>
        <div className='container'>
            <div className='policy-ref-box'>
                <h4>Your Policy Reference:</h4>
                <p>JDBGKJBDFG898708</p>
            </div>
            <Title className='title-primary mt-2'>Welcome back {props.auth.user.userName}! <br/> All of your policy documents are below. Thank you for choosing Jaunt.</Title>
            <p className='normal-text'>Want to Avoid filling in your details next time? Just enter your password to save your details.</p>
            <Form className='custom-form-wrapper custom-form-wrapper-full mt-2'>
                <Row gutter={24} align="bottom">
                    <Col md={12} xs={24}>
                        <Form.Item
                        gutter={24}
                        wrapperCol={{ xs: 24 }}
                        labelCol={{ xs: 24 }}
                        label="Choose a password"
                        rules={[{ required: true, message: 'Please choose a password' }]}
                        name="choosePassword"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} xs={24}>
                        <Form.Item
                        gutter={24}
                        wrapperCol={{ xs: 24 }}
                        labelCol={{ xs: 24 }}
                        >
                            <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue'>
                            Create Account
                    </Button>
                        </Form.Item>
                    </Col>
                </Row>
            
        </Form>
        <Title level={3} className='title-primary mt-2'>Documents:</Title>
        <Row gutter={24}>
            
        {documentList.map((item, index)=> {
            return(
                <Col md={12} xs={24}>
                    <div className='documents-wrap' key={index}>
                        <Row justify='space-between'>
                            <Col>
                                <h5>{item.name}</h5>
                                <p>PDF</p>
                            </Col>
                            <Col>
                            <Button className='download-button'>
                                <img alt="icon"/>
                                <p>Download</p>
                            </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            )
        })}
        </Row>
        <Title level={3} className='title-primary mt-2'>Can we help?</Title>
        <Typography className='mt-2 text-normal'><b>Email us at</b> <span>support@jauntinsurance.co.uk</span></Typography>
        <div className='mt-3'>
            <Collapse expandIconPosition ="end" className='custom-collapse'>
                <Panel header="Cancel Policy" key="1">
                <CancelPolicy
                cancelPolicy={props.cancelPolicy}
                cancelPolicyStepOne={props.cancelPolicyStepOne}
                cancelPolicyStepTwo={props.cancelPolicyStepTwo}
                cancelPolicyStepThree={props.cancelPolicyStepThree}
                agreeCancelPolicy={props.agreeCancelPolicy}
                backToCancel={props.backToCancel}
                />
                </Panel>
                <Panel header="Buy more Days" key="2">
                <p>test</p>
                </Panel>
                <Panel header="Start New Quote" key="3">
                <p>test</p>
                </Panel>
                <Panel header="Post your Documents" key="4">
                <p>test</p>
                </Panel>
            </Collapse>
        </div>
        </div>
            
        </div>
    );
  }

export default InfoPage;