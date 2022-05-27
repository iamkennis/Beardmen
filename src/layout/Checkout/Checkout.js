import './Checkout.css';
import Cart from '../Cart/Cart';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartProducts, selectCartTotal } from '../../Utils/cartSelector';
import { Redirect } from 'react-router-dom';

function CheckOut({ cartProducts, total, product }) {
	const user = useSelector((state) => state.user);
	const { userDetails } = user;
	return (
		<section className='checkout'>
			<div className='checkout__text'>
				<h1 className='checkout__h1'>Your cart</h1>
				<p className='checkout__p'>item ships at checkout</p>
			</div>
			<div>
				<hr />
				<div className='checkout__modal'>
					<div>
						{cartProducts.length ? (
							cartProducts.map((cartProduct, idx) => (
								<Cart key={cartProduct._id} cartProduct={cartProduct} />
							))
						) : (
							<p className='checkout__p-text'>Your cart is empty</p>
						)}
					</div>
					<div className='checkout__span'>
						<span>Total:#{total}</span>
					</div>
					<div className='checkout-sm'>
						{userDetails ? (
							<button className='checkout__btn'>CHECK OUT</button>
						) : (
							<Redirect to='/login' />
						)}
					</div>
				</div>

				<hr />
			</div>
		</section>
	);
}

const mapStateToProps = createStructuredSelector({
	cartProducts: selectCartProducts,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
