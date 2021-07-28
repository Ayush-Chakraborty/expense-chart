import React from 'react'
import './errorMsg.css'
import WarningIcon from '@material-ui/icons/Warning';
function ErrorMsg(props) {
    const msg=props.msg;
    if(msg)
    return (
        <div className="error_msg" >
            <div className={"error_msg__body "+props.className}>
                <WarningIcon className="error_msg__icon"/>
                {msg}
            </div>
        </div>
    )
    return <> </>
}

export default ErrorMsg
