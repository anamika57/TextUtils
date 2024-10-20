import React, { useEffect } from "react";
import {useState} from "react";

export default function TextForms(props) {

  //To Remove Extra Spaces
  const handleExtraSpaces=()=>{
    let newText=text.split(/\s+/) 
    // /\s+/ is a regular expression that matches one or more whitespace characters in a string
    setText(newText.join(" "))
    props.showAlert("Extra Spaces removed" ,"success");
  };

  //To count Paragraphs
    let newCount=0;
    const handleOnPress=(key)=>{
      if(key==="Enter" && text.value!==' '){
        
        setCount((newCount)=newCount+1);  // updating state
      }
    };

    //to add and remove eventListeners
    useEffect(()=>{
      
   
      const handleKeyPress=(event)=>handleOnPress(event.key);
     
      document.addEventListener("keypress",handleKeyPress);

      return () => {
        document.removeEventListener("keypress", handleKeyPress);
      };
    },[]);
  
    //To Copy Text
    const handleOnCopy=()=>{
      var text=document.getElementById("myBox");
      text.select(); //selects the text
      text.setSelectionRange(0,text.value.length); //ensure the full selection range
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard" ,"success");
    }
 
  
     // To convet text to lowercase
    const handleLoClick=(event)=>{
       let newText =text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase" ,"success");
    }

    //to convet text to uppercase
    const handleUpClick=(event)=>{
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" ,"success");

    }
    //to maintain the change in text
    const handleOnChange=(event)=>{
        setText(event.target.value);
        console.log(text);
     
          
    }
    //To clear text
    const handleClearClick=()=>{
        let newText=' ';
        setText(newText);
        props.showAlert("Text Cleared" ,"success");
     

    }

    const[text ,setText]=useState("");
    const[count ,setCount]=useState(0);
   
    // text="newText";//wrong way
    // setText("newText").//correct way
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className="my-3" >{props.heading}</h1>
      <div className="mb-3" >
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mb-3 my-3" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mb-3 my-3 mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mb-3 my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mb-3 my-3 mx-1" onClick={handleOnCopy}>Copy Text</button>
      <button className="btn btn-primary mb-3 my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    <h3>YOUR TEXT SUMMARY</h3>
    <p> {text.split(".").length} sentences.</p>
    <p > {count} Paragraph.</p>
    <p> {text.split(" ").length} words and {text.length} characters.</p>
    <p> {0.008*text.split(" ").length} Minutes read</p>
    
    <p><h4>Preview :</h4><br/>{text.length>0?text:"Enter Something to preview "}</p>

</div>
    </>
  );
}
