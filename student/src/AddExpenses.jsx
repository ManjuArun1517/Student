import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AddExpenses = () => {

    const nav=useNavigate()

    const submit=()=>{
        nav("/adminteacher")
    }
  return (
    <div className='m-3 p-4  border-2 border-blue-900'>
    <h1 className='text-center text-2xl'><u>STUDENT PAYMENT</u></h1>
      <Form onSubmit={submit} >
          <div className='m-5'>
          {/* <h3 className=''><u>STUDENT DETAILS</u></h3> */}
          <Row className='m-3'>
              <Col >
                  <Form.Label>Name:</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
              <Col >
                  <Form.Label>ID :</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
              <Col >
                  <Form.Label>Expense Type:</Form.Label>
                  <Form.Select aria-label="Default select example">
                          <option> select Expense</option>
                          <option value="1">Salary</option>
                          <option value="2">Transport</option>
                          <option value="3">Utility</option>
                      </Form.Select>
              </Col>
              <Col >
                  <Form.Label>Amount :</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
          </Row>
         

          <Row className='m-3'>

          <Col >
                  <Form.Label>Phone NO:</Form.Label>
                  <Form.Control placeholder="" />
              </Col>
          <Col>
                  <Form.Label> E-mail id:</Form.Label>
                  <Form.Control placeholder="dd/mm/yyyy"/>
          </Col>
          
              
              <Col >
                  <Form.Label> Status:</Form.Label>
                      <Form.Select aria-label="Default select example">
                              <option> select status</option>
                              <option value="1">Paid</option>
                              <option value="2">Unpaid</option>
                      </Form.Select>
              </Col>
              <Col >
                  <Form.Label>Date:</Form.Label>
                  <Form.Control placeholder=""/>
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

export default AddExpenses
