import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      navigate("/");
    }
  },[]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("1");
    if(!email||!password){
      alert("Please fill all the feilds");
      return;
    }
    if(localStorage.getItem("userInfo")){
      alert("User is already signed in");
      console.log("2");
      return;
    }    
    try {
      console.log("3");
      const response = await axios.get('http://localhost:3001/users', {
        params: {
          email, 
        },
      });
      console.log(response);
      const user = response.data.find((u) => u.email === email);
      console.log("user",user);
      if (user && user.password === password) {
        localStorage.setItem("userInfo",JSON.stringify(user));
        alert("SuccessFully SignIn");
        console.log('User logged in:', user);
      } else {
        console.log('Invalid credentials');
        alert("Invalid credentials");
      }
      navigate("/");
    } catch (error) {
      alert("error");
      console.error('Error searching for user:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
