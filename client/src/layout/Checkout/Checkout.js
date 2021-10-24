import './Checkout.css'
import Cart from '../../layout/Cart/Cart'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartProducts,selectCartTotal } from '../../Utils/cartSelector';



function CheckOut ({cartProducts, total,product}) {

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
              )) : <p>Your cart is empty</p>}
            </div>
            <div className="checkout--span">
               <span >Total:#{total}</span>
            </div>
             <button className='checkout-btn'>CHECK OUT</button>
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