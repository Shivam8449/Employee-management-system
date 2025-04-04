import React, { createContext, useEffect, useState } from 'react'
import { getLoacalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()
const AuthProvider = ({children}) => { 
  const [userData, setUserData] = useState(null)
  
  useEffect(()=>{
    setLocalStorage()
    const {employees, admin} = getLoacalStorage()
    setUserData({employees, admin})
  },[])
  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
