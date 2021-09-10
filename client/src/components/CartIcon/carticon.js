import './carticon.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import { selectCartProductCount } from '../../redux/cartRedux/cart.selector'

function CartIcon ({productCount}) {
    return (
        <div>
            
            <Link to='./checkout'>
                <FaShoppingCart className="icon--cart" />
            </Link>
                <span className='icon--number'>{ productCount }</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productCount: selectCartProductCount(state)
    
})

export default connect(mapStateToProps)(CartIcon);