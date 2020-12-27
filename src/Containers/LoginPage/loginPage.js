import React from 'react';
import classes from './loginPage.module.css';
import { Link } from 'react-router-dom';
import LogoImage from '../../Assets/logo.png';
import { Postdata } from '../../Utils/Postdata';
import Axios from 'axios';


class Loginpage extends React.Component{

    // state = {
    //     loginStatus: false
    // }


    LoginSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);   
        console.log(e.target.password.value);  

        const userName = e.target.username.value;
        const passWord = e.target.password.value;

        if(userName === passWord){
            const Data = {
                userName: userName,
                passWord: passWord
            }
            Axios.post('https://5eea6936b13d0a00164e48aa.mockapi.io/login', Data)
            .then((response) => {
                alert("Login Successful");
                // this.setState({loginStatus: true});
                this.props.history.push('/Orderspage');
            })
            .catch((error) => {
                console.log("Something is Wrong");
            })

        } else {
           alert("Please enter valid Credentials!!")
        }
    }

    render(){
        return (
            <div className={classes.MainContainer}>
    
                <header>
                    <div className={classes.TopbarLeftMenu}>
                       <div className={classes.TopbarLogo}>
                           <img src={LogoImage} alt="Logo" />
                           <p className={classes.TopbarBrand}>Kafene</p>
                       </div>
    
                       <nav>
                        <Link to='/'><a className={classes.MenuItems}>Orders</a></Link>   
                        <Link to='/'><a className={classes.MenuItems}>Products</a></Link>   
                        <Link to='/'><a className={classes.MenuItems}>Users</a></Link>
                       </nav>
                    </div>
    
                    {/* <Link to="/"><a className={classes.TopbarRightMenu}>Logout</a></Link> */}
                </header>
    
                <form onSubmit={this.LoginSubmit} className={classes.LoginForm}>
                    <h1>Sign In</h1>
                    <input className={classes.LoginInput} type="text" name="username" placeholder="Enter Username" />
                    <input className={classes.LoginInput} type="password" name="password" placeholder="Enter Password" />
                    <input className={classes.LoginBtn} type="submit" value="Login" />
                </form>
    
            </div>
        )
    }

    
}

export default Loginpage;
