import React from 'react';
import { Typography, Row, Col, Radio, Form, Button } from 'antd';

const { Title } = Typography;


const AboutPage = (props) => {

    return(
  <>
   <div className='box-wrapper'>
   <div className='container'>
        <Title level={3}>To the eligible for cover you must meet the acceptance criteria below:</Title>

        <Title className='title-primary' level={4}>About you</Title>
        <p className='normal-text'>Have a current permanent address in the UK as stated throughout this application ( please note you may be asked to provide proof of residence in the event of a claim )</p>
        <p className='normal-text'>Have no more than one fault claim in the last 12 months</p>
        <p className='normal-text'> Do not have any unspent criminal convictions other than motor offences</p>
        <p className='normal-text'> Have never been refused insurance or had a policy cancelled </p>
        <p className='normal-text'>Have never been refused insurance or had a policy cancelled Have permission from the owner to drive the vehicle and I have agreed to ensure it as I have responsibility for the loss or damage</p>
        <Title className='title-primary' level={4}>About the Vehicle  </Title>
        <p className='normal-text'>Is registered in Great Britain north island or the isle of man</p>
        <p className='normal-text'> Has a current market value of less than £75,000</p>

        <p className='normal-text'>Has no more than eight seats including the driver seat</p>
        <p className='normal-text'>Is not over 3.5 tonnes gross vehicle weight GVW</p>
        <p className='normal-text'>Is not a higher or rental vehicle or leased under an agreement of 12 months or less duration</p>
        <p className='normal-text'>Is not a seized vehicle or in police compound</p>
        <p className='normal-text'>Has no engine modification body kits or alive wheels unless fitted at the manufacture or wear manufacturer optional extras unless specifically carried out for a disabled driver or passenger</p>
        <p className='normal-text'>Is not imported from another country through channels other than the makers official distribution system </p>
        <p className='normal-text'>Is not a type of heavy goods vehicle HGV</p>
        <p className='normal-text'>Has a engine size of 3999 mL or less</p>
        <p className='normal-text'></p>
        <p className='normal-text'></p>
        <Title className='title-primary' level={4}>About the use  </Title>
        <p className='normal-text'>Journey must start and end in UK exporting is not permitted</p>
        <p className='normal-text'>Must not be used for carriage of passengers or goods for payment the carriage of goods or property which does not belong to you as a courier or for the delivery of Takeaway or fast food</p>
        <p className='normal-text'>Carrying of hazardous goods or use of hazardous locations or not permitted</p>
        <p className='normal-text'>Do you meet all the conditions above</p>
        <Form className='custom-form-wrapper'>
        <Form.Item
            gutter={48}
            wrapperCol={{xs: 24 }}
            >
            <Radio.Group className='custom-row-radio' buttonStyle="solid">
                <Radio.Button value="yes" block>Yes</Radio.Button>
                <Radio.Button value="no">No</Radio.Button>
            </Radio.Group>
            </Form.Item>
            <Row gutter={48} align="middle" className="mt-4 mb-2">
                <Col  md={12} xs={24}>
                    <Button type="link" className='button-link-primary' onClick={props.continueDetails}>
                    Previous Page
                    </Button>
                </Col>
                <Col md={12} xs={24}>
                    <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue' onClick={props.continuePayment}>
                    Continue
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
   </div>
  </>
)};

export default AboutPage;