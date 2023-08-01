import React from 'react';
import { Layout, Row, Col, Button, Dropdown, Space, Menu } from 'antd';
import { useNavigate  } from "react-router-dom";
import {LogoImage} from "../../ImageConst"
import { useAuth } from '../../Auth/Auth';

const { Header } = Layout;



const HeaderComponent = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const goToLogInPage = () => {
    console.log("hi");
    navigate("/LogIn");
  };
  const LogoutHandle= () => {
    console.log(auth, "auth");
    auth.logout();
    navigate("/LogIn");
  }

  const menu = (
    <Menu>
      <Menu.Item>Your Account</Menu.Item>
      <Menu.Item>Your Details</Menu.Item>
      <Menu.Item>Change Password</Menu.Item>
      <Menu.Item onClick={LogoutHandle}>Sign Out</Menu.Item>
    </Menu>
  );

  return(
  <>
    <Header className='custom-header'>
      <div className='container'>
        <Row justify='space-between' align='middle'>
          <Col><img src={LogoImage} alt="logo" className='logo-image'/></Col>
          
          {auth.user ? (
            <Col>
          <Dropdown
            overlay={menu}
            overlayClassName="custom-overlay-dropdown"
            placement="bottomRight"
            trigger={['click']}
            className="custom-dropdown"
          >
              <Space>
                {auth.user.userName}
              </Space>
          </Dropdown>
          </Col>
          ): (
            <Col><Button className='button-outline' onClick={goToLogInPage}>Sign In</Button></Col>
          )}
          
        </Row>
      </div>
      
    </Header>
  </>
)};

export default HeaderComponent;