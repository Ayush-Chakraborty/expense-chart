import React from 'react'
import './topbar.css'
// import Button from '../UI/Button'
function Topbar({onLogOut}) {
    return (
        <div className="topbar">
            <div className="topbar__title">
                <span className="topbar__initial">E</span>xpense {" "}
                <span className="topbar__initial">C</span>hart
            </div>
            {/* <Button className="logout" onClick={()=>{
                localStorage.removeItem('loggedIn');
                onLogOut();
            }} >Logout</Button> */}
        </div>
    )
}

export default Topbar
