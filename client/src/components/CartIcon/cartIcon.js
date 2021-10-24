import './cartIcon.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartProductCount } from '../../Utils/cartSelector'
// import {} from '../../actions/cartAction'


function CartIcon ({productCount}) {
    return (
        <div>
            
            <Link to='./checkout'>
                <FaShoppingCart className="icon--cart" />
            </Link>
            <span className='icon--number'>{productCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    productCount: selectCartProductCount
});

export default connect(mapStateToProps)(CartIcon);