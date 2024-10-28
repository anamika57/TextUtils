import React from 'react'
import { useState } from 'react'
export default function About(props) {

  //About Theme
const [myStyle ,setMyStyle]=useState({
    color:'white',
    backgroundColor:'black',
    border:'1px solid white'
  

})

const [btntext ,setBtnText]=useState("Enable Dark Mode");
 
const toggleStyle=()=>{
    if(myStyle.color ==='white'){
       setMyStyle({
        color:'black',
        backgroundColor:'white',
        border:'1px  solid black'
       })
        setBtnText("Enable Dark mode");
}
else{
    setMyStyle({
        color:'white',
        backgroundColor:'black',
           border:'1px solid white'
       })

       setBtnText("Enable Light mode");
            }
}
  return (
  <>

  <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2 className='my-2'>About US</h2>
  <div className="accordion" id="accordionExample" >
  <div className="accordion-item"  style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black' ,border:props.mode==='light'?"2px solid black":"2px solid white"}} >
    <h2 className="accordion-header">
      <button style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyse Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black',border:props.mode==='light'?"2px solid black":"2px solid white"}}>
         <p>


 <strong>Text Analyzer</strong>
 <br />
This tool provides quick and efficient text analysis, helping users clean, format, and manipulate text with ease. Key features include:

Text Cleaning: Remove unnecessary characters and extra spaces to produce clean, readable content.
Lowercase & Uppercase Conversion: Easily switch text between lowercase and uppercase for consistency and formatting.
Instant Processing: Perform real-time analysis and transformations without waiting, making it ideal for quick tasks.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black' ,border:props.mode==='light'?"2px solid black":"2px solid white"}} >
    <h2 className="accordion-header">
      <button  style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black' ,border:props.mode==='light'?"2px solid black":"2px solid white"}} >
 
        
     <strong>Free-to-Use</strong>
      This powerful text analyzer is completely free to use and works effortlessly within any web browser, offering users the convenience of accessing the tool from anywhere, without the need for installations or downloads. Key highlights include:
      </div>
    </div>
  </div>
  <div className="accordion-item"style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black' ,border:props.mode==='light'?"2px solid black":"2px solid white"}}>
    <h2 className="accordion-header">
      <button style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black'}}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white' ,color:props.mode==='dark'?'white':'black' ,border:props.mode==='light'?"2px solid black":"2px solid white"}} >
 
        <p>
       <strong> Browser-Compatible:</strong> Operates smoothly on any modern web browser—whether on desktop, tablet, or mobile devices—without requiring additional software.
         <br />
         <strong> Cross-Platform Access: </strong>
        Easily accessible from multiple devices, ensuring flexibility whether you're at home, work, or on the go.
        </p>
      </div>
    </div>
  </div>
</div>
{/* <div className="container my-3">
<button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
</div> */}

</div>
  </>
  )
}

