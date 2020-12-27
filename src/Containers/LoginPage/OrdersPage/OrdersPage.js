import React from 'react';
import classes from './OrdersPage.module.css';
import Axios from 'axios';
import OrdersList from '../../../Components/Header/OrdersList/OrdersList';
import { Link } from 'react-router-dom';
import { Header } from '../../../Components/Header/header';
import LogoImage from '../../../Assets/logo.png';


export function Orderspage(props) {   

    const [dataFetch, setdataFetch] = React.useState([]);
    const [newItem, setnewItem] = React.useState(true);
    const [packed, setpacked] = React.useState(true);
    const [transit, settransit] = React.useState(true);
    const [deliver, setdeliver] = React.useState(true);
    const [count, setcount] = React.useState(100);


    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders')
        .then((response) => {
            console.log(response.data);
            setdataFetch(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    

    const handleClick = () => {
        newItem === true ? setnewItem(false): setnewItem(true);
    } 

    return (
        <main className={classes.MainContainer}>
            <header>
                <div className={classes.TopbarLeftMenu}>
                   <div className={classes.TopbarLogo}>
                       <img src={LogoImage} alt="Logo" />
                       <p className={classes.TopbarBrand}>Kafene</p>
                   </div>

                   <nav>
                    <Link to='/orderspage'><a className={`${[classes.MenuItems, classes.Active].join(' ')}`}>Orders</a></Link>   
                    <Link to='/productspage'><a className={classes.MenuItems}>Products</a></Link>   
                    <Link to='/userspage'><a className={classes.MenuItems}>Users</a></Link>
                   </nav>
                </div>

                <Link to="/"><a className={classes.TopbarRightMenu}>Logout</a></Link>
            </header>
            <Link to="/orderdetailspage"><h3 className={classes.Linking}>To Orderdetails Page</h3></Link> 
          <div className={classes.HomepageWrapper}>
            <h1 className={classes.HomepageMainheading}>
                Orders
            </h1>
        <div className={classes.HomepageOrderWrapper}>
            <div className={classes.HomepageFilterWrapper}>
                <h3>Filters</h3>
                <div className={classes.HomepageFilterOptions}>
                    <p className={classes.Count}>Count: {count}</p>

                    <div className={classes.Newdiv} onClick={() => {handleClick()}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Newone} type="checkbox" name="orders-new" checked={newItem}/>New</div>
                    
                    <div className={classes.Newdiv} onClick={() => {packed === true ? setpacked(false): setpacked(true)}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Packedone} type="checkbox" name="orders-packed" checked={packed}/>Packed</div>
                    
                    <div className={classes.Newdiv} onClick={() => {transit === true ? settransit(false): settransit(true)}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Transitone} type="checkbox" name="orders-transit" checked={transit}/>InTransit</div>
                    
                    <div className={classes.Newdiv} onClick={() => {deliver === true ? setdeliver(false): setdeliver(true)}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Deliveredone}  type="checkbox" name="orders-delivered" checked={deliver}/>Delivered</div>
                </div>
            </div>
            

            <div className={classes.ContentWrapper}>
                <table className={classes.HomepageOrderTable}>
                    <tr><th>ID</th><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>
                    <tbody className={classes.Data}>
        
                        {
                            dataFetch.map((item) => {
                                // console.log("yes")
                                if(item.orderStatus == "New"){
                                   
                                    if (newItem){                                      
                                        return <OrdersList key={item.id} id={item.id} 
                                        name={item.customerName} date={item.orderDate} time={item.orderTime} amount={item.amount}
                                        status={item.orderStatus} />
                                    }
                                    }else if(item.orderStatus == "Packed"){
                                        if (packed){                                      
                                            return <OrdersList key={item.id} id={item.id} 
                                            name={item.customerName} date={item.orderDate} time={item.orderTime} amount={item.amount}
                                            status={item.orderStatus} />
                                        }
                                    }else if(item.orderStatus == "InTransit"){
                                        if (transit){                                      
                                            return <OrdersList key={item.id} id={item.id} 
                                            name={item.customerName} date={item.orderDate} time={item.orderTime} amount={item.amount}
                                            status={item.orderStatus} />
                                        }
                                    }else if(item.orderStatus == "Delivered"){
                                        if (deliver){                                      
                                            return <OrdersList key={item.id} id={item.id} 
                                            name={item.customerName} date={item.orderDate} time={item.orderTime} amount={item.amount}
                                            status={item.orderStatus} />
                                        }
                                    }
                                
                                
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
