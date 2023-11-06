import React from 'react'
import { Button, Col, Form, FormControl, Nav, Navbar, Row, Table } from 'react-bootstrap'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const AdminSubjects = () => {

    const nav=useNavigate()

   

    const subjects=[
                        {code:301,subname:'Mathematics',subtype:'theory',class:10},
                        {code:302,subname:'Biology',subtype:'Practical',class:11},
                        {code:303,subname:'Chemistry',subtype:'Practical',class:12},
                        {code:304,subname:'English',subtype:'theory',class:8},
                        {code:305,subname:'Social Science',subtype:'theory',class:9},
                    ]

  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
    <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
            <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
                <Navbar.Brand href="#home" className='ms-5 font-bold underline '>SUBJECTS</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='ml-[500px]'  >
                    <Nav className="mr-auto ">
                    <Nav.Link href="#home" onClick={()=>nav('/addsubject')}>ADD SUBJECT</Nav.Link>
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
                    <th> Subject ID</th>
                    <th>Subject Name</th>
                    <th>Subject Type</th>
                    <th>Class </th>
                    <th>Action </th>
                    </tr>
            </thead>
            {subjects.map((i,ind)=>{
                return(
                        <tbody style={{height:'50px'}}>
                            <tr>
                            <td>{i.code}</td>
                            <td>{i.subname}</td>
                            <td>{i.subtype}</td>
                            <td>{i.class}</td>
                           
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

export default AdminSubjects
