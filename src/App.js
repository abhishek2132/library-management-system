import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from "./component/HomePage";
import Login from './component/Login';
import SignUp from './component/SignUp';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path="/login" element={<LoginPage />}/> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App
