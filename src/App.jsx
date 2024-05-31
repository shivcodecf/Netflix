import { useState,useEffect } from 'react'

import Home from './pages/Home/Home'
import Login from './pages/Home/Login/Login'
import { auth } from './firebase'

import { onAuthStateChanged } from 'firebase/auth' 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  




import './index.scss'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Player from './pages/Home/Player/Player'

function App() { 
  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        console.log("Logged In")
        navigate('/')
      }
      else {
        console.log("Logged Out");
        navigate('/login')
      }
    })
  },[])
 

  return (
    <div >  
      <ToastContainer theme='dark' />
      <Routes>
       <Route path='' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/player/:id' element={<Player/>}/>
      </Routes>
   
   
    </div>
  )
}

export default App
