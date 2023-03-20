import './Checkout.css';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import { Redirect } from 'react-router-dom';

function CheckOut() {
	const {token} = useSelector((state) => state.user);
	const {cartItems} = useSelector((state) => state.cart);
	
	const totalPrice = cartItems?.reduce((calcQuantity, cartItem) =>
	calcQuantity + cartItem.quantity * cartItem.price, 0)
	
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
						<span>
							{cartItems?.length === 0 && (
								<p className='checkout__p-text'>Your cart is empty</p>
							)}
						</span>
						{cartItems.map((cartItem) => (
							
							<div key={cartItem.id}>
								<Cart  cartItem={cartItem} />
								<hr />
							</div>
						))}
					</div>
				</div>
				<div className='checkout-sm'>
					<div className='checkout__span'>
						<span>Total:₦{totalPrice}</span>
					</div>
					<div className='checkout-btn'>
						{token ? <Button>Check Out</Button> : <Redirect to='/login' />}
					</div>
				</div>
				<hr />
			</div>
		</section>
	);
}


export default CheckOut;
