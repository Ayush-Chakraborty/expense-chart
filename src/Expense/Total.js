import React from 'react'
import './total.css'
function Total(props) {
    if(props.val===0)
    return <></>
    return (
        <div className="total">
            Total
            <div>Rs {props.val}</div>
        </div>
    )
}

export default Total
