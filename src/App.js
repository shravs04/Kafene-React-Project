import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/header';
import { BrowserRouter, Route} from 'react-router-dom';
import { Orderspage } from './Containers/LoginPage/OrdersPage/OrdersPage';
import { Productspage } from './Containers/LoginPage/ProductsPage/ProductsPage';
import { Userspage } from './Containers/LoginPage/UsersPage/UsersPage';
import { Orderdetailspage } from './Containers/LoginPage/OrderDetailsPage/OrderDetailsPage';
import { Productdetailspage } from './Containers/LoginPage/ProductDetailsPage/ProductDetailsPage';
import Loginpage from './Containers/LoginPage/loginPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          {/* <Loginpage/> */}
          <Route exact path='/' component={Loginpage} />
          <Route exact path='/orderspage' component={Orderspage} />
          <Route exact path='/productspage' component={Productspage} />
          <Route exact path='/userspage' component={Userspage} />
          <Route exact path='/orderdetailspage' component={Orderdetailspage} />
          <Route exact path='/productdetailspage' component={Productdetailspage} />
          
      </div>
    </BrowserRouter>
  );
}

export default App;