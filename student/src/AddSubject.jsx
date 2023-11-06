import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AddSubject = () => {
    const nav=useNavigate()
    const submit=()=>{
        nav("/adminSubjects")
    }
  return (
    <div className='m-3 p-5  border-2 border-blue-900 classadd'>
    <h1 className='text-center text-2xl'><u>ADD SUBJECT</u></h1>
      <Form onSubmit={submit} >
          <div className='m-5'>
          {/* <h3 className=''><u>STUDENT DETAILS</u></h3> */}
          <Row className='m-3'>
              <Col >
                  <Form.Label>Subject Name:</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
              <Col>
                  <Form.Label>Subject type:</Form.Label>
                  <Form.Select aria-label="Default select example">
                              <option> select type</option>
                              <option value="1">Practical</option>
                              <option value="2">Theory</option>
                              <option value="3">Mathematics</option>
                      </Form.Select>
              </Col>
              <Col>
                  <Form.Label>Class:</Form.Label>
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
                  <Form.Label>Subject code:</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
          </Row>
         

          </div>

      <div className='text-center ' >
              <Button className='text-center pe-5 ps-5 pt-3 pb-3 bg-blue-900 '>SUBMIT</Button>
          </div>

      </Form>
  </div>

  )
}

export default AddSubject
