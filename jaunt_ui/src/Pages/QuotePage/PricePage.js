import React from 'react';
import { Typography, Row, Col, Checkbox, Form, Select, List, Button } from 'antd';
import {icon1Image, icon2Image, icon3Image, plusIconImage} from "../../ImageConst"

const { Title } = Typography;

const addinationList = [
    {img:icon1Image,title: "Additional insurance option", subTitle: "Excess Protection", description:"N.B Excess is only recoverable after a valid claim and if excess value is exceeded", price:"€18.76"},
    {img:icon2Image,title: "Additional insurance option", subTitle: "Excess Protection", description:"N.B Excess is only recoverable after a valid claim and if excess value is exceeded", price:"€18.76"},
    {img:icon3Image,title: "Additional insurance option", subTitle: "Excess Protection", description:"N.B Excess is only recoverable after a valid claim and if excess value is exceeded", price:"€18.76"}
]

const checkList = [
    {title: "Policy Start", list:[{title: "", text:"Friday 25th February at 8.15hrs"}]},
    {title: "Policy Ends", list:[{title: "", text:"Friday 25th March at 8.15hrs"}]},
    {title: "Length of cover", list:[{title: "", text:"30day"}]},
    {title: "Vehicle and driver details", list:[{title: "Vehicle", text:"Honda(GKT654)"}, {title: "Main Driver", text:"Gladwin Thomas"}, {title: "Age at policy start", text:"45"}]},
    {title: "Vehicle and driver details", list:[{title: "Vehicle", text:"Honda(GKT654)"}, {title: "Main Driver", text:"Gladwin Thomas"}, {title: "Age at policy start", text:"45"}]},
    {title: "Vehicle and driver details", list:[{title: "Vehicle", text:"Honda(GKT654)"}, {title: "Main Driver", text:"Gladwin Thomas"}, {title: "Age at policy start", text:"45"}]}
];


const PricePage = (props) => {

    return(
  <>
   <div className='box-wrapper'>
   <div className='container'>
        <Title level={3}>Please find your price below</Title>
        <Form className='custom-form-wrapper'>
        <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
                label={<p>How long do you need to insurance for? <span className='label-text'>Cover is availabel for 1 Hour - 30days</span></p>}
                rules={[{ required: true, message: 'Registration is required' }]}
            >
                <Select placeholder="Select Day" className='custom-select'>
                    {props.insuranceHoursList}
                    {props.insuranceDayList}
                </Select>
        </Form.Item>
        <div className='price-wrapper'>
            <h5>€<span>158.76</span></h5>
            <p>Compulsory excess €450</p>
        </div>
        <Title level={3} className="mb-0 mt-2">Would you like any additional Insurance options?</Title>
        <div>
            <Checkbox.Group
                style={{
                width: '100%',
                }}
                //onChange={onChange}
            >
                <Row gutter={24}>
                    {addinationList.map((item, index) => {
                        return(
                        <Col md={12} key={index} className="col-add-check">
                            <h4>{item.title}</h4>
                            <Checkbox value={`addinational${index}`} className='additional-checkbox'>
                                <Row justify='space-between' align='middle' wrap={false } gutter={12}>
                                    <Col>
                                        <img src={item.img} alt="icon" className='icon-image'/>
                                    </Col>
                                    <Col className='text-area'>
                                        <h5>{item.subTitle}</h5>
                                        <p>{item.description}</p>
                                    </Col>
                                    <Col className='price-area'>
                                    <img src={plusIconImage} alt="plus"/>
                                    <p>add for {item.price}</p>
                                    </Col>
                                </Row>
                            </Checkbox>
                            <h5>What is this?</h5>
                        </Col>
                        )
                    })}
                </Row>
            </Checkbox.Group>
        </div>
            <Form.Item gutter={48} wrapperCol={{ offset: 12, span: 12 }}>
            {/* <Button type="primary" htmlType="submit" block className='button-primary' onClick={props.continueDetails}>
                Continue
            </Button> */}
            </Form.Item>
            <Title level={3} className="mb-0 mt-2">Lets check everything</Title>
            <p className='label-text'>The information bellow details your demends and needs. This sale is non-advised and therefore ou are responsible for ensuring the policy meets your demands and needs</p>
            <Row>
                {checkList.map((item, key) => {
                    return(
                    <Col md={8} sm={12} xs={24} key={key} className="CheckListWrap">
                        <Title level={4}>{item.title}</Title>
                        <List>
                            {item.list.map((item2, key) => {
                                return(
                                <List.Item>
                                    <h5>{item2.title}</h5>
                                    <p>{item2.text}</p>
                                </List.Item>
                                )
                            })}
                            
                        </List>
                    </Col>
                    )
                })}
                
            </Row>
            <Typography className='mt-2 text-normal'>Something not right? <span>Click here to change the details</span></Typography>
            <Typography className='mt-2 text-normal'>I confirm that I've selected the following add-on product(s) which meets my demands and needs,and I have read the:</Typography>
            <Checkbox.Group className='custom-checkbox custom-checkbox-terms' options={props.tearmsOptions} defaultValue={['Apple']} onChange={props.contactInfoOnChange} />

            <Row gutter={48} align="middle" className="mt-4 mb-2">
                <Col  md={12} xs={24}>
                    <Button type="link" className='button-link-primary' onClick={props.continueDetails}>
                    Previous Page
                    </Button>
                </Col>
                <Col md={12} xs={24}>
                    <Button type="primary" htmlType="submit" block className='button-primary button-primary-continue' onClick={props.continueAboutDetails}>
                    Continue
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>
   </div>
  </>
)};

export default PricePage;