import './Header.css';
import headerimage from '../../assets/headerimage.jpg';
import CustomButton from '../../components/CustomButton/customButton';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header>
			<section className='header'>
				<h1 className='header__h1'>
					HOW DO
					<br />
					YOU GET
					<br />
					INVOLVE
				</h1>
				<p className='header__p'>
					Tell us how you get invovle in grooming and well recommend the
					perfect products
				</p>
				<section className='header__btn'>
					<Link to='/shop'>
						<CustomButton>Shop Now</CustomButton>
					</Link>
				</section>
			</section>
			<section>
				<img className='header__img' src={headerimage} alt='HeaderImage' />
			</section>
		</header>
	);
}

export default Header;
