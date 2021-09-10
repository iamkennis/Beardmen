import ImageRight from '../../assets/Imageright.jpg'
import './SectionRight.css'


function SectionRight()
{
    return (
        <div>
             <h1 className='section--h1'>Why join the Club</h1>
                <div className='section--right'>
                    <div className='section--right-text'>
                        <h1 className='section--h1-right'>You get top-<br /> shelf products.</h1>
                        <ul className='section--ul-right'>
                         <li>Fine products line</li>
                        <li>Made with premium ingredients</li>
                        <li>Mix and match to find your perfect routine</li>
                    </ul>
                    </div>
                  <img className='section-img-right' src={ImageRight} alt='' />
                </div>
        </div>
    )
}

export default SectionRight