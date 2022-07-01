import {NavLink} from 'react-router-dom'
import './navBar.css'
import NavData from './navData'
import CartIcon from '../CartIcon/cartIcon'
// import CartBox from '../CartBox/CartBox';
import {useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../actions/userAction'



function NavBar () {

    const dispatch = useDispatch()

    function signoutHandler () {
        dispatch(signOutUser())
    }
    
     const user = useSelector((state) => state.user)
    const { users, token } = user
    return (
			<>
				{/* <h5 className='logo'>BeardMen</h5> */}
				<nav className='container-fluid nav'>
					<section className='nav__links'>
						{NavData.map((item, index) => {
							return (
								<NavLink key={index} to={item.path} className='nav__link'>
									<span>{item.title}</span>
								</NavLink>
							);
						})}

						{token ? (
							<NavLink
								to='#signout'
								onClick={signoutHandler}
								className='nav__link'>
								Sign Out
							</NavLink>
						) : (
							<NavLink to='/signup' className='nav__link'>
								Sign Up
							</NavLink>
						)}

						{token ? (
							<NavLink to='#' className='nav__link'>
								{users?.name?.toUpperCase()}
							</NavLink>
						) : (
							<NavLink to='/login' className='nav__link'>
								Sign In
							</NavLink>
						)}
					</section>
					<div className='icon__shop'>
						<CartIcon />
					</div>
				</nav>
			</>
		);
}

//    const mapStateToProps = ({ menu:{hidden}}) => ({
//       hidden
//   })

export default NavBar;