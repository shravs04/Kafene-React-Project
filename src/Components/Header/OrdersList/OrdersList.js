import React from 'react';
import classes from './Orderlist.module.css';


function OrdersList(props) {

    // const [id, name, date, time, amount, status] = props
    
    return (
        <tr className={classes.Row}>         
            <td className={classes.GreyText}>{props.id}</td>
                <td>{props.name}</td>
                <td>
                    <p>{props.date}</p>
                     <br/>
                    <p className={classes.GreyText}>{props.time}</p>
                 </td>
                <td className={classes.GreyText}>${props.amount}</td>
            <td>{props.status}</td>
            
        </tr>
    )
}

export default OrdersList;