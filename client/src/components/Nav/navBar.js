import {NavLink} from 'react-router-dom'
import './navBar.css'
import NavData from '../NavData/navData'
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
  const { userDetails} = user
    return (
        <>
             {/* <h5 className='logo'>BeardMen</h5> */}
        <nav className='nav'>
           
            
                <section className='nav--links'>
                    
                { NavData.map( ( item, index) =>
                {
                    return (
                       
                            <NavLink key={index} to={ item.path } className='nav--link'>
                                <span>{ item.title }</span>
                            </NavLink>
                                  
                    )
                }) }
                    
                    { userDetails ? (<NavLink to='#signout' onClick={signoutHandler} className='nav--link'>Sign Out</NavLink>) :
                        (<NavLink to='/signup' className='nav--link'>Sign Up</NavLink>) }
                    
                    { userDetails ? (<NavLink to='#' className='nav--link'>{userDetails.name}</NavLink>) :
                             (<NavLink to='/login' className='nav--link'>Sign In</NavLink>)
                    }
                    
                     
                </section>
                <div className='icon-shop'>
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