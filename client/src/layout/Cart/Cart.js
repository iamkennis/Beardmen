import './Cart.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux'
import { addToCart, removeCart } from '../../actions/cartAction'


function Cart ({cartProduct,addToCart,removeCart}) {
    const {name,image,price,quantity} = cartProduct
    return (
            <div className='cart'>
                <div className='cart--modal' >
                    <img className='cart--img' src={image} alt='products' />
                    <div className='cart--items'>
                        <h1 className='cart--h1'>{name}</h1>
                    <span className='cart--span'>{quantity } x #{ price }</span>
                    <div>
                        <button className='cart-btn'>
                        <FaMinus className='icon--minus' onClick={() => removeCart(cartProduct)}/>
                            {quantity}
                        <FaPlus className='icon--plus' onClick={() => addToCart(cartProduct)}/>
                    </button>
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