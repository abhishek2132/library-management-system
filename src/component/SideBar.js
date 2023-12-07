import React, { useEffect, useState } from 'react'
import './sideBar.css';
const SideBar = ({active,setActive}) => {
  const[user,setUser]=useState("");
  const[login,setLogin]=useState(true);
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("userInfo")));
    if (localStorage.getItem("userInfo")) {
      setLogin(true);
    }
  },[login]);
  const handleLogout=(e)=>{
    e.preventDefault();
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
      setLogin(false);
      alert("User has been logged out");
      console.log("User logged out");
      return;
    }
  }
  return (
    <div className='sidebarcontainer'>
      <div className='sidebarelem'
       onClick={()=>setActive(1)}
       >
        <span className={active===1?"active":"nonactive"}>BookPage</span>
       </div>
       <div className='sidebarelem'
       onClick={()=>setActive(2)}
       >
        <span className={active===2?"active":"nonactive"}>Welcome</span>
       </div>
       {
        user&&user.role==="admin"&&<div
        className='sidebarelem'
        onClick={()=>setActive(3)}
        >
         <span className={active===3?"active":"nonactive"}>Admin Add Book</span>
        </div>
       }
       {
        user&&user.role==="admin"&&
        <div
        className='sidebarelem'
        onClick={()=>setActive(4)}
        >
         <span className={active===4?"active":"nonactive"}>Admin Delete Book</span>
        </div>
       }
       {
        user&&user.role==="admin"&&
        <div
        className='sidebarelem'
        onClick={()=>setActive(5)}
        >
         <span className={active===5?"active":"nonactive"}>Admin Allocate Book</span>
        </div>
       }
       
       {
        user&&user.role==="user"&&
        <div
        className='sidebarelem'
        onClick={()=>setActive(6)}
        >
         <span className={active===6?"active":"nonactive"}>User Grant Request Book</span>
        </div>
       }
       {
        user&&user.role==="user"&&
        <div
        className='sidebarelem'
        onClick={()=>setActive(7)}
        >
         <span className={active===7?"active":"nonactive"}>User Retuen Request Book</span> 
        </div>
       }
       {/* <div
       className='sidebarelem'
       onClick={()=>setActive(8)}
       >
        <span className={active===8?"active":"nonactive"}>{!login?<div>Login</div>:<div onClick={handleLogout}>Logout</div>}</span> 
       </div>
       {
        !login&&
        <div
       className='sidebarelem'
       onClick={()=>setActive(9)}
       >
        <span className={active===9?"active":"nonactive"}>SignUp</span> 
       </div>
       } */}
    </div>
  )
}

export default SideBar