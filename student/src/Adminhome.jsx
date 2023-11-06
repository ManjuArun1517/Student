import React from 'react'
import './App.css'
import logo from './images/logo2.png'
import stud from './images/stud.png'
import teach from './images/teacher.png'
import parent from './images/parent.jfif'
import money from './images/money.png'
// import {Swiper,SwiperSlide} from 'swiper/react';
// import { FreeMode } from "swiper";
// import 'swiper/css';
// import "swiper/css/free-mode";

// import 'bootstrap/dist/css/bootstrap.min.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow } from 'mdb-react-ui-kit' 
import { Calendar, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import { Button, Carousel, Col, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap'
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

// const mySwiper = new Swiper('.swiper-container', {
//   freeMode: true, 
// });
const Adminhome = () => {

  const nav=useNavigate()

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const gotostudent=()=>{
    nav('/adminstud')
  }

  const gototeacher=()=>{
    nav('/adminteach')
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };


  const components=["student","Teachers","patents","Class","Subjects","Attendance","Exam","Account","Transport","Hostel","Notices","Settings"];
  return (
    <div className=''>
      <div className='homemain'>
      <Navbar bg='light' expand="lg" className='homenavmain' style={{justifyContent:'space-between'}}>
            <Navbar.Brand href="#home" className='ms-3'>PM SREESANKARA VIDYALAYA,ERANAKULAM</Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav" className='homenav' >
                <Nav className="mr-auto">
                </Nav>
                <Form >
                    <Row>
                        <Col xs={8}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Col>
                        <Col xs={4}>
                            <Button variant="outline-success">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <img ></img>
            </Navbar.Collapse>

      </Navbar>
      </div>

      <div className='main2div1'>
        <div className=' justify-content-center'>
        
          <Slider {...settings}>
            <MDBCard className='main2card h-[150px] rounded-xl' onClick={()=>nav('/adminstud')}>
                    {/* <MDBCardImage src={stud}  className=''> */}
                    {/* </MDBCardImage> */}
                    <MDBCardText>
                      <h3>Students</h3>
                    </MDBCardText>     
            </MDBCard>
    
            <MDBCard className='main2card' onClick={()=>nav('/adminteach')}>
                  <MDBCardText>
                    <h3>Teachers</h3>
                  </MDBCardText>
            </MDBCard>
   
              <MDBCard className='main2card' onClick={()=>nav('/adminpara')}>
                      <MDBCardText>
                        <h3>Parents</h3>
                      </MDBCardText>
              </MDBCard>
              
              <MDBCard className='main2card' onClick={()=>nav('/adminclass')}>
                  <MDBCardText>
                    <h3>classes</h3>
                  </MDBCardText>
              </MDBCard>
            
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Subjects</h3>
                  </MDBCardText>
              </MDBCard>
              
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Attendance</h3>
                  </MDBCardText>
              </MDBCard>

              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Examination</h3>
                  </MDBCardText>
              </MDBCard>
            
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Accounts</h3>
                  </MDBCardText>
              </MDBCard>
            
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Transport</h3>
                  </MDBCardText>
              </MDBCard>
              
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Hostel</h3>
                  </MDBCardText>
              </MDBCard>
              
              <MDBCard className='main2card'>
                  <MDBCardText>
                    <h3>Settings</h3>
                  </MDBCardText>
              </MDBCard>
          </Slider>
  
    </div>
      </div>

      <div>
      <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    </div>
      </div>
    </div>
  )
}

export default Adminhome
