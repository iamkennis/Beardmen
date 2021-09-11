import './Shop.css'
// import axios from 'axios'
import {useEffect} from 'react';
import {FaMinus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getProducts } from '../../redux/productRedux/productAction'
import {connect} from 'react-redux'
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
// import Spinner from '../../components/Spinner/Spinner';

// const api = axios.create({
//     baseURL: `http://localhost:7000/api/products/`,
//     headers: {
//     "Content-type": "application/json"
//   }
// })

function Shop ({ product}) {
//     const [ productData, setProductData ] = useState([]);
//     const getData = async () => {
//     await api.get('/')
//          .then(res => setProductData(res.data.data.products))
//          .catch((error) => console.log(error));
        
//  }
    useEffect(() => {
        getProducts()
    },[]) 
   
   
    return (
      
        <div>
            <aside>
                <div>
                    <div className='aside--lists'>
                       <section className='category' >
                        <p>Cateroies</p>
                        <FaMinus style={{cursor: 'pointer'}}/>
                        </section>
                        <div className='aside--links'>
                            <Link className='aside-link aside-btn' to='/'>Shave</Link>
                            <Link className='aside-link aside-btn' to='/'>New</Link>
                            <Link className='aside-link aside-btn' to='/'>Skin Care</Link>
                            <Link className='aside-link aside-btn' to='/'>Accessories</Link>
                            <Link className='aside-link aside-btn' to='/'>Special Value Bundles</Link>
                            <Link className='aside-link aside-btn' to='/'>Shower</Link>
                            <Link className='aside-link aside-btn' to='/'>Deodorant and Wipe</Link>
                            <Link className='aside-link aside-btn' to='/'>Oral Care</Link>
                            <Link className='aside-link aside-btn' to='/'>Hair</Link>
                            <Link className='aside-link aside-btn' to='/'>Cologne</Link>
                            <Link className='aside-link aside-btn' to='/'>Trail Size</Link>
                        </div>
                    </div>
                    <div className='shop--list'>
                        
                        <Product product={product}/>
                        
                       
                    </div> 
                </div>
            </aside>
            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    product: state.product
})

export default connect(mapStateToProps, {getProducts})(Shop)