import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AdminDashBoard from './AdminDashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminhome from './Adminhome';
import Adminstudent from './Adminstudent';
import AdminTeacher from './AdminTeacher';
import Adminparent from './Adminparent';
import { createContext } from 'react';

import Ztrail from './Ztrail';
import Addstudent from './Addstudent';
import Addteacher from './Addteacher';
import Dashboard from './Dashboard';
import { Space } from 'antd';
import AdminRoutes from './AdminRoutes';

const sampleContext=createContext()

function App() {

  let students=[{rollno:1,name:'Aradhya',class:'10B',dob:'15/10/2002',parentname:'Rahul',phoneno:9562321548},
    {rollno:2,name:'Ananya',class:'10A',dob:'06/10/2002',parentname:'Satheesh',phoneno:8606541238},{rollno:3,name:'Arun',class:'10A',dob:'17/11/2002',parentname:'Kumar',phoneno:7236841596},{rollno:4,name:'Manju',class:'10A',dob:'15/08/2003',parentname:'Krishna',phoneno:9961381286},{rollno:5,name:'Shyam',class:'10B',dob:'18/10/2002',parentname:'karthikeyan',phoneno:8606325147}];
  
  return (

    <div className="App-container">
      <sampleContext.Provider value={students}/>
      <Home/>
      <Space className='flex items-start'>
          <AdminDashBoard/>
          <AdminRoutes/>
        </Space>
      <sampleContext.Provider/>
    </div>
  );
}

export default App;
export {sampleContext};
