import './Product.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartAction';
import { getProducts } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/Spinner/Spinner';

function Product({ addToCart}) {
	const dispatch = useDispatch();

	const product = useSelector((state) => state.products);
	const { products, loading } = product;

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);


	return (
		<>
			<div className='product__items'>
				{loading ? (
					<Spinner />
				) : (
					products?.map((data, index) => (
						<div className='product__lists' key={data._id}>
							{/* <div key={data.id}> */}
							<figure>
								<img
									className='product__img'
									src={data.image}
									alt={data.name}
								/>
							</figure>

							<p className='product__text'>{data.name}</p>

							<p className='product__text'>#{data.price}</p>
							{/* </div> */}
							<button
								className='products__btn'
								onClick={() => addToCart(data)}>
								Add
							</button>
						</div>
					))
				)}
			</div>
		</>
	);
}


const mapDispatchToProps = (dispatch) => ({
	addToCart: (data) => dispatch(addToCart(data))
});

export default connect(null, mapDispatchToProps)(Product);