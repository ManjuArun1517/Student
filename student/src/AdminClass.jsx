import React from 'react'
import { Button, Col, Form, FormControl, Nav, Navbar, Row, Table } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const AdminClass = () => {
    const nav=useNavigate()

    const classdetails=[
                    {classid:101,class:10,section:'A',classteacher:'Sareesh',stdno:40,subno:10,room:201},
                    {classid:102,class:10,section:'B',classteacher:'Sarang',stdno:40,subno:10,room:202},
                    {classid:103,class:10,section:'C',classteacher:'Meera',stdno:45,subno:10,room:203},
                    {classid:104,class:9,section:'A',classteacher:'Shiva',stdno:40,subno:9,room:204},
                    {classid:105,class:9,section:'B',classteacher:'Varun',stdno:45,subno:9,room:205},
                    {classid:106,class:8,section:'A',classteacher:'Theertha',stdno:45,subno:8,room:206},
                    {classid:107,class:8,section:'B',classteacher:'Madhav',stdno:45,subno:8,room:207}
                ]

  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
    <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
            <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
                <Navbar.Brand href="#home" className='ms-5 font-bold underline '>CLASSES</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='ml-[600px]'  >
                    <Nav className="mr-auto ">
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

    <div>

    <div className='m-3'>          
        <Table  hover responsive size='sm' className='bg-transparent' style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>Class ID</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Class Teacher</th>
                    <th> Students </th>
                    <th> Subjects</th>
                    <th>Room number</th>
                    <th>Action </th>
                    </tr>
            </thead>
            {classdetails.map((i,ind)=>{
                return(
                        <tbody style={{height:'50px'}}>
                            <tr>
                            <td>{i.classid}</td>
                            <td>{i.class}</td>
                            <td>{i.section}</td>
                            <td>{i.classteacher}</td>
                            <td>{i.stdno}</td>
                            <td>{i.subno}</td>
                            <td>{i.room}</td>
                            <td style={{justifyContent:'space-between'}}> 
                                <Button variant='light'  ><VisibilityIcon className='text-blue-900'></VisibilityIcon></Button> &nbsp;&nbsp;&nbsp;
                                <Button variant='light'><DeleteIcon className='text-blue-900'></DeleteIcon></Button> 
                            </td>
                            </tr>
                        </tbody>
                )
            })}
        </Table>        
    </div>
    </div>
</div>
  )
}

export default AdminClass
