import React, { Fragment, useEffect, useState} from 'react'
import SideBar from "./SideBar";
import Welcome from './Welcome';
import { Link} from 'react-router-dom';
const HomePage = () => {
  const[user,setUser]=useState();
  const[login,setLogin]=useState();
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      setUser(JSON.parse(localStorage.getItem("userInfo")));
      setLogin(true);
    }
  },[]);
  const handleLogout=()=>{
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
      alert("User has been logged out");
      console.log("User logged out");
      setLogin(false);
      window.location.reload(false)
      return;
    }
  }
    const[active,setActive]=useState(1);
  return (
    <Fragment>
    <div className='heading'>Library Managment System</div>
    <div className='logindiv'>
      {!login&&
      <div>
        <Link to="/login">Login</Link>
    <Link to="/signUp">SignUP</Link>
      </div>
      }
      {
        login&&
        <div onClick={handleLogout}>Logout</div>
      }
    </div>
    <div className='main'>
    <div className='left'><SideBar active={active} setActive={setActive}/></div>
    <div className='right'><Welcome active={active}/></div>
    </div>
    </Fragment>
  )
}

export default HomePage