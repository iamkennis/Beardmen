import {useEffect,useState} from 'react'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'

import './Shop.css'
import {getProducts} from '../../actions/productAction'
import Product from '../../layout/Product/Product';
import Footer from '../../layout/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';



function Shop ({ getProduct, productData }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
         setIsLoading(true)
        getProduct()
         setIsLoading(false)
    }, [getProduct])
  
    
    return (
        <aside>
            
            <section className='category' >
                <p>Shop</p>
            </section>
             {isLoading && <Spinner/>}
            <div className='shop--list'>
                { productData.products.map(product =>
                    <Product className='shop--list' key={ product._id } product={ product } />
                ) }

            </div>
                  
            <Footer />
        </aside>
            
    );
}


const mapStateToProps = (state) => ({
    productData: state.products
})

const mapDispatchToProps = dispatch => ({
    getProduct: () => dispatch(getProducts())
})


export default connect(mapStateToProps,mapDispatchToProps) (Shop)