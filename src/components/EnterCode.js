import React, { useState } from "react";

const EnterCode = (props) => {

 const [ input, setInput] = useState()
 const inputChangeHandler = (e) => {
 setInput(e.target.value)
 console.log(input)
 }

  return (
    <>
      <h1>Enter Code</h1>
      <input 
      onChange={inputChangeHandler}
      style={{ height: '50px', width: '200px', fontSize: '40px', textAlign: 'center'}}
      type="number" />
      <br />
      <button 
      onClick={props.onClick}
      type="button"
      >SUBMIT CODE</button>
      <br />
      <button type="button">PLAY GAME</button>
    </>
  );
};

export default EnterCode;
