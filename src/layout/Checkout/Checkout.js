import './Checkout.css';
import Cart from '../Cart/Cart';
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartProducts, selectCartTotal } from '../../Utils/cartSelector';
import Button from '../../components/Button/Button';
import { Redirect } from 'react-router-dom';

function CheckOut({ cartProducts, total, product }) {
	const user = useSelector((state) => state.user);
	const { userDetails } = user;
	
	return (
		<section className='checkout'>
			<div className='checkout__text'>
				<h1 className='checkout__h1'>Your cart</h1>
				<p className='checkout__p'>Item ships at checkout</p>
			</div>
			<hr />
			<div>
				<div className='checkout__modal'>
					<div>
						{cartProducts.length < 0 ? (
							<p className='checkout__p-text'>Your cart is empty</p>
						) : (
							cartProducts.map((cartProduct, idx) => (
								<div>
									<Cart key={cartProduct.id} cartProduct={cartProduct} />
									<hr />
								</div>
							))
						)}
					</div>
				</div>
				<div className='checkout-sm'>
					<div className='checkout__span'>
						<span>Total:#{total}</span>
					</div>
					<div className='checkout-btn'>
						{userDetails ? (
							<Button>Check Out</Button>
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
