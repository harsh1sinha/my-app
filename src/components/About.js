import React from 'react'

export default function About(props) {
   
    let myStyle ={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'black':'white'
    }
    let myStyle2={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'#042743':'white'
    }
    let myStyle3={
        color: props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'purple':'#87CEEB'
    }
  return (
    <div className='container my-2' style={myStyle2}>
        {/* <h2 className="my-2"> About me</h2> */}
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About The Creator Of Website
                        </button>
                    </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle3}>
                <strong>Hi :) </strong> This website has been created by <strong>Harsh Sinha</strong>. This is my first website.Hope you guys like it
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About The Website
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle3}>
                This website has been created by the intention of playing with letters and words. It analyses the text given by user and performs various cool operations on it. <strong>Enjoy using it:)</strong>
            </div>
            </div>
        </div>
        
    </div>
   
    </div>
  )
}
