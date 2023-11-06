import React from 'react'
import { Button, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import AdminDashBoard from './AdminDashBoard'
import { useNavigate } from 'react-router-dom'
import { Menu, Space } from 'antd'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Badge } from '@mui/material'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import profile from './images/profile.jpg'

const Home = () => {

  const navigate=useNavigate()

  const Menuclick=({key})=>{
      navigate(key)
  }


  return (
    <div>
    <div className=''> 
      <Navbar  expand="lg" className='bg-blue-900 h-[150px] p-[50px] flex justify-between home1'>
        <Navbar.Brand href="#home">
          <h1 className='font-bold text-5xl text-white posision-absolute'> SCHOOL NAME</h1>
        </Navbar.Brand>
  
        <Navbar.Collapse id="basic-navbar-nav"   >
            <Nav className="mr-auto flex ml-[400px] home1nav">
                <Form className='flex'>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2 me-2 w-[250px] h-[50px] rounded-[10px] text-center" />
                  <Button className='bg-blue-900 w-[80px] rounded-[10px]'>Search</Button>
                </Form> 
                <Badge badgeContent={4} color="error" className='mt-3'>
                  <MailOutlineIcon className='text-blue-500 ml-5  m'/>
                </Badge>
                <Badge badgeContent={10} color="error"className='mt-3'>
                  <NotificationsActiveOutlinedIcon className='text-blue-500 ml-5 m'/>
                </Badge>
                <div>
                  <img src={profile} className='w-8 h-8 ml-5 mt-2 rounded-full'></img>
                </div>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    
    </div>
  )
}

export default Home
