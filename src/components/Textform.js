import React,{useState} from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowClick = () => {
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
      let newText = ''
      setText(newText)
      props.showAlert("Text box has been cleared", "success");
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces have been removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // text = "nex text"; //Wrong way to change state
    // setText("New Text"); //Correct way to change state
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="5"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
