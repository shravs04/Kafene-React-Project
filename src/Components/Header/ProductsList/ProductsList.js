import React from 'react';
import classes from './ProductsList.module.css';


function ProductsList(props) {

    // const [id, name, date, time, amount, status] = props
    
    return (
        <tr className={classes.Row}>         
            <td className={classes.GreyText}>{props.id}</td>
                <td>{props.name}</td>
                <td className={classes.GreyText}>{props.brand}</td>
                <td>{props.date}</td>
            <td className={classes.GreyText}>${props.amount}</td>
            <td className={classes.GreyText}>{props.stock}</td>
            
        </tr>
    )
}

export default ProductsList;