import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleDpClick = ()=>{
        let newtp = text.toLowerCase();
        setText(newtp);
    }
    const handleOnChange = (Event)=>{
        console.log("onchange");
        setText(Event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:  props.mode ==='dark'?'white':'rgb(3 54 120)'}}>
        
 <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:  props.mode ==='dark'?'grey':'white',
color: props.mode==='dark'?'white':'rgb(3 54 120)'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleDpClick}>convert to lowercase</button>
    </div>
    <div className="container my-3" style={{color:  props.mode ==='dark'?'white':'rgb(3 54 120)'}}>
        <h2>YOUR TEXT SUMMARY</h2>
        <p>characters in your sentence {text.length}</p>
        <p>words in your sentence {text.split(" ").length}</p>
        <p>how  much time to read in minutes to your sentence {0.008*text.split(" ").length}</p>
       <h4>Preview</h4>
        <h5>{text.length>0?text:"Enter something in the textbox"}</h5>
    </div>
    <div className="container">

    </div>

    </>
  )
}
