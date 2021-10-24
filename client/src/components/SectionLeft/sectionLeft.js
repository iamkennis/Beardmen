import ImageLeft from '../../assets/Imageleft.jpg'
import './sectionLeft.css'

function SectionLeft()
{
    return (
           <div className='section--left'>
                    <img className='section-img-left' src={ImageLeft} alt='' />
                    <div className='section--left-text'>
                        <h1 className='section--h1-left'>You get top-<br /> shelf products.</h1>
                        <ul className='section--ul-left'>
                         <li className='section-li-left'>Fine products line</li>
                        <li className='section-li-left'>Made with premium ingredients</li>
                        <li className='section-li-left' >Mix and match to find your perfect routine</li>
                    </ul>
                    </div>
                </div>
    )
}

export default SectionLeft