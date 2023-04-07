import React,{useState} from 'react'


export default function Textform(props) {
    const UPclick =()=>{
        // console.log("Upper case button clicked"+text)
        let newtext= text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase", "success")
    }
    const LOclick =()=>{
        // console.log("Upper case button clicked"+text)
        let newtext= text.toLowerCase();
        setText(newtext)
        props.showAlert("converted to lowercase", "success")
    }
    const Clclick =()=>{
        // console.log("Upper case button clicked"+text)
        let newtext= "";
        setText(newtext)
        props.showAlert("text deleted", "success")
    }
    const handleOnChange =(event)=>{
        console.log("OnChange")
        setText(event.target.value)
    }
    const[text, setText]= useState(''); //we could have written enter text here
    // setText("new text"); it is right way 
    // text="new text" it is wrong way
    // const handleCopy =()=>{
    //     var text= document.getElementById("mybox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("text coppied", "success")
    // }
    const Extraspace =()=>{
      let newtext= text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("extra spaces removed", "success")
    }
  return (
    
   <>
    <div className='container' style={{color: props.mode==='light'? 'black': 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white': 'grey', color: props.mode==='light'? 'black': 'white'}} id="mybox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={UPclick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={LOclick}>Convert to lowercase</button>
        <button className="btn btn-primary" onClick={Clclick}>Clear</button>
        {/* <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button> */}
        <button className="btn btn-primary mx-3" onClick={Extraspace}>Remove unwanted space</button>
       
    </div>
    <div className="container my-2" style={{color: props.mode==='light'? 'black': 'white'}}>
      <h2>Please find the summary of text below:</h2>
      <p>{text.length>0?text.split(" ").length:0} words, {text.length} charachters</p> {/*condition statemet used*/}
      <p>avg time required to read is: {0.008*(text.length>0?text.split(" ").length:0)} minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in text box to preview"}</p>
    </div>
   </>
    
  )
}

