import React from "react";

export default function Alert2(props) {
    const smallest = (textabc) => {
        const bhavy = textabc.toUpperCase();
        return bhavy.charAt(0).toLowerCase() + bhavy.slice(1);
    }
    return (
        <div style={{
            height : "50px",
            margin : "5px"
        }}>
            {props.bhavyAlert && <div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <b>{smallest(props.bhavyAlert.type)}</b> : {props.bhavyAlert.message}
                </div>
            </div>}
        </div>
    );
}
