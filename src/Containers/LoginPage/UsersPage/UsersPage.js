import React from 'react';
import UsersList from '../../../Components/Header/UsersList/UsersList';
import './UsersPage.css';
import Axios from 'axios';

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
