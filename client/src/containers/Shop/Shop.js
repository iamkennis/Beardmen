import './Shop.css'
import { FaMinus } from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import {getProducts} from '../../redux/productRedux/productAction'
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';
import { useState, useEffect } from 'react'
// import {connect} from 'react-redux'


const api = axios.create({
    baseURL: `http://localhost:7000/api/products/`,
    headers: {
    "Content-type": "application/json"
  }
})


function Shop () {
    const [ productData, setProductData ] = useState([]);
    const getData = async () => {
    await api.get('/')
         .then(res => setProductData(res.data.data.products))
         .catch((error) => console.log(error));
        
    }
    
     useEffect(() => {
    getData()
    }, [])
   
    console.log(productData)
 
  
   
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
                   {productData && <div className='shop--list'>
                        {productData.map(product =>
                            <Product key={product._id} productData={ product} />) }
                    </div>}
                </div>
            </aside>
            <Footer/>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     product: state.product
// })

export default Shop