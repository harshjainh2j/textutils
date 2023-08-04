import React, { useState } from 'react'

export default function About() {
    const [mystyle,setmystyle]=useState({
        backgroundColor:"white",
        color:"black"

     })
   const[btntext,setbtntext]=useState(
    "Enable Dark Mode"
   )
    let togglestyle=()=>{
      if(mystyle.color=="grey"){
        setmystyle({
          color:"white",
          backgroundColor:"grey"
         })
         setbtntext("Enable Light Mode")
      }
      else{
        setmystyle({
          color:"grey",
          backgroundColor:"white"
        })
        setbtntext("Enable Dark mode")
      }
    }
  
  return (
    <>
    <div className='container' style={mystyle}>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div style={mystyle} className="accordion-body">
        This is the first item's accordion body.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        This 2
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  style={mystyle}data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       This is the third item's accordion body
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="container">
<button onClick={togglestyle} type='button' className='bn btn-primary'> {btntext}</button>
</div>
    </>
  )
}   