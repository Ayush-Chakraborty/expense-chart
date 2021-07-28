import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import NewExpense from '../NewExpense/NewExpense'
import ErrorMsg from './ErrorMsg'
import { useState } from 'react'
import Total from './Total'
import './expenseList.css'
function ExpenseList() {
  const [list,setList]=useState([]);
  const [msg,setMsg]=useState("");
  const [total,setTotal]=useState(0);
  const [edit,setEdit]=useState(null);
    return (
        <Card className="list" >
            <ErrorMsg msg={msg}/>
            <NewExpense onAdd={(newExpense)=>{
                if(!newExpense){
                    setMsg("Invalid Input");
                    return;
                }
                setMsg("");
                setList((prev)=>{
                    if(!edit){
                        let newTotal=0;
                        for(let i of prev){
                                newTotal+=parseInt(i.price);
                        }
                        newTotal+=parseInt(newExpense.price);
                        setTotal(newTotal);
                        return [...prev,newExpense];
                    }
                    const newList=[];
                    let newTotal=0;
                    for(let item of prev){
                        if(item.key===edit.key){
                            newList.push(newExpense);
                            newTotal+=parseInt(newExpense.price);
                        }
                        else {
                            newList.push(item);
                            newTotal+=parseInt(item.price);
                        }
                    }
                    setTotal(newTotal);
                    return newList;
                });
                setEdit(null);
            }}
            edit={edit}
            />
            {list.map(({key,date,title,price})=>
                <ExpenseItem key={key} date={date} title={title} price={price} id={key} onDelete={(key)=>{
                    setList((prev)=>{
                        let newTotal=0;
                        const newList=[];
                        for(let i of prev){
                            if(i.key!==key){
                                newList.push(i);
                                newTotal+=parseInt(i.price);
                            }
                        }
                        setTotal(newTotal);
                        return newList;
                    })
                }}
                onEdit={(key)=>{
                    for(let item of list){
                        if(item.key===key){
                            setEdit(item);
                            break;
                        }
                    }
                }}/>
            )}
            <Total val={total}/>
        </Card>
    )
}

export default ExpenseList
