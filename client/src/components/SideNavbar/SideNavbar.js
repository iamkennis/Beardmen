import { FaTimes,FaGripLines} from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
import { IconContext } from 'react-icons'
import {connect} from 'react-redux'
import './SideNavbar.css'
import NavData from '../NavData/NavData'
import CartIcon from '../CartIcon/carticon'
import {toggleMenu} from '../../redux/cartRedux/cart.action'


function SideNav ({toggleMenu, hidden}){
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
                    <div className="shop--cart">
                        <CartIcon />
                    </div>
                     
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