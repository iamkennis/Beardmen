import './Checkout.css'
import Cart from '../../layout/Cart/Cart'
import { connect ,useSelector} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartProducts,selectCartTotal } from '../../Utils/cartSelector';
import {Redirect } from 'react-router-dom'


function CheckOut ({cartProducts, total,product}) {
const user = useSelector((state) => state.user)
  const { userDetails} = user
    return (  
      <section className="checkout">
        <div className="checkout--text">
          <h1 className="checkout--h1">Your cart</h1>
          <p className="checkout--p">item ships at checkout</p>
           
        </div>
        <div>
          <hr />
                <div className='checkout--modal'>
            <div>
              {cartProducts.length ? 
                cartProducts.map((cartProduct, idx)=> (
                <Cart key={ cartProduct._id } cartProduct={cartProduct} />
              )) : <p className='checkout-p-text'>Your cart is empty</p>}
            </div>
            <div className="checkout--span">
               <span >Total:#{total}</span>
            </div>
            { userDetails ? <button className='checkout-btn'>CHECK OUT</button>:
              <Redirect to='/login' /> 
              }
          </div>
          
          <hr />
          
         </div>

        </section>
    );
}

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOut)