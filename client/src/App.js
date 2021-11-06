import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import {Link} from 'react-router-dom'
import './App.css';
import CheckOut from './layout/Checkout/Checkout';
import NavBar from './components/Nav/navBar';
import Shop from './pages/Shop/Shop'; 
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp'
import Home from './pages/Home/Home';
import SideNav from './components/SideNavbar/sideNavbar';
import Product from './layout/Product/Product';


function App () {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideNav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/login' component={SignIn}/>
          <Route path='/shop' component={ Shop } />
          <Route path='/product/:id' component={ Product } />
          <Route path='/checkout' component={ CheckOut } />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
