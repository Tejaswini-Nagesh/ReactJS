import React from 'react';
import { Typography, Input, Button, Form, Radio, TimePicker, DatePicker, Select, Checkbox } from 'antd';
import moment from 'moment';

const { Title } = Typography;
const format = 'HH:mm';



const BasicInfo = (props) => {

    const disabledDate = (current) => {

        //console.log(current, "current");
        //const maxDate = moment().add(31, 'days').calendar();

        //console.log(maxDate, "maxDate");
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      };

      const vehicle_regex = /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/;
    
    
    return(

  <>
   <div className='box-wrapper'>
        <div className='container'>
        <Title level={3}>Ok, let's get you a quote</Title>
        <Form 
        onFinish={props.continueDetails} 
        className='custom-form-wrapper'>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="What is the vehicle registration number?"
            rules={[{ required: true, message: 'Registration is required' }]}
            name="vehicleNumber"
            >
            <Input value={props.vehicleNumber} onChange = {(e) => props.setVehicleNumber(e.target.value ) } />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{ offset: 12, md: 12, xs:24 }}
            // name="vehicleFind"
            // rules={[{ required: true, message: 'You must find a vehicle before you can proceed' }]}
            >
            <Button className='btn-primary-outline' block>Find Vehicle</Button>
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="When do you want the cover to start?"
            >
            <Radio.Group buttonStyle="solid" value={props.coverStartValue} onChange={props.onChangeStartValue}>
                <Radio.Button value="today">Today</Radio.Button>
                <Radio.Button value="tomorrow">Tomorrow</Radio.Button>
                <Radio.Button value="other">Other Date</Radio.Button>
            </Radio.Group>
            </Form.Item>
            {props.coverStartValue === "other" && (
            <Form.Item gutter={48} wrapperCol={{ offset: 12, md: 12, xs:24 }}>
                <p className='label-text'>Please select a start date</p>
                <DatePicker 
                value={props.dateStartValue} 
                disabledDate={disabledDate}
                onChange={props.dateStartValueOnChange} className='custom-timepicker' />
            </Form.Item>
            )}
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label={<p>And what Time? <span className='label-text'>All times are local UK time.</span></p>}
            name=""
            >
            <TimePicker value={props.timeValue} className='custom-timepicker' defaultValue={moment('8:15', format)} format={format} onChange={props.timeValueOnChange} />
            </Form.Item> 
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
                label={<p>How long do you need to insurance for? <span className='label-text'>Cover is availabel for 1 Hour - 30days</span></p>}
                rules={[{ required: true, message: 'Registration is required' }]}
            >
            <Radio.Group buttonStyle="solid" value={props.insuranceDay} onChange={props.insuranceDayOnChange}>
                <Radio.Button value="oneDay" block>1 Day</Radio.Button>
                <Radio.Button value="sevenDay">7 days</Radio.Button>
                <Radio.Button value="twentyEightDay">28 days</Radio.Button>
                <Radio.Button value="othersDay">Others</Radio.Button>
            </Radio.Group>
            </Form.Item>

            {props.insuranceDay === "othersDay" && (
            <Form.Item gutter={48} wrapperCol={{ offset: 12, md: 12, xs:24 }}>
                <p className='label-text'>Please choose how many days you'd like</p>
                <Select onChange={props.endDateOnChange} value={props.endDateValue} placeholder="Select Day" className='custom-select'>
                {/* {props.insuranceHoursList} */}
                {props.insuranceDayList}
                </Select> 
            </Form.Item>
            )}
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label={<p>The cover will start on</p>}
            >
            <p className='label-text'>{props.coverStartValue === "today" && moment().format('MMMM Do YYYY')}  {props.coverStartValue === "tomorrow" && moment().add(1, 'days').format('MMMM Do YYYY')} 
            {props.coverStartValue === "other" && moment(props.dateStartValue).format("MMMM Do YYYY")} at {props.timeValue}</p>
            <p className='label-text'>{moment(props.finalStartDate).format("MMMM Do YYYY")}  at {props.timeValue}</p>
            </Form.Item> 
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label={<p>The cover will end on</p>}
            >
            {/* <p className='label-text'>
                {props.insuranceDay === "oneDay" && moment(props.finalStartDate).add(1, 'days').format('MMMM Do YYYY')}
                {props.insuranceDay === "sevenDay" && moment(props.finalStartDate).add(7, 'days').format('MMMM Do YYYY')}
                {props.insuranceDay === "twentyEightDay" && moment(props.finalStartDate).add(28, 'days').format('MMMM Do YYYY')}
                {props.insuranceDay === "othersDay" && props.endDateValue === "1hour" &&  moment().format('MMMM Do YYYY')}
                {props.insuranceDay === "othersDay" && moment(props.finalStartDate).add(props.endDateValue, 'days').format('MMMM Do YYYY')}  at {props.timeValue}
                
            </p> */}
            <p className='label-text'>{moment(props.finalEndDate).format('MMMM Do YYYY')}</p>
            </Form.Item>
            <Title level={4}>About you</Title>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="What's your first name?"
            rules={[{ required: true, message: 'Please let us know your first name.' }]}
            name="name"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="And your surname?"
            rules={[{ required: true, message: 'Please let us know your last name.' }]}
            name="surname"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="When were you born?"
            rules={[{ required: true, message: 'Please enter a valid date DD/MM/YYYY' }]}
            name="born"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="What's your email address?"
            rules={[{ required: true, message: 'Please let us know your email address.' }]}
            name="email"
            >
            <Input value={props.emailValue} onChange={(e) => props.setEmailValue(e.target.value) } />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="Telephone number"
            rules={[{
                type: 'email',
                message: 'The input is not valid E-mail!',
              },{ required: true, message: 'Please let us know your phone number.' }]}
            name="phone"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="What is your driving licence number?"
            rules={[{ required: true, message: 'Please let us know your driving licence number.' }]}
            name="licence"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="What do you do?"
            rules={[{ required: true, message: 'Please let us know what you do for a living.' }]}
            name="occupation"
            >
            <Input />
            </Form.Item>
            <Title level={4} className="mb-0">Your home address</Title>
            <Title level={5}>This address must be in the UK and be where you live. It must not be a commercial address.</Title>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="House name or number"
            //rules={[{ required: true, message: 'Registration is required' }]}
            name="houseName"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label="Postcode"
            rules={[{ required: true, message: 'Please let us know your postcode.' }]}
            name="postcode"
            >
            <Input />
            </Form.Item>
            <Form.Item
            gutter={48}
            wrapperCol={{ offset: 12, md: 12, xs:24 }}
            // name="btn"
            // rules={[{ required: true, message: 'You must find an address or enter one in manually before you can proceed.' }]}
            >
            <Button className='btn-primary-outline' block>Find Address</Button>
            </Form.Item>
            <Title level={4}>Keeping you informed</Title>
            <Form.Item
            gutter={48}
            wrapperCol={{md: 12, xs: 24 }}
            labelCol={{md:12, xs: 24 }}
            label={<><p>From time to time we may contact you to keep you informed about Jaunt products and services.</p><p>If you are happy to be contacted by any of the following methods, please select the appropriate box(es).</p></>}
            //rules={[{ required: true, message: 'Registration is required' }]}
            >
            <Checkbox.Group className='custom-checkbox' options={props.contactInfoOptions} defaultValue={['Apple']} onChange={props.contactInfoOnChange} />
            </Form.Item>
            <Typography className='quote-text'>By clicking 'continue', you are agreeing to the Jaunt <span>Terms Of Business</span>, <span>Privacy Policy</span> and confirming that you have read the <span>Legal Expenses Insurance Product Information Document</span> and also the <span>Motor IPID</span> relating to your policy. You also accept that once a policy has been purchased you are unable to amend any details and any cancellation is subject to the <span>Refund Policy</span>.</Typography>
            <Form.Item gutter={48} wrapperCol={{ offset: 12, span: 12 }}>
            <Button 
            // onClick={props.continueDetails}
            type="primary" htmlType="submit" block className='button-primary button-primary-continue' >
                Continue
            </Button>
            </Form.Item>
        </Form>
        
        </div>
    </div>
  </>
)};

export default BasicInfo;