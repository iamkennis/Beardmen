import './Cart.css'
import { AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai'
import { connect } from 'react-redux'
import { addToCart, removeCart } from '../../actions/cartAction'


function Cart ({cartProduct,addToCart,removeCart}) {
    const {name,image,price,quantity} = cartProduct
    return (
			<div className='cart'>
				<div className='cart__modal'>
					<img className='cart__img' src={image} alt='products' />
					<div className='cart__items'>
						<h1 className='cart__h1'>{name}</h1>
						<span className='cart__span'>
							{quantity} x #{price}
						</span>
						<div className='span__icon'>
							<span
								className='cart__btn'
								onClick={() => removeCart(cartProduct)}>--</span>
							<span>{quantity}</span>
							<span
								className='cart__btn'
								onClick={() => addToCart(cartProduct)}>
								+
							</span>
						</div>
					</div>
				</div>
			</div>
		);
    
}

const mapDispatchToProps = dispatch => ({
    addToCart: product => dispatch(addToCart(product)) ,
    removeCart: product => dispatch(removeCart(product))
    
})

export default
    connect(null, mapDispatchToProps)(Cart);