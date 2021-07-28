import React from "react";
import "./newExpense.css";
import { useRef, useEffect } from "react";
import Button from "../UI/Button";
function NewExpense({ onAdd ,edit}) {
    const today= new Date().toISOString().substr(0,10);
    // const [date, setDate] = useState(today);
    const dateRef=useRef();
    const titleRef = useRef();
    const amountRef = useRef();
    useEffect(()=>{
        dateRef.current.value=today;
    },[]);
    if(edit){
        titleRef.current.value=edit.title;
        amountRef.current.value=edit.price;
        const date=edit.date;
        let m=date.month+1;
        if(m<10)
        m="0"+m;
        let d=date.day;
        if(d<10)
        d="0"+d;
        dateRef.current.value=`${date.year}-${m}-${d}`;
        // edit=null;
    }
    return (
        <form className="newExpense">
            <div className="newExpense__section">
                <label htmlFor="title">Title</label>
                <br />
                <input
                    type="text"
                    id="title"
                    ref={titleRef}
                />
            </div>
            <div className="newExpense__section">
                <label htmlFor="amount">Amount</label>
                <br />
                <input
                    type="number"
                    min="0"
                    id="amount"
                    ref={amountRef}
                />
            </div>
            <div className="newExpense__section">
                <label htmlFor="date">Date</label>
                <br />
                <input
                    type="date"
                    id="date"
                    onChange={(e) => {
                        dateRef.current.value=e.target.value;
                    }}
                    ref={dateRef}
                />
            </div>
            <div className="newExpense__section">
                <Button
                    className="newExpense_btn"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        const title=titleRef.current.value;
                        const amount=amountRef.current.value;
                        if(!amount || !title || !dateRef.current.value){
                            onAdd(null);
                            return;
                        }
                        
                        const key = Date.now();
                        const _date = {
                            year: parseInt(dateRef.current.value),
                            month: parseInt(dateRef.current.value.substr(5, 2))-1,
                            day: parseInt(dateRef.current.value.substr(8, 2)),
                        };
                        onAdd({ key, title, price: amount, date: _date });
                        titleRef.current.value="";
                        amountRef.current.value="";
                        dateRef.current.value=today;
                    }}
                >
                    Add Expense
                </Button>
            </div>
        </form>
    );
}

export default NewExpense;
