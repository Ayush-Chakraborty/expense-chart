import React from 'react'
import './btn.css'
function Button(props) {
    return (
        <button className={` btn ${props.className}`} onClick={(e)=>{
            props.onClick(e);
        }} 
        type={props.type}>
            {props.children}
        </button>
    )
}

export default Button
