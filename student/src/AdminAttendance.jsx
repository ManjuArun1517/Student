import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AdminAttendance = () => {

    const nav=useNavigate()

    const submit=()=>{
        nav("/adminstud")
       }
    
  return (
    <div>
      <div className='m-3 p-5 w-[1100px]  border-2 border-blue-900 classadd'>
    <h1 className='text-center text-2xl'><u>ADD SUBJECT</u></h1>
      <Form onSubmit={submit} >
          <div className='m-5'>
          {/* <h3 className=''><u>STUDENT DETAILS</u></h3> */}
          <Row className='m-3'>
              <Col >
                  <Form.Label> Class:</Form.Label>
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
              <Col>
                  <Form.Label>Section:</Form.Label>
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
              <Col>
                  <Form.Label>Month:</Form.Label>
                  <Form.Select aria-label="Default select example">
                              <option> select class</option>
                              <option value="1">Jan</option>
                              <option value="2">Feb</option>
                              <option value="3">Mar</option>
                              <option value="3">Apr</option>
                              <option value="3">May</option>
                              <option value="3">Jun</option>
                              <option value="1">Jul</option>
                              <option value="2">Aug</option>
                              <option value="3">Sep</option>
                              <option value="3">Oct</option>
                              <option value="3">Nov</option>
                              <option value="3">DEc</option>
                      </Form.Select>
              </Col>
              <Col >
                  <Form.Label>Year:</Form.Label>
                  <Form.Select aria-label="Default select example">
                                <option> select section</option>
                                <option value="1">2023</option>
                                <option value="2">2022</option>
                                <option value="3">2021</option>
                                <option value="3">2020</option>
                                <option value="3">2019</option>
                                <option value="3">2018</option>
                        </Form.Select>
              </Col>
          </Row>
         

          </div>

      <div className='text-center ' >
              <Button className='text-center pe-5 ps-5 pt-3 pb-3 bg-blue-900 '>SEARCH</Button>
          </div>

      </Form>
  </div>
    </div>
  )
}

export default AdminAttendance
