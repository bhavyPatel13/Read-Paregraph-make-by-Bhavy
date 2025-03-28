import React from 'react'

export default function Alert1(props) {
    const capitalize = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        <div style={{
            height : "50px",
            margin : "5px"
        }}>
           {props.alert && <div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
                </div>
            </div>}
        </div>
    );
}