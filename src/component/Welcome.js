import React, { useEffect, useState } from 'react'
import WelcomeReal from "./WelcomeReal.js";
import AdminAddBook from "./AdminAddBook.js";
import BookPage from "./BookPage.js";
import Login from "./Login.js";
import SignUP from "./SignUp.js";
import AdminDeletePage from './AdminDeletePage.js';
import AdminAllocateBook from "./AdminAllocateBook.js";
import RequestAccepted from "./RequestAccepted.js";
import { json } from 'react-router-dom';
const Welcome = ({active}) => {
  const[user,SetUser]=useState();
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      SetUser(JSON.parse(localStorage.getItem("userInfo")));
    }
  },[]);
  return (
    <div className='welcomediv'>
      {
        active===1&&
        <BookPage/>
      }
        {
        active===2&&
        <WelcomeReal/>
       }
       {
        active===3&&
        <div><AdminAddBook/></div>
       }
       {
        active===4&&
        <AdminDeletePage/>
       }
       {active===5&&
       <AdminAllocateBook/>}
       {
        active==6&&
        <RequestAccepted user={user}/>
       }
    </div>
  )
}

export default Welcome