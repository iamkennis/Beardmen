import './Checkout.css'
import Cart from '../../components/Cart/Cart'
import {connect} from 'react-redux'
import { selectCartProducts,selectCartTotal } from '../../redux/cartRedux/cart.selector';



function CheckOut ({cartProducts, total}) {

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
              { cartProducts.map(cartProduct => (
                <Cart key={ cartProduct._id } product={cartProduct}/>
              )) }
            </div>
            <div className="checkout--span">
               <span >Total:${total}</span>
            </div>
             <button className='checkout-btn'>GO CHECK OUT</button>
          </div>
          
          <hr />
          
         </div>

        </section>
    );
}

const mapStateToProps = (state) => ({
  cartProducts: selectCartProducts(state),
  total: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckOut)