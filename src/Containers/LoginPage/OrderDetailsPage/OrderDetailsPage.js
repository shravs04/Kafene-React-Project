import React from 'react';
import classes from './OrderDetailsPage.module.css';
import Axios from 'axios';
import OrdersList from '../../../Components/Header/OrdersList/OrdersList';


export function Orderdetailspage(props) {

    const [dataFetch, setdataFetch] = React.useState({});

    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders/714-69-5617')
        .then((response) => {
            console.log(response.data);
            setdataFetch(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    

    return (
        <div className={classes.Wrapper}>
            <h1 className={classes.Heading}>Order Details</h1>
            
            <div className={classes.ContentWrapper}>
                <table className={classes.HomepageOrderTable}>
                    <tr><th>ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                    <tbody className={classes.Data}>
                                
                        <tr className={classes.Row}>         
                            <td className={classes.GreyText}>{dataFetch.id}</td>
                            <td>{dataFetch.customerName}</td>
                            <td>
                                <p>{dataFetch.orderDate}</p>
                                <br/>
                                <p className={classes.GreyText}>{dataFetch.orderTime}</p>
                            </td>
                            <td className={classes.GreyText}>${dataFetch.amount}</td>
                            <td>{dataFetch.orderStatus}</td>
                        </tr>
                                                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}
