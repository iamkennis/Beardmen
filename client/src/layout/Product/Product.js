import './Product.css'
import {connect} from 'react-redux'
import { addToCart } from '../../actions/cartAction'
// import {useParams} from 'react-router-dom'

function Product ({ product, addToCart }) {
    const {name,image,price} = product
     
// const {id} = useParams

    return (
        <>
            < div className='product__container' >
                <div key={ product._id } className='product__items'>
                    <a href={ `/product/${ product._id }` }>
                        <img className='product__img' src={ image } alt={ name } />
                    </a>
                    <a href={ `/product/${ product._id }` }>
                        <p className='product__text'>{ name }</p>
                    </a>
                      
                    <p className='product__text' >#{ price }</p>
                
                    <div className='product__btn'>
                        <button className="products__btn" onClick={ () => addToCart(product) }>Add</button>
                    </div>
                </div>
                
            </div >
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    addToCart: (product) => dispatch(addToCart(product)),
    
})


export default
    connect(null, mapDispatchToProps)
        (Product);