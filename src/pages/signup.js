import React from 'react';
import '../App.css';
import './signup.css'
  
const SignUp = () => {

  return (
    <>
  <div id="loginPage" className="section"> 
    
    <h1>login</h1>
    <h1>↓
    </h1>
    <input type="text" placeholder="username"></input>
    <input type="password" placeholder="password"></input>
    <br/>
    <button className="button">Login</button>
    </div>
      <div id="" className="section"> 
      
      <h1>sign up</h1>
      <h1>↓
      </h1>
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="username"></input>
      <input type="password" placeholder="password"></input>
      <br/>
      <button className="button">Sign up</button>
    </div>
  </>
  );
};
  
export default SignUp;