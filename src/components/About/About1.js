import React, { useState } from 'react'

export default function About1(props) {
    const[style, setStyle] = useState( {
        color : "white",
        backgroundColor : "black",
    } )
    const [buttonText, setbuttonText] = useState("Enable Light Mode");
    const clickbutton = () => {
        if (style.color === "white") {
            setStyle({
                color : "black",
                backgroundColor : "white",
            })
            setbuttonText("Enable Dark Mode");
            props.showAlert01("Success", "Your textarea success fully Enable dark mode");
            props.showAlert02("Success => 2", "Your text success fully Enable dark mode");
        }
        else {
            setStyle( {
                color : "white",
                backgroundColor : "black"
            } )
            setbuttonText("Enable Light Mode");
            props.showAlert01("Success", "Your textarea success fully Enable light mode");
            props.showAlert02("Success => 2", "Your text success fully Enable light mode");
        }
        
    }
    return (
        <div className='container' style={style}>
            <h1 className="my-3" style={style}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={style}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            style={style}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                          Accordion Item #1
                        </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is
                            shown by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={style} 
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={style} >
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={style}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">

                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is
                            hidden by default, until the collapse plugin adds the appropriate
                            classes that we use to style each element. These classes control
                            the overall appearance, as well as the showing and hiding via CSS
                            transitions. You can modify any of this with custom CSS or
                            overriding our default variables. It's also worth noting that just
                            about any HTML can go within the <code>.accordion-body</code>,
                            though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button 
                    type="button" 
                    className="btn btn-primary"

                    onClick={clickbutton}>
                        {buttonText}
                </button>
            </div>
        </div>
    );
}