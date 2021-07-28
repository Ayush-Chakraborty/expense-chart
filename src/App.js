import './App.css';
import ExpenseList from './Expense/ExpenseList';
// import Loading from './Loading/Loading';
// import Login from './Login/Login';
import Topbar from './Topbar/Topbar';
// import { useState } from 'react';
// import { useEffect } from 'react';
function App() {
  // const [loggedIn,setLoggedIn]=useState(null);
  const loggedIn=true;
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(localStorage.getItem('loggedIn'))
  //     setLoggedIn(true);
  //     else setLoggedIn(false);

  //   },1000);
  // },[])
  return (
    <div className="App">
      {/* {(loggedIn===null) && <Loading/>} */}
      { !(loggedIn===null) && loggedIn && <Topbar/>}
       {/* onLogOut={()=>{
      setLoggedIn(false);
      }} />} */}
      { !(loggedIn===null) && loggedIn && <ExpenseList />}
      {/* { !(loggedIn===null) &&  !loggedIn && <Login onLog={(res)=>{
        if(res){
          setLoggedIn(true);
          localStorage.setItem('loggedIn',true);
        } */}
      {/* }}/>} */}
    </div>
  );
}

export default App;
