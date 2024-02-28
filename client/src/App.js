import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import {Home,Header,Dashboard,Footer,Login,Signup,Upload,Videos} from './Components'

function App() {
 
  return( <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/videos' element={<Videos />}/>
      <Route path='/upload' element={<Upload />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App;
