import { FaTimes,FaGripLines} from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
import { IconContext } from 'react-icons'
import {connect} from 'react-redux'
import './sideNavbar.css'
import NavData from '../NavData/navData'
import {useDispatch, useSelector } from 'react-redux'
// import CartIcon from '../CartIcon/cartIcon'
import { signOutUser } from '../../actions/userAction'
import {toggleMenu} from '../../actions/cartAction'


function SideNav ({ toggleMenu, hidden }) {
    const dispatch = useDispatch()

    function signoutHandler () {
        dispatch(signOutUser())
    }
    
     const user = useSelector((state) => state.user)
  const { userDetails} = user
    return (
        <>
            
            <FaGripLines className="side-nav--icon-bar" onClick={toggleMenu} />
           
           
            { hidden ? null : <nav className='side--navbar'>
        
                <IconContext.Provider value={ { className: "side-nav--icon-times" } }>
                    <FaTimes onClick={ toggleMenu } />
                </IconContext.Provider>
                <section className='side-nav--links' onClick={ toggleMenu } >
                    { NavData.map((item, index) => {
                        return (
                    
                            <NavLink key={ index } to={ item.path } className='side-nav--link'>
                                <span>{ item.title }</span>
                            </NavLink>
                       
                        )
                    }) }
                    { userDetails ? (<NavLink to='#signout' onClick={signoutHandler} className='side-nav--link'>Sign Out</NavLink>) :
                        (<NavLink to='/signup' className='side-nav--link'>Sign Up</NavLink>) }
                    
                    { userDetails ? (<NavLink to='#' className='side-nav--link'>{userDetails.name}</NavLink>) :
                             (<NavLink to='/login' className='side-nav--link'>Sign In</NavLink>)
                    }
                    
                </section>
               
            </nav>}
        </>
    );
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
})

const mapStateToProps = ({ cart: {hidden}}) => ({
  hidden
})
 
export default connect(mapStateToProps,mapDispatchToProps)(SideNav);