import './Product.css'
// import { useEffect } from 'react';
// import {getProducts} from '../../redux/productRedux/productAction'
// import {connect} from 'react-redux'
// import {addProduct} from '../../redux/cartRedux/cart.action'


function Product ({productData}) {
const {image,name,price} = productData
   
    // useEffect(() => {
    // (getProduct())
    // }, [getProduct])
   
 
    return (
        <>
            
                < div className='product--container' >
                    <div className='product--items'>
                        <img className='product--img' src={image } alt={name } />
                        <p className='product--text'>{name }</p>
                        <p className='product--text' >#{price }</p>
                
                        <div className='product--btn'>
                            <button className="products-btn">Add</button>
                        </div>
                    </div>
                
            </div >
        </>
    );
}

// const mapStateToProps = (state) => ({
//     product: state.product
// })

// const mapDispatchToProps = dispatch => ({
//     getProduct: product => dispatch(getProducts(product)),
    
// })



// export default connect(null, mapDispatchToProps)(Product)

export default Product