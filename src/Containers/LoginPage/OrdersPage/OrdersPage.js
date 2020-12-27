import React from 'react';
import classes from './OrdersPage.module.css';
import Axios from 'axios';
import OrdersList from '../../../Components/Header/OrdersList/OrdersList';
import { Link } from 'react-router-dom';


export function Orderspage(props) {   

    const [dataFetch, setdataFetch] = React.useState([]);
    const [newItem, setnewItem] = React.useState(true);
    const [packed, setpacked] = React.useState(true);
    const [transit, settransit] = React.useState(true);
    const [deliver, setdeliver] = React.useState(true);

    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
        .then((response) => {
            console.log(response.data);
            setdataFetch(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [dataFetch])
    

    // const handleClick = () => {
    //     setcheck(!false);
    // } 

    return (
        <main className={classes.MainContainer}>
            <Link to="/orderdetailspage"><h3 className={classes.Linking}>To Orderdetails Page</h3></Link> 
          <div className={classes.HomepageWrapper}>
            <h1 className={classes.HomepageMainheading}>
                Orders
            </h1>
        <div className={classes.HomepageOrderWrapper}>
            <div className={classes.HomepageFilterWrapper}>
                <h3>Filters</h3>
                <div className={classes.HomepageFilterOptions}>
                    <p className={classes.Count}>Count: 100</p>
                    <label onClick={() => {newItem === true ? setnewItem(false): setnewItem(true)}} className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Newone} type="checkbox" name="orders-new" checked={true}/>New</label>
                    <label onClick={() => {setpacked(packed ? true:false)}} className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Packedone} type="checkbox" name="orders-packed" value={packed}/>Packed</label>
                    <label onClick={() => {settransit(transit ? true:false)}} className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Transitone} type="checkbox" name="orders-transit" value={transit}/>InTransit</label>
                    <label onClick={() => {setdeliver(deliver ? true:false)}} className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Deliveredone}  type="checkbox" name="orders-delivered" value={deliver}/>Delivered</label>
                </div>
            </div>
            

            <div className={classes.ContentWrapper}>
                <table className={classes.HomepageOrderTable}>
                    <tr><th>ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                    <tbody className={classes.Data}>
        
                        {
                            dataFetch.map((item) => {
                                return <OrdersList key={item.id} id={item.id} 
                                name={item.customerName} date={item.orderDate} time={item.orderTime} amount={item.amount}
                                status={item.orderStatus}/>
                            })
                        }
                        {/* <tr className={classes.Row}>
                            <td className={classes.GreyText}>156468431</td>
                            <td>Shravan Kumar</td>
                            <td>12 Mar 2017
                                <br/>
                                <p className={classes.GreyText}>3:14 PM</p>
                            </td>
                            <td className={classes.GreyText}>$518.23</td>
                            <td>New</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            

        </div>
        </div>
    </main>
    )
}
