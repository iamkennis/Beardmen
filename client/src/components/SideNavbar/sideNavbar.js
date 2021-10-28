import { FaTimes,FaGripLines} from 'react-icons/fa'
import { NavLink} from 'react-router-dom'
import { IconContext } from 'react-icons'
import {connect} from 'react-redux'
import './sideNavbar.css'
import NavData from '../NavData/navData'
// import CartIcon from '../CartIcon/cartIcon'
import {toggleMenu} from '../../actions/cartAction'


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
                    {/* <div className="shop--cart">
                        <CartIcon />
                    </div>
                      */}
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