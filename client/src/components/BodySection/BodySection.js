import './BodySection.css'
import bodysect from '../../assets/bodysect.jpg'
import { Link } from 'react-router-dom'
import SectionRight from '../SectionRight/SectionRight'
import SectionLeft from '../SectionLeft/SectionLeft'
import CustomButton from '../CustomButton/custom-button'


function BodySection (props) {
    return (
        <main>
            <section>
                <h1 className='section--h1'>Another way to enjoy the best beard Products</h1>
            </section>
            <section className='section--main'>
                <section className='section--container'>
                    <h1 className='section--btn-h1'>
                        Need a <br /> smooooth <br /> shave?
                </h1>
                    <p className='section--btn-p'>Try our most popular starter set.</p>
                    <section className='section--btn'>
                        <Link to='/shop'>
                            <CustomButton>Try for $10</CustomButton>
                        </Link>
                    </section>
                </section>
                
                <section>
                    <img className='section--img' src={ bodysect } alt='' />
                </section>
            </section>
            <SectionRight/>
            <SectionLeft/>
        </main>
    );
}

export default BodySection;