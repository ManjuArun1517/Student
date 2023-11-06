import React from 'react'
import { Button, Col, Form, FormControl, Nav, Navbar, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminAccount = () => {

    const exp=[
        {exptype:'Salary',name:'Aryan',amount:50000,status:'Paid',phone:9562326598,emial:'aryan@gmail.com',date:'15/06/2023'},
        {exptype:'Transport',name:'Ayaan',amount:5000,status:'Paid',phone:92356326598,emial:'ayaan@gmail.com',date:'15/06/2023'},
        {exptype:'utility',name:'Madhav',amount:6000,status:'Unpaid',phone:8606257845,emial:'madhav@gmail.com',date:'31/10/2023'},
        {exptype:'salary',name:'Sareesh',amount:50000,status:'Paid',phone:7362157896,emial:'sareesh@gmail.com',date:'15/06/2023'},
        {exptype:'salary',name:'Priya',amount:50000,status:'Unpaid',phone:7306154825,emial:'priya@gmail.com',date:'15/10/2023'}]

    const nav=useNavigate()
  return (
    <div className='m-3 w-[1100px]  justify-center rounded-[20px] '>
        <div className='  rounded-[30px] h-[60px] justify-between item-centers'>
                <Navbar bg='' expand="lg" className='justify-between' style={{justifyContent:'space-between'}}>
                    <Navbar.Brand href="#home" className='ms-5 font-bold underline '>ALL EXPENSES</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className='ml-[100px]'  >
                        <Nav className="mr-auto ">
                        <Nav.Link href="#home" onClick={()=>nav('/addpayment')} className='navlink font-bold'>ADD STUDENT PAYMENT</Nav.Link>
                        <Nav.Link href="#home" onClick={()=>nav('/feescollect')} className='navlink font-bold'>FEES COLLECTION</Nav.Link>
                        <Nav.Link href="#home" onClick={()=>nav('/addexpenses')} className='navlink font-bold'>ADD EXPENSES</Nav.Link>
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
                        <th>#</th>
                        <th>Expense Type</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th> Status </th>
                        <th> Date </th>
                        <th>Action </th>
                        </tr>
                </thead>
                {exp.map((i,ind)=>{
                    return(
                            <tbody style={{height:'50px'}}>
                                <tr>
                                <td>{ind}</td>
                                <td>{i.exptype}</td>
                                <td>{i.name}</td>
                                <td>{i.amount}</td>
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

export default AdminAccount
