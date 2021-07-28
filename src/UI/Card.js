import React from 'react'
import './card.css'
function Card(props) {
    return (
        <div className= {`card ${props.className}`} >
            {props.children}
        </div>
    )
}

export default Card
