import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom'
import './App.css';
import CheckOut from './layout/Checkout/Checkout';
// import NavBar from './components/NavBar/navBar';
import Shop from './pages/Shop/Shop'; 
// import Footer from './layout/Footer/Footer'
import SignIn from './pages/SignIn/signIn';
import SignUp from './pages/SignUp/signUp'
import Home from './pages/Home/Home';
import Product from './layout/Product/Product';
import AppLayout from './layout/AppLayout/appLayout';


function App () {

  return (
		<Router>
			<div className='App'>
				<AppLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/signup' component={SignUp} />
						<Route path='/login' component={SignIn} />
						<Route path='/shop' component={Shop} />
						<Route path='/product/:id' component={Product} />
						<Route path='/checkout' component={CheckOut} />
					</Switch>
				</AppLayout>
			</div>
		</Router>
	);
}



export default App;
