import './Footer.css'
import
    {
        FaFacebook,
        FaInstagram,
        FaTwitter,
        FaYoutube
    } from 'react-icons/fa'

 

function Footer()
{
    return (
        <footer >
            <div className='footer'>
            <div className='footer__icon'>
                        <FaYoutube className='icon__color'/>
                        <FaFacebook className='icon__color'/>
                        <FaTwitter className='icon__color'/>
                        <FaInstagram className='icon__color'/>  
                </div>
            </div>

        </footer>
    );
}

export default Footer