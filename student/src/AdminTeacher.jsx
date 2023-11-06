import React, { useState } from 'react'
import { Button, Card, Col, Form, FormControl, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


const AdminTeacher = () => {

    const nav=useNavigate()

    const teachers=[{id:101,name:"Rejina",age:24,class:10,qual:"B-ed",address:"agsghjgbj",phone:9568741238,email:"rejina@gmail.com",idcard:"Adhar"},
    {id:102,name:"Priya",age:25,class:6,qual:"Degree",address:"asdfghjklert",phone:7523684125,email:"priya@gmail.com",idcard:"Licence"},
    {id:103,name:"Sareesh",age:29,class:8,qual:"MA",address:"lakjhuihijseh",phone:7152368452,email:"sareesh@gmail.com",idcard:"Voter id"},
    {id:104,name:"AAryan",age:28,class:10,qual:"MCA",address:"karightin",phone:8606145872,email:"aaryan@gmail.com",idcard:"Adhar"},
    {id:105,name:"Keerthi",age:31,class:10,qual:"B-ed",address:"asdfghytrew",phone:9548712365,email:"keerthi@gmail.com",idcard:"Adhar"}]

    const [teacher,setteacher]=useState(teachers)
    const [Show,setShow]=useState(false)
    // setstudid(students)

const getstud=(i)=>{
    setShow(true);
    setteacher(i);
}

const handleClose=()=>{ 
    setShow(false)
}

const deletestud=(id)=>{
    // delete(id)
    // const delstud=students.filter(i=> i.id=id);
    // const updatedStudents = students.filter(student => student.id !== id);
    // students=delstud;
}


  return (
    <div>
      <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
        <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
        <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
            <Navbar.Brand href="#home" className='ms-5 font-bold underline '>ALL TEACHERS</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='ml-[450px]'  >
                <Nav className="mr-auto ">
                    <Nav.Link href="#home" onClick={()=>nav('/addteacher')}>ADD TEACHER</Nav.Link>
                
                <Form >
                    <Row>
                        <Col xs={8}>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Col>
                        <Col xs={4}>
                            <Button className='bg-blue-900'>Search</Button>
                        </Col>
                    </Row>
                </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
        

        <div className='m-3'>          
            <Table  hover responsive size='sm'  style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>ID</th>
                        <th>Name</th>
                        <th>classes</th>
                        <th>Qualification </th>
                        <th>Email id </th>               
                        <th>Actions</th>
                        
                        </tr>
                </thead>
                {teachers.map((i)=>{
                    return(
                            <tbody style={{height:'50px'}}>
                                <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.class}</td>
                                <td>{i.qual}</td>
                                <td>{i.email}</td>
                                <td style={{justifyContent:'space-between'}}> 
                                    <Button variant='light' onClick={()=>getstud(i)} ><VisibilityIcon className='text-blue-900'></VisibilityIcon></Button> &nbsp;&nbsp;&nbsp;
                                    <Button variant='light' onClick={()=>{deletestud(i)}}><DeleteIcon className='text-blue-900'></DeleteIcon></Button> 
                                </td>
                                </tr>
                            </tbody>
                    )
                })}
            </Table>        
        </div>

        <div>
            <Modal show={Show} onHide={handleClose}>
            {/* <Modal.Dialog> */}
                <Modal.Header closeButton>
                    <Modal.Title>{teacher.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ID:{teacher.ID}<br></br>
                    Class:{teacher.class}<br></br>
                    QUALIFICATION:{teacher.qual}<br></br>
                    ADDRESS:{teacher.address}<br></br> 
                    PHONE NUMBER:{teacher.phone}<br></br>
                     EMAIL ID:{teacher.email}<br></br>
                      ID CRAD DETAILS:{teacher.idcard}<br></br> 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            {/* </Modal.Dialog> */}
            </Modal>
        </div>
    </div>
    </div>
  )
}

export default AdminTeacher
