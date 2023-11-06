import { MDBCheckbox } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Addstudent = () => {

    const nav=useNavigate()

   const submit=()=>{
    nav("/adminstud")
   }

  return (
    <div className='m-3 p-5  border-2 border-blue-900'>
        <h1 className='text-center text-2xl'><u>ADMISSION FORM</u></h1>
        <Form onSubmit={submit} >
            <div className='m-5'>
            <h3 className=''><u>STUDENT DETAILS</u></h3>
            <Row className='m-3'>
                <Col >
                    <Form.Label>Roll Number:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col >
                    <Form.Label>Admission Number:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col >
                    <Form.Label>First name:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
            </Row>
           

            <Row className='m-3'>
            <Col>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control placeholder="dd/mm/yyyy"/>
                </Col>
            <Col>
                    <Form.Label>Gender:</Form.Label>
                    {/* <Form.Control placeholder="Last name" /> */}

                    <Form>
                            <Form.Check
                                inline
                                label="Male"
                                name="group1"
                                // type={type}
                                // id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="Female   "
                                name="group1"
                                // type={type}
                                // id={`inline-${type}-2`}
                            />
                    </Form>
                </Col>
                <Col >
                    <Form.Label>Class:</Form.Label>
                    {/* <Form.Control placeholder="Roll Number" /> */}
                        <Form.Select aria-label="Default select example">
                            <option> select class</option>
                            <option value="1">6</option>
                            <option value="2">7</option>
                            <option value="3">8</option>
                            <option value="3">9</option>
                            <option value="3">10</option>
                            <option value="3">11</option>
                        </Form.Select>
                </Col>
                <Col >
                    <Form.Label> Section:</Form.Label>
                        <Form.Select aria-label="Default select example">
                                <option> select section</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                                <option value="3">C</option>
                                <option value="3">D</option>
                                <option value="3">E</option>
                                <option value="3">F</option>
                        </Form.Select>
                </Col>
                
            </Row>
           
            <Row className='m-3'>
                <Col>
                    <Form.Label>E-mail id:</Form.Label>
                    <Form.Control placeholder=" " />
                </Col>
                <Col>
                    <Form.Label>Religion:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Upload Image:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    {/* <Form.Label>Upload Image:</Form.Label>
                    <Form.Control placeholder="" /> */}
                </Col>
            </Row> </div>



            {/* ////////////////////////////////////////////////////////////////////////// */}
            <div className='m-5'>
            <h3 className=''><u>PARENT DETAILS</u></h3>
            <Row className='m-3'>
                <Col >
                    <Form.Label>Father's Name:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col >
                    <Form.Label> Mother's name:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col >
                    <Form.Label>Father's Occupation:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label> Mother's Occupation:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
            </Row>

            <Row className='m-3'>
            <Col>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder=""/>
                </Col>    
                <Col>
                    <Form.Label>E-mail id:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Nationality:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Upload Image:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                
            </Row>
            <Row className='m-3'>
                
                <Col>
                    <Form.Label>Religion:</Form.Label>
                    <Form.Control placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Present Address:</Form.Label>
                    <Form.Control as="textarea" placeholder="" />
                </Col>
                <Col>
                    <Form.Label>Perment Address:</Form.Label>
                    <Form.Control as="textarea" placeholder="" />
                </Col>
                <Col>
                    {/* <Form.Label>Perment Address:</Form.Label>
                    <Form.Control as="textarea" placeholder="religion" /> */}
                </Col>
               
            </Row>
            </div>
            
            <div className='text-center ' >
                <Button className='text-center pe-5 ps-5 pt-3 pb-3 bg-blue-900'>SUBMIT</Button>
            </div>
        </Form>
    </div>
  )
}

export default Addstudent
