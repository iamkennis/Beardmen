import {NavLink} from 'react-router-dom'
import './navBar.css'
import NavData from '../NavData/navData'
import CartIcon from '../CartIcon/cartIcon'
// import CartBox from '../CartBox/CartBox';
// import {connect} from 'react-redux'

function NavBar (){
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
                      })}

                   
                </section>
                <div className='icon-shop'>
                 <CartIcon />   
                </div>
                
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