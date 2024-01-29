/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/sign-in" element={<Signin/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/profile" element={<Profile/>} />  
    <Route path="*" element={<h1>Not Found</h1>} />
  </Routes>
  </BrowserRouter>
}

export default App  ;
