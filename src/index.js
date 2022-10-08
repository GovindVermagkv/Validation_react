import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Ragister from "./Component/Ragister"
import Login from "./Component/Login"
import Layout from "./Component/Layout"
import Profile from "./Component/profile"


export default function App(){

  return(
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
     <Route index element={<Ragister />} />
     <Route path='login' element={<Login />} />
     <Route path='profile' element={<Profile />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
