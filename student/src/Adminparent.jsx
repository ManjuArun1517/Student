import React, { useContext, useState } from 'react'
import { Button, Card, Col, Form, FormControl, Modal, Nav, Navbar, Row, Table } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { sampleContext } from './App';

const Adminparent = () => {

    let students=[{rollno:1,name:'Aradhya',class:'10B',dob:'15/10/2002',parentname:'Rahul',phoneno:9562321548},
    {rollno:2,name:'Ananya',class:'10A',dob:'06/10/2002',parentname:'Satheesh',phoneno:8606541238},{rollno:3,name:'Arun',class:'10A',dob:'17/11/2002',parentname:'Kumar',phoneno:7236841596},{rollno:4,name:'Manju',class:'10A',dob:'15/08/2003',parentname:'Krishna',phoneno:9961381286},{rollno:5,name:'Shyam',class:'10B',dob:'18/10/2002',parentname:'karthikeyan',phoneno:8606325147}];

    // const parentid=useContext(sampleContext)
    // const {students}=parentid
    // console.log(parentid );

    const [studid,setstudid]=useState(students)
    const [Show,setShow]=useState(false)

    const gotostudent=(i)=>{
        setShow(true);
        setstudid(i);
    }
    
    const handleClose=()=>{ 
        setShow(false)
    }

    // const deletestud=(id)=>{
    //     // delete(id)
    //     // const delstud=students.filter(i=> i.id=id);
    //     // const updatedStudents = students.filter(student => student.id !== id);
    //     // students=delstud;
    // }
    

  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
       <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
        <Navbar bg='' expand="lg" className='' style={{justifyContent:'space-between'}}>
            <Navbar.Brand href="#home"  className='ms-5 font-bold underline '>PARENTS</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav" className='astudnav ' >
                <Nav className="mr-auto">
                {/* <Nav.Link href="#home">ADD STUDENT</Nav.Link> */}
                </Nav>
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
            </Navbar.Collapse>
        </Navbar>
        </div>

        {/* <div className='astudmain2'>
            <Card className='astudmain2card'>
                 <h1>TOTAL PARENTS</h1><h1 >4000</h1>
            </Card>
        </div> */}

        <div>
        <Table  hover responsive size='sm' variant='' style={{textAlign:'center'}}>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>No</th>
                        <th>Name</th>
                        <th>childrens</th>
                        <th>Phone number </th>
                        {/* <th>Action </th> */}
                        </tr>
                </thead>
                {students.map((i,index)=>{
                    return(
                            <tbody style={{height:'50px'}}>
                                <tr>
                                <td>{index}</td>
                                <td>{i.parentname}</td>
                                <td onClick={()=>gotostudent(i)}>{i.name}</td>
                                <td>{i.phoneno}</td>
                                {/* <td style={{justifyContent:'space-between'}}>  */}
                                    {/* <Button variant='light' onClick={()=>getstud(i)} ><VisibilityIcon></VisibilityIcon></Button> &nbsp;&nbsp;&nbsp;
                                    <Button variant='light' onClick={()=>{deletestud(i)}}><DeleteIcon></DeleteIcon></Button>  */}
                                {/* </td> */}
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
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            {/* </Modal.Dialog> */}
            </Modal>
        </div>
        </div>
  )
}

export default Adminparent
