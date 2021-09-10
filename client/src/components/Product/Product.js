import './Product.css'
// import { connect } from 'react-redux'
// import {addProduct} from '../../redux/cartRedux/cart.action'



function Product ({product}) {
  const {image, name, price } = product
    return (
            <div className='product--container'>
                    <div className='product--items'>
                        <img className='product--img' src={ image } alt={ name } />
                        <p className='product--text'>{ name }</p>
                        <p className='product--text' >#{ price }</p>
                
                        <div className='product--btn'>
                            <button className="products-btn">Add</button>
                        </div>
                    </div>
                
            </div> 
    );
}

// const mapDispatchToProps = dispatch => ({
// addProduct: product => dispatch(addProduct(product))
// })

export default Product