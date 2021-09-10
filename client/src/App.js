import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import CheckOut from './components/Checkout/Checkout';
import NavBar from './components/Nav/navbar';
import Shop from './containers/Shop/Shop'; 
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp'
import Home from './containers/Home/Home';
import Blog from './components/Blog/Blog'
import SideNav from './components/SideNavbar/SideNavbar';


function App () {
  
  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideNav />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ SignIn } />
          <Route path='/sign-up' component={ SignUp } />
          <Route path='/shop' component={ Shop } />
          <Route path='/checkout' component={ CheckOut } />
          <Route path='/blog' component={ Blog } />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
