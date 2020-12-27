import React from 'react';
import classes from './ProductsPage.module.css';
import Axios from 'axios';
import ProductsList from '../../../Components/Header/ProductsList/ProductsList';
import { Link } from 'react-router-dom';


export function Productspage(props) {

    const [dataFetch, setdataFetch] = React.useState([]);
    const [expire, setexpire] = React.useState(true);
    const [stock, setstock] = React.useState(true);

    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products')
        .then((response) => {
            console.log(response.data);
            setdataFetch(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    
    
    return (

        <main className={classes.MainContainer}>
             <Link to="/productdetailspage"><h3 className={classes.Linking}>To Productdetails Page</h3></Link>   
          <div className={classes.HomepageWrapper}>
            <h1 className={classes.HomepageMainheading}>
                Products
            </h1>
        <div className={classes.HomepageOrderWrapper}>
            <div className={classes.HomepageFilterWrapper}>
                <h3>Filters</h3>
                <div className={classes.HomepageFilterOptions}>
                    <p className={classes.Count}>Count: 100</p>

                    <div className={classes.Newdiv} onClick={() => {expire === true ? setexpire(false): setexpire(true)}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Packedone} type="checkbox" name="orders-packed" checked={expire}/>Expired</div>
                    
                    <div className={classes.Newdiv} onClick={() => {stock === true ? setstock(false): setstock(true)}}>
                    {/* <label className={classes.HomepageFilterCheckbox}> */}
                    <input className={classes.Packedone} type="checkbox" name="orders-packed" checked={stock}/>Low Stock</div>
                    {/* <label className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Transitone} type="checkbox" name="orders-transit"/>InTransit</label>
                    <label className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Deliveredone}  type="checkbox" name="orders-delivered"/>Delivered</label> */}
                </div>
            </div>
            

            <div className={classes.ContentWrapper}>
                <table className={classes.HomepageOrderTable}>
                    <tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>
                    <tbody className={classes.Data}>
        
                        {
                            dataFetch.map((item) => {
                                let givenDate = item.expiryDate;
                                const currentDate = new Date();
                                givenDate = new Date(givenDate);
                                if(givenDate < currentDate){
                                    if(expire){
                                        return <ProductsList key={item.id} id={item.id} 
                                        name={item.medicineName} brand={item.medicineBrand} date={item.expiryDate} amount={item.unitPrice}
                                        stock={item.stock}/>
                                    }
                                }else if(item.stock < 100){
                                    if(stock){
                                        return <ProductsList key={item.id} id={item.id} 
                                        name={item.medicineName} brand={item.medicineBrand} date={item.expiryDate} amount={item.unitPrice}
                                        stock={item.stock}/>
                                    }
                                }
                               
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
            

        </div>
        </div>
    </main>
    )
}
