import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './auth/Login/Login';
import Signup from './auth/Signup/Signup'
import Dashboard from './Component/Dashboard'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes> 
      <Route  path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App