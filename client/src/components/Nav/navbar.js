import {NavLink} from 'react-router-dom'
import './navbar.css'
import NavData from '../NavData/NavData'
import CartIcon from '../CartIcon/carticon'
// import CartBox from '../CartBox/CartBox';
// import {connect} from 'react-redux'

function NavBar (){
    return (
        <>
        <nav className='nav'>
           
             <h5 className='logo'>BeardMen</h5>
            <section className='nav--links'>
                { NavData.map( ( item, index) =>
                {
                    return (
                       
                            <NavLink key={index} to={ item.path } className='nav--link'>
                                <span>{ item.title }</span>
                            </NavLink>
                                  
                    )
                      })}

                   
            </section>
                <CartIcon />   
            </nav>
            {/* { hidden ? null : <CartBox/>
            } */}
            </>
    );
}

//    const mapStateToProps = ({ menu:{hidden}}) => ({
//       hidden
//   })

export default NavBar;