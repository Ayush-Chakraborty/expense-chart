import React, { useState } from 'react'
import './login.css'
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Button from '../UI/Button';
import ErrorMsg from '../Expense/ErrorMsg'
import { useRef } from 'react';
function Login({onLog}) {
    const [warningMsg,setWarningMsg]=useState('');
    const emailRef=useRef();
    const passwordRef=useRef();
    const fetchMovies=()=>{
        fetch("https://swapi.dev/api/films").then(
            res => res.json()
        ).then(
            data=>{
                console.log(data);
            }
        )
    }
    return (
        <div className="login" >
            <div className="login__card" >
                <div className="login__title">
                    LOG IN
                </div>
                <form className="login__form">
                    <ErrorMsg msg={warningMsg} className="login__error"/>
                    <label htmlFor="login__email">
                        <PersonIcon/>
                        <input type="email"  id="login__email" placeholder="Email" ref={emailRef}/>
                    </label>
                    <label htmlFor="login__password">
                        <LockIcon/>
                        <input type="password" name="" id="login__password" placeholder="Password" ref={passwordRef} />
                    </label>
                    <div className="login__forgot_pass">
                        <a href="#"> Forgot password?</a>
                        <a href="#"> Sign up</a>
                    </div>
                    <Button type="submit" className="login__btn" onClick={(e)=>{
                        e.preventDefault();
                        const enteredEmail=emailRef.current.value;
                        const enteredPassword=passwordRef.current.value;
                        console.log(enteredEmail);
                        const x=enteredEmail.search('@');
                        if(x=== -1){
                            setWarningMsg("Invalid Email");
                            return;
                        }
                        const len=enteredPassword.trim().length;
                        if(len<6){
                            setWarningMsg("Password should be atleast 6 characters long");
                            return;
                        }
                        setWarningMsg('');
                        onLog(true);
                    }} >
                        Log In
                    </Button>
                </form>
            </div>
            <button onClick={fetchMovies} >fatch</button>
        </div>
    )
}

export default Login
