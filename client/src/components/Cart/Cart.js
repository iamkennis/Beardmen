import './Cart.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { connect } from 'react-redux'
import {addProduct,removeItem} from './../../redux/cartRedux/cart.action'

function Cart ({ product, removeProduct, addProduct}) {
    
    return (
            <div className='cart'>
                <div className='cart--modal'>
                    <img className='cart--img' src={product.imgUrl} alt='products' />
                    <div className='cart--items'>
                        <h1 className='cart--h1'>{product.title}</h1>
                    <span className='cart--span'>{ product.quantity } x ${ product.price }</span>
                    <div>
                         <button className='cart-btn'>
                        <FaMinus className='icon--minus' onClick={() => removeProduct(product)}/>
                            {product.quantity}
                        <FaPlus className='icon--plus' onClick={() => addProduct(product)}/>
                    </button>
                    </div>
                    </div>
                </div>
            </div>
    );
    
}

const mapDispatchToProps = dispatch => ({
    removeProduct: product => dispatch(removeItem(product)),
    addProduct: product => dispatch(addProduct(product)) 
})

export default connect(null,mapDispatchToProps) (Cart);