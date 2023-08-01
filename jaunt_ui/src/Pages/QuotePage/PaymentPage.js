import React from 'react';
import { Typography, Row, Col, Input, Form, Button } from 'antd';

const { Title } = Typography;


const PaymentPage = (props) => {

    return(
  <>
   <div className='box-wrapper'>
   <div className='container'>
        <Title level={3}>One Last thing, let's take payment</Title>
        <Form className='custom-form-wrapper custom-form-wrapper-full mt-2'>
        <Form.Item
            gutter={24}
            wrapperCol={{ xs: 24 }}
            labelCol={{ xs: 24 }}
            label="Card Number"
            rules={[{ required: true, message: 'Please enter Card Number' }]}
            name="cardNumber"
            >
            <Input />
            </Form.Item>
            <Row gutter={48} align="middle">
                <Col  md={12} xs={24}>
                <Form.Item
            gutter={24}
            wrapperCol={{ xs: 24 }}
            labelCol={{ xs: 24 }}
            label="Expiry Date"
            rules={[{ required: true, message: 'Please enter Expiry Date' }]}
            name="expiryDate"
            >
            <Input />
            </Form.Item>
                </Col>
                <Col md={12} xs={24}>
                <Form.Item
            gutter={24}
            wrapperCol={{ xs: 24 }}
            labelCol={{ xs: 24 }}
            label="CVC"
            rules={[{ required: true, message: 'Please enter CVC' }]}
            name="cvcNumber"
            >
            <Input />
            </Form.Item>
                </Col>
            </Row>
            <Form.Item
            gutter={24}
            wrapperCol={{ xs: 24 }}
            labelCol={{ xs: 24 }}
            label="Name on the card"
            rules={[{ required: true, message: 'Please enter Name on the card' }]}
            name="nameCard"
            >
            <Input />
            </Form.Item>
            <Row gutter={24} align="middle" className="mt-4 mb-2">
                <Col  md={12} xs={24}>
                    <Button type="link" className='button-link-primary' onClick={props.continueDetails}>
                    Previous Page
                    </Button>
                </Col>
                <Col md={12} xs={24}>
                    <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue' onClick={props.continueDetails}>
                    Pay Now
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
   </div>
  </>
)};

export default PaymentPage;