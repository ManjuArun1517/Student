import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Adminstudent from './Adminstudent'
import AdminTeacher from './AdminTeacher'
import Addstudent from './Addstudent'
import Adminparent from './Adminparent'
import Addteacher from './Addteacher'
import AdminAccount from './AdminAccount'
import AddPayment from './AddPayment'
import FeesCollection from './FeesCollection'
import AddExpenses from './AddExpenses'

import AdminClass from './AdminClass'
import AdminSubjects from './AdminSubjects'
import AddSubject from './AddSubject'
import AdminAttendance from './AdminAttendance'

const AdminRoutes = () => {
  return (
    <div>
       <Routes>
       <Route path='/dash' element={<Dashboard/>}></Route>
        <Route path='/adminstud' element={<Adminstudent/>}></Route>
        <Route path='/adminteach' element={<AdminTeacher/>}></Route>
        <Route path='/adminpara' element={<Adminparent/>}></Route>
        <Route path='/addstudent' element={<Addstudent/>}></Route>
        <Route path='/addteacher' element={<Addteacher/>}></Route>
        <Route path='/adminacc' element={<AdminAccount/>}></Route>
        <Route path='/addpayment' element={<AddPayment/>}></Route>
        <Route path='/feescollect' element={<FeesCollection/>}></Route>
        <Route path='/addexpenses' element={<AddExpenses/>}></Route>
        <Route path='/addexpenses' element={<AdminClass/>}></Route>
        <Route path='/adminclass' element={<AdminClass/>}></Route>
        <Route path='/adminsubject' element={<AdminSubjects/>}></Route>
        <Route path='/addsubject' element={<AddSubject/>}></Route>
        <Route path='/adminatte' element={<AdminAttendance/>}></Route>

        </Routes>
    </div>
  )
}

export default AdminRoutes
