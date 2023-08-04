import React,{useState} from 'react'

export default function TextForm(props) {

const handleupclick=()=>{
    console.log("uppercase was clicked"+text)
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showalert("UpperCase set successfully","success")
 
  }
  const handlelowclick=()=>{
    console.log("lowercase was clicked"+text)
    let newtext=text.toLowerCase()
    setText(newtext)

      props.showalert("LowerCase set successfully","success")
   
    
  }
  const handleclearclick=()=>{
    console.log("clear was clicked"+text)
    let newtext=""
    setText(newtext)
   
      props.showalert("Text Cleared successfully","success")

  }
const handleOnChange=(event)=>{
   
    setText(event.target.value);
}

const [text,setText]=useState('') 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1> {props.heading} </h1>
 
<div className="mb-3">
  <textarea className="form-control" id="mybox" rows="19" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#211746':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
</div> 
<button className="btn btn-primary" onClick={handleupclick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-4" onClick={handlelowclick}>Convert To LowerCase</button>
<button className="btn btn-primary " onClick={handleclearclick}> Clear Text  </button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.015*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Please Enter Some Text to Preview Here"}</p>
    </div>
   </>
  )

 }
