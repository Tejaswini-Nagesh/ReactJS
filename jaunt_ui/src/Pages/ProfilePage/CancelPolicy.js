import React, { useState } from 'react';
import { Typography, Col, Row, Button } from 'antd';

import "./style.scss"

const { Title } = Typography;

const CancelPolicy = (props) => 
  {
    return(
        <>
        <p className='normal-text mb-0'><small>Step {props.cancelPolicyStepOne ? "1" : props.cancelPolicyStepTwo ? "2" : props.cancelPolicyStepThree ? "3" : ""} of 3</small></p>
        {props.cancelPolicyStepOne ? (
          <Row gutter={48} align="middle">
                <Col md={12} xs={24} className="text-center">
                    <Title className='title-primary mb-0'>Your policy hasn’t started yet!</Title>
                    <p className='normal-text'>We’re able to give you a full refund:</p>
                    <small className='link-text'>Refund Policy</small>
                </Col>
                <Col md={12} xs={24} className="text-center">
                    <p className='normal-text'>Your total refund :</p>
                    <h3 className='price-text'>£ 13.02</h3>
                    <Button type="primary" block className='button-primary button-primary-continue text-center mb-1' onClick={props.cancelPolicy}>Cancel Policy</Button>
                    <p className='normal-text'>*refund price includes an admin fee and IPT</p>
                </Col>
            </Row>
        ) : props.cancelPolicyStepTwo ? (
          <>
          <Row gutter={48} align="middle">
                <Col md={12} xs={24}>
                    <Title className='title-primary mt-1'>I understand that by clicking ‘I agree’ all cover will cease immediately and that the Motor Insurance Database will be amended accordingly.</Title>
                    <small className='link-text' onClick={props.backToCancel}>Back</small>
                </Col>
                <Col md={12} xs={24}>
                    <Button type="primary" block className='button-primary button-primary-continue text-center' onClick={props.agreeCancelPolicy}>I agree</Button>
                </Col>
            </Row>
          </>
        ) : props.cancelPolicyStepThree ? (
          <>
            <Row gutter={48} align="middle">
                <Col xs={24} className="text-center mb-1">
                    <Title className='title-primary mt-1 mb-0'>Your money is on the way back to you!</Title>
                    <p className='normal-text mb-0'><b>Your Policy is now cancelled</b></p>
                    <small className='link-text'>For our refunds process click here</small>
                </Col>
            </Row>
          </>
        ) : null
      }
             
        </>
    );
  }

export default CancelPolicy;