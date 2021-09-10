import './Shop.css'
import {FaMinus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import Footer from '../../components/Footer/Footer';






function Shop (){
    const [ products, setProducts ] = useState([])
    const [ error, setError ] = useState(null);

    useEffect(() => {

        async function dataProduct () {
            try
            {
                const response = await fetch(`http://localhost:3000/products`);
                if (response.ok)
                {
                    const json = await response.json();
                    setProducts(json)
                } else
                {
                    throw response;
                }
            } catch (error)
            {
                setError(error);
            }
        }
        dataProduct()
    }, [])
       
   
     if (error) throw error;

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
                    
                           { products && <div className='shop--list'>
                             
                            { products.map((product) =>
                                
                                <Product key={ product.id } product={product} />) }
                            </div> }
                </div>
            </aside>
            <Footer/>
        </div>
    );
}

export default Shop
