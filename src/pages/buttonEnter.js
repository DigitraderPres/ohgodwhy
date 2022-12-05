import React, { Component } from 'react';

import confetti from "canvas-confetti";


class ButtonEnter extends Component {
  constructor(props) {
    super(props);
     this.state = {
      clicks: this.props.digi,
      productID: this.props.productID
    };
  }

  IncrementItem = () => {
    //alert(this.props.productID);
    let badgeElements = document.getElementById('badge');
    var count = badgeElements.getAttribute('digi-count');
    if(count > 0){
      this.setState({ clicks: this.state.clicks + 10 });
       
       var count = badgeElements.getAttribute('digi-count');
       badgeElements.setAttribute("digi-count",(count-10));
    }else{
      alert("Out of tokens!~");
    }
    
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.55 }
      })
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
      {/*         <button */}
      {/*   onClick={() => */}
      {/*     confetti({ */}
      {/*       particleCount: 100, */}
      {/*       spread: 70, */}
      {/*       origin: { y: 0.6 } */}
      {/*     }) */}
      {/*   } */}
      {/* > */}
      {/*   Click */}
      {/* </button> */}
        <button className="enterButton" onClick={this.IncrementItem}>ENTER</button>
        {/* <button onClick={this.DecreaseItem}>Click to decrease by 1</button> */}
        {/* <button onClick={this.ToggleClick}> */}
        {/*   <br/> */}
        {/*   { this.state.show ? 'Hide number' : 'Show number' } */}
        {/* </button> */}
        {/* { this.state.show ? <h2>{ this.state.clicks }</h2> : '' } */}
        <div className='largeFont'>D <span id="entries1">{ this.state.clicks }</span></div> 
        <div className='medFont'>Your Entries </div> 
      </>
    );
  }
}

export default ButtonEnter;