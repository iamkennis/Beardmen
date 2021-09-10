
import './Header.css'
import headerimage from '../../assets/headerimage.jpg'
import CustomButton from '../CustomButton/custom-button'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <section className='header'>
                <h1 className='header--h1'>HOW DO<br />YOU GET<br />INVOLVE</h1>
                <p className='header--p'>Tell us how you get invovle in grooming and we’ll recommend the perfect products</p>
                <section className='header--btn'>
                    <Link to='/shop'>
                        <CustomButton>Show Now</CustomButton>
                    </Link>
                </section>
            </section>
            <section>
                <img className='header--img' src={ headerimage } alt='HeaderImage' />
            </section>
        </header>
    );
}

export default Header;