import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    
    const handleLoClick = () =>{
        //console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
    }

    const handleClearClick = () =>{
        //console.log("Uppercase was clicked"+ text);
    let newText = "";
        setText(newText)
    }

    
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    
    }
     
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState(' ');
   //setText("new text");
  

    return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'blue'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">


<textarea className="form-control" value= {text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',
 color: props.mode==='dark'?'white':'blue'}} id="myBox" rows="5"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick ={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick ={handleLoClick}>convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick ={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick ={handleCopy}>Copy Text</button>


</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'blue'}}>
    <h2>Your text summary</h2>
    <p> {text.split("").length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview here"}</p>





 </div>
</>
  )

}
