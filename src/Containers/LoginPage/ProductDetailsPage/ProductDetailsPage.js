import React from 'react';
import classes from './ProductDetailsPage.module.css';
import Axios from 'axios';
import OrdersList from '../../../Components/Header/OrdersList/OrdersList';



export function Productdetailspage(props) {

    const [dataFetch, setdataFetch] = React.useState({});

    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products/56104-020')
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
           
            <h1 className={classes.Heading}>Product Details</h1>
            
            <div className={classes.ContentWrapper}>
                <table className={classes.HomepageOrderTable}>
                    <tr><th>ID</th><th>Product Name</th><th>Product Brand</th><th>Expiry Date</th><th>Unit Price</th><th>Stock</th></tr>
                    <tbody className={classes.Data}>
        
                    <tr className={classes.Row}>         
                        <td className={classes.GreyText}>{dataFetch.id}</td>
                        <td>{dataFetch.medicineName}</td>
                        <td className={classes.GreyText}>{dataFetch.medicineBrand}</td>
                        <td>{dataFetch.expiryDate}</td>
                        <td className={classes.GreyText}>${dataFetch.unitPrice}</td>
                        <td className={classes.GreyText}>{dataFetch.stock}</td>
                    </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

