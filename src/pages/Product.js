import '../App.css';
import '../App.js'
import './Product.css'
import CountdownTimer from '../CountdownTimer';

import ButtonEnter from './buttonEnter'

    

function Product(props) {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (

  	<>
      <div id="product" className="section"> 
      <img src={props.img} alt="product" className="productImg"/>
    		<h1 className="productTitle">{props.name}</h1>
        <br/>
            {/* <span> */}
            {/*     <button className="enterButton"> */}
            {/*     ENTER */}
            {/*     </button> */}
            {/* </span> */}
            {/* <div className='largeFont'>D <span id="entries1">{props.digi}</span></div>  */}
            {/* <div className='medFont'>Your Entries </div>  */}
            <ButtonEnter digi={props.digi} productID={props.name}/>

            <div style={{ fontSize : '6pt'}}>DigiTrader</div> 
    		
            <br/><br/>
    		<div className="medlrgFont" id="countdown-timer">
              <CountdownTimer targetDate={props.time} />
        </div> 
            <div className='medFont'>Remaining</div>
            <br/><br/>
      </div>
  </>
  );
} 

export default Product;


