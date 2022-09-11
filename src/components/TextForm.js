import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("button clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("the words converted to upperCase", "Successfull")

  }

  const handleOnChange=(event)=>{
    console.log("handleOnchange");
    setText(event.target.value);
  }

  const handleLowerCase=()=>{
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("the words converted lower case", "Successfull")
  }
  
  const handleClearText=()=>{
    let clrText = ""
    setText(clrText);
  }
  const [text, setText] = useState("");
  //setText =('hello india');
  return (
    <>
    <div className="mb-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h2 className='my-3'>{props.heading}</h2>
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode=== 'light'?'whitesmoke':'grey', color: props.mode=== 'dark'?'white':'black'}}></textarea>
    </div><div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          changeUpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowerCase}>ConvertToLowerCase</button>

        <button type="button" class="btn btn-outline-warning mx-3" onClick={handleClearText}>clearText</button>

        </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>your text summary is </h2>
        <p> {text.split(" ").length} words and {text.length}chacter</p>
        <p>{0.008 * text.split(" ").length} Minutes to reead </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
      </>
  )
}
