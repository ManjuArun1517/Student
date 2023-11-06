import React, { useContext } from 'react'
import { Button, Card, Col, Form, FormControl, Modal, Nav, Navbar,Row, Table } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { sampleContext } from './App';
import { useNavigate } from 'react-router-dom';

const Adminstudent = () => {

    const nav=useNavigate()

    let students=[{rollno:1,name:'Aradhya',class:'10B',dob:'15/10/2002'},
    {rollno:2,name:'Ananya',class:'10A',dob:'06/10/2002'},{rollno:3,name:'Arun',class:'10A',dob:'17/11/2002'},{rollno:4,name:'Manju',class:'10A',dob:'15/08/2003'},{rollno:5,name:'Shyam',class:'10B',dob:'18/10/2002'}];

    // const Studentid=useContext(sampleContext)
    // const {students}=Studentid
    // console.log(Studentid);

    const [studid,setstudid]=useState(students)
    const [Show,setShow]=useState(false)
    // setstudid(students)

const getstud=(i)=>{
    setShow(true);
    setstudid(i);
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

 console.log(studid);
  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
        <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
        <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
            <Navbar.Brand href="#home" className='ms-5 font-bold underline '>ALL STUDENTS</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='ml-[450px]'  >
                <Nav className="mr-auto ">
                    <Nav.Link href="#home" onClick={()=>nav('/addstudent')}>ADD STUDENT</Nav.Link>
                
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
            <Table  hover responsive size='sm' className='bg-transparent' style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Roll no</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Date of birth</th>
                        <th>Action </th>
                        </tr>
                </thead>
                {students.map((i)=>{
                    return(
                            <tbody style={{height:'50px'}}>
                                <tr>
                                <td>{i.rollno}</td>
                                <td>{i.name}</td>
                                <td>{i.class}</td>
                                <td>{i.dob}</td>
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
                    <Modal.Title>{studid.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Roll No:{studid.rollno}<br></br>
                    Class:{studid.class}<br></br>
                    DOB:{studid.dob}<br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-blue-900' onClick={handleClose}>Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            {/* </Modal.Dialog> */}
            </Modal>
        </div>
    </div>
  )
}

export default Adminstudent
