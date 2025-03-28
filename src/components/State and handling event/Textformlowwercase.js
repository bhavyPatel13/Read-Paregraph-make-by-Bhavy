import React, {useState} from "react";

export default function Textformlowwercase(props) {
  const [text, setText] = useState("Enter Some Line");
  
  const handlerToLowwerCase = () => {
    // console.log("clicked handlerToLowwerCase");
    let newWord = text.toLowerCase();
    setText(newWord);
    props.showAlert01("Success", "Your text success fully convert to lowwercase");
    props.showAlert02("Success => 2", "Your text success fully convert to lowwercase");
  }
  const handlerToChange = (event) => {
    setText(event.target.value);
    // console.log("try to change textarea but not chnage textarea");    
  }

  return (
    <>
      <div className="container" style={{color : props.mode1 === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor : props.mode1 === "dark" ? "gray" : "white",
              color : props.mode1 === "light" ? "black" : "white"
            }}
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handlerToChange}
            value={text}> 
          </textarea>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handlerToLowwerCase}>
          Convert to lowwer case
        </button>
      </div>
    </>
  );
}