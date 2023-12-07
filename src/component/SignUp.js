import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const[name,setName]=useState("");
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      navigate("/");
    }
  },[]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!email||!password||!name){
      alert("Please fill all the feilds");
      return;
    }
    if(localStorage.getItem("userInfo")){
      alert("User is already signed in");
      console.log("2");
    }    
    try {
      console.log("3");
      const userdata={
        name:name,
        password:password,
        email:email
      }
      const id=await axios.post('http://localhost:3001/users',userdata);
      localStorage.setItem("userInfo",JSON.stringify(id));
      alert("SuccessFully SignUp");
      navigate("/");
    } catch (error) {
      alert("error");
      console.error('Error searching for user:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
