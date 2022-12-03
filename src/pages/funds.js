import React from 'react';
import '../App.css';
import './funds.css'
  
const Funds = () => {

  return (
    <>
  <div id="fundsPage" className="section"> 
    <br/>
    <h1>add funds</h1>
    <p style={{fontSize:'10px',margin:'4px'}}> current balance:</p> 
    <p style={{fontSize:'20px',margin:'0px'}}>420 digitrader</p>
    <h1>↓
    </h1>
  </div>
  <div id="fundsPage" className="section"> 
    <p> Add digitrader tokens to your account </p>
    <br/>
    <input type="text" placeholder="address"></input>
    <input type="text" placeholder="secret code"></input>
    <br/>
    <button>Add digitrader</button>
  </div>
  </>
  );
};
  
export default Funds;