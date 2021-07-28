import React from 'react'
import './loading.css'
import img from './loading.svg'
function Loading() {
    return (
        <div className="loading">
            <img src={img} alt="" />
        </div>
    )
}

export default Loading
