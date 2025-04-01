import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login' 
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem ("loggedInUser")
    if(loggedInUser){
      const UserData = JSON.parse(loggedInUser)
      setUser(UserData.role)
      setLoggedInUserData(UserData.data)
    }
  },[userData])

  const handleLogin= (email, password)=>{
    if(userData && userData.admin.find((e)=>email == e.email && password == e.password)){
      setUser('admin')
      localStorage.setItem ('loggedInUser' ,JSON.stringify({role:'admin', data:admin}))
    }else if (userData){
      const employee = userData.employees.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
      localStorage.setItem ('loggedInUser' ,JSON.stringify({role:'employee', data:employee}))
      }
    }else{
      alert('Invalid Credentials')
    }
  }

  return (
  <>
  {!user?  <Login handleLogin={handleLogin}/> : ""}
  {user=='admin' ? <AdminDashboard  changeUser={setUser}/> : (user == 'employee' ?  <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null)}
  </>
  )
}

export default App