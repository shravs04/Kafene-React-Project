import React from 'react';
import UsersList from '../../../Components/Header/UsersList/UsersList';
import './UsersPage.css';
import Axios from 'axios';
import { Header } from '../../../Components/Header/header';
import LogoImage from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';

export function Userspage(props) {  

    const [dataFetch, setdataFetch] = React.useState([]);
    const [change, setChange] = React.useState('');

    React.useEffect(() => {
        Axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users')
        .then((response) => {
            console.log(response.data);
            setdataFetch(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <main class="main-container">
           <header>
                <div class="topbar-left">
                   <div class="topbar-logo">
                       <img src={LogoImage} alt="Logo" />
                       <p class="topbar-brand">Kafene</p>
                   </div>

                   <nav>
                    <Link to='/orderspage'><a class="menu-items">Orders</a></Link>   
                    <Link to='/productspage'><a class="menu-items">Products</a></Link>   
                    <Link to='/userspage'><a class="menu-items active">Users</a></Link>
                   </nav>
                </div>

                <Link to="/"><a class="topbar-right">Logout</a></Link>
            </header>
        <div class="user-list-pageWrapper">
            <h1 class="user-list-mainHeading">Users</h1>
            <div class="user-list-order-wrapper">
                
                <form class="user-list-filterWrapper">
                    <input onChange={(e) => {setChange(e.target.value)}} class="user-list-search-box" type="text" id="myInput"  placeholder="Search by Name" />
                    <input onClick={() => {setChange('')}} type="reset" id="null-btn" class="user-list-button" value="Reset" />
                </form>
                
                
                <div>
                    <table class="user-list">
                        <tr class="new"><th>ID</th><th>User Avatar</th><th>Full Name</th><th>DoB</th><th>Gender</th><th>Current Location</th></tr>
                        <tbody class="data-user">
                                                     
                        {
                            dataFetch.map((item) => {
                                if(change.length == 0){
                                    return <UsersList key={item.id} id={item.id} 
                                    imagePic={item.profilePic} name={item.fullName} date={item.dob} gender={item.gender}
                                    city={item.currentCity} country={item.currentCountry}/>
                                } 
                                else{
                                   if(item.fullName.toLowerCase().startsWith(change.toLowerCase())){
                                    return <UsersList key={item.id} id={item.id} 
                                    imagePic={item.profilePic} name={item.fullName} date={item.dob} gender={item.gender}
                                    city={item.currentCity} country={item.currentCountry}/>
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
