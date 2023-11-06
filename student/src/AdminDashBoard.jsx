import React from 'react'
import { Menu, Space } from "antd";
import './App.css'
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import SatelliteOutlinedIcon from '@mui/icons-material/SatelliteOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const AdminDashBoard = () => {
    const navigate=useNavigate()

    const Menuclick=({key})=>{
        navigate(key)
    }

  return (
    <div className='d-flex '>
    <div className="menu-container bg-blue-900" >
        <Space>
           <Menu
               className='w-[200px] text-white bg-blue-900 hover:text-white text-lg'
                onClick={Menuclick}
                mode="inline"    
                defaultOpenKeys={["stud"]}
                 items={[
                      { 
                        label:"DashBoard",
                        key:"/dash",
                        icon:<DashboardOutlinedIcon/>
                      },
                      {
                        label:"Student",
                        key:"/adminstud",
                        icon:<BackpackOutlinedIcon/>
                      },
                      {
                        label:"Teachers",
                        key:"/adminteach",
                        icon:<SchoolOutlinedIcon/>
                      },
                      {
                        label:"Parents",
                        key:"/adminpara",
                        icon:<SupervisorAccountOutlinedIcon/>
                      },
                      {
                        label:"Account",
                        key:"/adminacc",
                        icon:<BusinessCenterOutlinedIcon/>
                      },
                      {
                        label:"Class",
                        key:"/adminclass",
                        icon:<TableViewOutlinedIcon/>
                      },
                      {
                        label:"Subject",
                        key:"/adminsubject",
                        icon:<SubjectOutlinedIcon/>
                      },
                      {
                        label:"Attendance",
                        key:"/adminatte",
                        icon:<BorderColorOutlinedIcon/>
                      },
                      {
                        label:"Exam",
                        key:"/",
                        icon:<ContentPasteIcon/>
                      },
                      {
                        label:"Transport",
                        key:"trans",
                        icon:<DirectionsBusFilledOutlinedIcon/>
                      },
                      {
                        label:"Hostel",
                        key:"hostel",
                        icon:<StoreOutlinedIcon/>
                      },
                      {
                        label:"Notice",
                        key:"notice",
                        icon:<StickyNote2OutlinedIcon/>
                      },
                      {
                        label:"Messages",
                        key:"msg",
                        icon:<MailOutlineOutlinedIcon/>
                      },
                      {
                        label:"Map",
                        key:"map",
                        icon:<SatelliteOutlinedIcon/>
                      },
                      {
                        label:"Logout",
                        key:"out",
                        icon:<LogoutOutlinedIcon/>
                      }
        ]}>
        </Menu>
        </Space>
      </div>

        <div>
         {/* ss<Dashboard/> */}
        </div>

    </div>
  )
}

export default AdminDashBoard

