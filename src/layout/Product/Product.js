import './Product.css';
import { useEffect } from 'react';
import { addToCart } from '../../actions/cartAction';
import { getProducts } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';

function Product() {
	const dispatch = useDispatch();

	const product = useSelector((state) => state.products);
	const { products, loading } = product;

	useEffect(() => {
		if (!products) {
			dispatch(getProducts());
		}
	}, [dispatch, products]);



	return (
		<>
			<div className='product__items'>
				{loading ? (
					<Spinner />
				) : (
					products?.map((data) => (
						<div className='product__lists' key={data._id}>
			
							<figure>
								<img
									className='product__img'
									src={data.image}
									alt={data.name}
								/>
							</figure>

							<p className='product__text'>{data.name}</p>

							<p className='product__text'>₦{data.price}</p>
							{/* </div> */}
							<button
								className='products__btn'
								onClick={() => dispatch(addToCart(data))}>
								Add
							</button>
						</div>
					))
				)}
			</div>
		</>
	);
}


export default Product;