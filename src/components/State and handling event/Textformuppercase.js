import React, {useState} from 'react';

export default function Textformuppercase(props) {

  const [text, setText] = useState("Enter Some Word");
  const handlertoUppercase = () => {
    // console.log("clicked handlertoUppercase");
    let bhavy = text.toUpperCase();
    setText(bhavy);
    props.showAlert01("Success", "Your text success fully convert to Uppercase");
    props.showAlert02("Success => 2", "Your text success fully convert to Uppercase");
  }
  
  const handlerchangeUppercase = (event) => {
    setText(event.target.value);
  }
  const handlerClear = () => {
    // console.log("Clear textarea"); 
    setText("");
    props.showAlert01("Success", "Your textarea is success fully cleared");
    props.showAlert02("Success => 2", "Your textarea is success fully cleared");
  }
  return (
    <div className='container' style={{color : props.mode1 === "dark" ? "black" : "white"}}>
      <h1 style={{color : props.mode1 === "#042743" ? "white" : "black"}}>{props.heading}</h1>
      <textarea 
      style={{
        backgroundColor : props.mode1 === "dark" ? "gray" : "white",
        color : props.mode1 === "dark" ? "white" : "black",
      }}
        className="form-control mb-3" 
        id="myBox" 
        rows="8" 
        onChange={handlerchangeUppercase} 
        value={text}>
      </textarea>
      <div>
        <button 
          className='btn btn-primary' 
          onClick={handlertoUppercase}>
          Convert To upper case
        </button>
        <button 
          className='btn btn-primary mx-2' 
          onClick={handlerClear}>
          Clear Button
        </button>
      </div>
    </div>
  )
}