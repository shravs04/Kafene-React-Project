import React from 'react';
import classes from './ProductsPage.module.css';
import Axios from 'axios';
import ProductsList from '../../../Components/Header/ProductsList/ProductsList';
import { Link } from 'react-router-dom';


export function Productspage(props) {

    const [dataFetch, setdataFetch] = React.useState([]);

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
                    <label className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Newone} type="checkbox" name="orders-new"/>Expired</label>
                    <label className={classes.HomepageFilterCheckbox}>
                    <input className={classes.Packedone} type="checkbox" name="orders-packed"/>Low Stock</label>
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
                                return <ProductsList key={item.id} id={item.id} 
                                name={item.medicineName} brand={item.medicineBrand} date={item.expiryDate} amount={item.unitPrice}
                                stock={item.stock}/>
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