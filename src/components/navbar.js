import React from 'react';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1}`} style={{border : "1px solid black"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{color : "black"}}>{props.title}</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/"  style={{color : "black"}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/"  style={{color : "black"}}>{props.About}</a>
                        </li>
                    </ul>
                    <form className="d-flex" id="">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" />
                        <button 
                            className="btn btn-outline-success" 
                            type="submit"
                            style={{border : "3px solid black"}}>
                                Search
                        </button>
                    </form>
                    <div className="d-flex">
                        <div 
                            className="bg-primary rounded mx-2 my-2"
                            onClick={() => {props.toggle("primary")}}
                            style={{height : "30px", width : "30px", border : "3px solid black"}}></div>
                        <div 
                            className="bg-danger rounded mx-2 my-2"
                            onClick={() => {props.toggle("danger")}}
                            style={{height : "30px", width : "30px", border : "3px solid black"}}></div>
                        <div 
                            className="bg-warning rounded mx-2 my-2"
                            onClick={() => {props.toggle("warning")}}
                            style={{height : "30px", width : "30px", border : "3px solid black"}}></div>
                        <div 
                            className="bg-success rounded mx-2 my-2"
                            onClick={() => {props.toggle("success")}}
                            style={{height : "30px", width : "30px", border : "3px solid black"}}></div>
                        <div 
                            className="bg-light rounded mx-2 my-2"
                            onClick={() => {props.toggle("light")}}
                            style={{height : "30px", width : "30px", border : "3px solid black"}}></div>
                        <div 
                            className="rounded mx-2 my-2"
                            onClick={() => {props.toggle("#042743")}}
                            style={{height : "30px", width : "30px", border : "3px solid black", backgroundColor: "#042743"}}></div>                        
                    </div>
                    {/* <div className={`form-check form-switch mx-2 text-${props.mode1 === "light" ? "dark" : "light"}`}>
                        <input 
                            className="form-check-input" 
                            onClick={() => {props.toggle(null)}}
                            type="checkbox" 
                            id="flexSwitchCheckDefault"/>
                        <label 
                            className="form-check-label" 
                            htmlFor="flexSwitchCheckDefault">
                                {props.mode1 === "light" ? "Enable Darkmode" : "Disable Darkmode"}
                        </label>
                    </div> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;