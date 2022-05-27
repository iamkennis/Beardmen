import './Header.css';
import headerimage from '../../assets/headerimage.jpg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header className='container-fluid'>
			<div className='row'>
				<div className='col-sm-6 header'>
					<section>
						<h1 className='header__h1'>
							HOW DO YOU
							<br />
							GET INVOLVE
						</h1>
					</section>
					<p className='header__p'>
						Tell us how you get invovle in grooming, and well <br />
						recommend the perfect products
					</p>
					<section className='header__btn'>
						<Link to='/shop'>
							<Button>Shop Now</Button>
						</Link>
					</section>
				</div>
				<section className='col-sm-6'>
					<img className='header__img' src={headerimage} alt='HeaderImage' />
				</section>
			</div>
		</header>
	);
}

export default Header;
