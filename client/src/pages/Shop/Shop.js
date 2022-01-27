import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom'

import './Shop.css';
import { getProducts } from '../../actions/productAction';
import Product from '../../layout/Product/Product';
import Footer from '../../layout/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

function Shop({ getProduct, product }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getProduct();
		setIsLoading(false);
	}, [getProduct]);

	return (
		<aside>
			<section className='category'>
				<p>Shop</p>
			</section>
			{isLoading && <Spinner />}
            <div className='shop__list'>
                {product ? product.products.map((product) => (
                    <Product className='shop__list' key={product._id} product={product} />
                )) : null}
            </div>

			<Footer />
		</aside>
	);
}

const mapStateToProps = (state) => ({
	product: state.products,
});

const mapDispatchToProps = (dispatch) => ({
	getProduct: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
