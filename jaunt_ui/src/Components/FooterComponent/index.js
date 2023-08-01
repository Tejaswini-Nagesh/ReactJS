import React from 'react';
import { Layout, Row, Col, List  } from 'antd';
import {emailImage, facebookImage} from "../../ImageConst"


const { Footer } = Layout;

const data = ["Acceptance Criteria", "Motor IPID", "Motor Policy Wording", "Legal Expenses IPID"];
const data2 = ["FAQs", "Dayinsure Terms Of Business", "Privacy Policy", "Cookie Policy"];


const FooterComponent = () => (
  <>
    <Footer className='custom-footer'>
      <div className='container'>
        <Row justify='space-between'>
          <Col md={8} sm={12} xs={24}>
            <List
                header={<div><h4>Key documents</h4></div>}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <a href='http://localhost:3000/'>{item}</a>
                    </List.Item>
                )}
                />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <List
                header={<div><h4>Help and Support</h4></div>}
                dataSource={data2}
                renderItem={item => (
                    <List.Item>
                        <a href='http://localhost:3000/'>{item}</a>
                    </List.Item>
                )}
                />
          </Col>
          <Col md={8} sm={12} xs={24}>
            <List
                header={<div><h4>Get in touch</h4></div>}  
            >
                <List.Item>
                    <a href='http://localhost:3000/'><img src={emailImage} alt="email"/> support@jauntinsurance.co.uk</a>
                </List.Item>
                <List.Item>
                    <a href='http://localhost:3000/'><img src={facebookImage} alt="email"/></a>
                </List.Item>
            </List>
          </Col>
        </Row>
        <p className='footer-text'>Jaunt is a trading name of BISL Limited. Registered Office: Pegasus House, Bakewell Road, Orton Southgate, Peterborough, PE2 6YS. Registered in England No. 3231094. Jaunt car insurance is arranged and administered by Dayinsure.com Ltd. Registered Office Mara House, Tarporley Business Centre, Nantwich Road, Tarporley, Cheshire CW6 9UY. Registered in England No 4996289. Both companies are authorised and regulated by the Financial Conduct Authority</p>
      </div>
      
    </Footer>
  </>
);

export default FooterComponent;