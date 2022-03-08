import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success")
  }
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","danger")
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text here');
  return (<>

 <div className="container" style={{color: props.mode ==='light'?'black':'white'}}>
     <h1 >{props.heading}</h1>
     <div className="container my-3" >
      <textarea className="form-control my-3" onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
  <button className="btn btn-primary bg-dark " onClick ={handleUpClick}>Change in UpperCase</button>
  <button className="btn btn-primary mx-4 bg-dark" onClick ={handleLowerClick}>Change in LowerCase</button>
  </div>
  <div className="container my-3">
    <h1>Your Text summary</h1>
    <p>{text.split(" ").length} words, {text.length} Characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
</div>
</>
  )
}

