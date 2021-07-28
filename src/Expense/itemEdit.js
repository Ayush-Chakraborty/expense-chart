import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import './itemEdit.css'
function ItemEdit(props) {
    const cls=props.className;
    return (
        <div className={`${cls}`} >
           <button className="item_edit__btn">
               <EditIcon onClick={()=>{
                   props.onEdit(props.id);
               }} />
           </button>
           <button className="item_edit__btn" onClick={()=>{props.delete(props.id)}}>
               <DeleteForeverIcon/>
           </button>
        </div>
    )   
}

export default ItemEdit
