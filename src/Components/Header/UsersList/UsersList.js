import React from 'react';
import classes from './UsersList.module.css';


function UsersList(props) {

    // const [id, name, date, time, amount, status] = props
    
    return (
        <tr className={classes.Row}>         
            <td className={classes.GreyText}>{props.id}</td>
                <td><img src={props.imagePic}/></td>
                <td className={classes.GreyText}>{props.name}</td>
                <td>{props.date}</td>
            <td className={classes.GreyText}>{props.gender}</td>
            <td className={classes.GreyText}>{props.city}, <span>{props.country}</span></td>
            
        </tr>
    )
}

export default UsersList;