import React from 'react'
import Card from '../UI/Card'
import './expenseItem.css'
import ItemEdit from './itemEdit';
function ExpenseItem({id,date,title,price,onDelete,onEdit}) {
    let suffix;
    let last=parseInt(date.day)%10;
    if(last===1) suffix="st";
    else if(last===2) suffix="nd";
    else if(last===3) suffix="rd";
    else suffix="th";
    if(parseInt(date.day)>=10 && parseInt(date.day)<=20)
    suffix="th";
    const monthList=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const year=date.year.toString();
    const day=date.day.toString();
    const month=monthList[date.month];
    return (
        <div className="item_wrapper">
        <Card className="item_bundle" >
            <div className="item date">
                <div className="month" >{month}</div>
                <div className="day" >
                    {day}
                    {suffix}
                </div>
                <div className="year">{year}</div>
            </div>
            <div className="item title" >{title}</div>
            <div className="item price" >{`Rs. ${price}`}</div>
        </Card>
        <ItemEdit className="item_edit"  delete={onDelete} id={id} onEdit={onEdit}/>
        </div>
    )
}

export default ExpenseItem
