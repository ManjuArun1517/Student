import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Col, Form, FormControl, Nav, Navbar, Row, Table } from 'react-bootstrap';

const FeesCollection = () => {

    let students=[
        {rollno:1,name:'Aradhya',class:'10',section:'B',dob:'15/10/2002',parentname:'Rahul',phoneno:9562321548,fees:9000,status:'Paid',email:'aradhya@gmail.com',date:'15/08/2023'},
        {rollno:2,name:'Ananya',class:'10',section:'A',dob:'06/10/2002',parentname:'Satheesh',phoneno:8606541238,fees:900,status:'Unpaid',email:'ananya@gmail.com',date:'18/10/2023'},
        {rollno:3,name:'Arun',class:'10',section:'A',dob:'17/11/2002',parentname:'Kumar',phoneno:7236841596,fees:9000,status:'Paid',email:'arun@gmail.com',date:'01/11/2023'},
        {rollno:4,name:'Manju',class:'10',section:'A',dob:'15/08/2003',parentname:'Krishna',phoneno:9961381286,fees:9000,status:'Unpaid',email:'manju@gmail.com',date:'01/11/2023'},
        {rollno:5,name:'Shyam',class:'10',section:'B',dob:'18/10/2002',parentname:'karthikeyan',phoneno:8606325147,fees:9000,status:'Paid',email:'shyam@gmail.com',date:'02/08/2023'}];

  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
    <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
            <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
                <Navbar.Brand href="#home" className='ms-5 font-bold underline '>FEES COLLECTION</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className='ml-[500px]'  >
                    <Nav className="mr-auto  ">
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Parent Name</th>
                    <th>Class</th>
                    <th> Section </th>
                    <th> Fees </th>
                    <th> Status </th>
                    <th> Date </th>
                    <th>Action </th>
                    </tr>
            </thead>
            {students.map((i,ind)=>{
                return(
                        <tbody style={{height:'50px'}}>
                            <tr>
                            <td>{i.rollno}</td>
                            <td>{i.name}</td>
                            <td>{i.parentname}</td>
                            <td>{i.class}</td>
                            <td>{i.section}</td>
                            <td>{i.fees}</td>
                            <td>{i.status}</td>
                            <td>{i.date}</td>
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

export default FeesCollection
