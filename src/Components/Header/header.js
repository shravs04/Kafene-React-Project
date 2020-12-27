import React from 'react';
import classes from './header.module.css';
import LogoImage from '../../Assets/logo.png';
import { Link } from 'react-router-dom';


export function Header(props) {
    
    const [path, setPath] = React.useState();

    return (
        
        <div>
            <header>
                <div className={classes.TopbarLeftMenu}>
                   <div className={classes.TopbarLogo}>
                       <img src={LogoImage} alt="Logo" />
                       <p className={classes.TopbarBrand}>Kafene</p>
                   </div>

                   <nav>
                    <Link to='/orderspage'><a className={classes.MenuItems}>Orders</a></Link>   
                    <Link to='/productspage'><a className={classes.MenuItems}>Products</a></Link>   
                    <Link to='/userspage'><a className={classes.MenuItems}>Users</a></Link>
                   </nav>
                </div>

                <Link to="/"><a className={classes.TopbarRightMenu}>Logout</a></Link>
            </header>
        </div>
    //     <div>
    //     <header>
    //         <div className={classes.TopbarLeftMenu}>
    //             <div className={classes.TopbarLogo}>
    //                 <img src={LogoImage} alt="Logo" />
    //                 <p className={classes.TopbarBrand}>Kafene</p>
    //             </div>

    //             <nav>
    //                 <Link to='/orderspage'><a className={window.location.pathname.split("/")[1] === "orderspage" ? classes.Active: classes.MenuItems}>Orders</a></Link>
    //                 <Link to='/productspage'><a className={window.location.pathname.split("/")[2] === "productspage" ? classes.Active: classes.MenuItems}>Products</a></Link>
    //                 <Link to='/userspage'><a className={window.location.pathname.split("/")[3] === "userspage" ? classes.Active: classes.MenuItems}>Users</a></Link>
    //             </nav>
    //         </div>

    //         <Link to="/"><a className={classes.TopbarRightMenu}>Logout</a></Link>
    //     </header>
    // </div>

    )
}
