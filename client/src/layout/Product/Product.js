import './Product.css'
import {connect} from 'react-redux'
import { addToCart } from '../../actions/cartAction'
// import {useParams} from 'react-router-dom'

function Product ({ product, addToCart }) {
    const {name,image,price} = product
     
// const {id} = useParams

    return (
        <>
            < div className='product--container' >
                <div key={ product._id } className='product--items'>
                    <a href={ `/product/${ product._id }` }>
                        <img className='product--img' src={ image } alt={ name } />
                    </a>
                    <a href={ `/product/${ product._id }` }>
                        <p className='product--text'>{ name }</p>
                    </a>
                      
                    <p className='product--text' >#{ price }</p>
                
                    <div className='product--btn'>
                        <button className="products-btn" onClick={ () => addToCart(product) }>Add</button>
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