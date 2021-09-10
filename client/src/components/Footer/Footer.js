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
            <div className='footer--icon'>
                        <FaYoutube className='icon--color'/>
                        <FaFacebook className='icon--color'/>
                        <FaTwitter className='icon--color'/>
                        <FaInstagram className='icon--color'/>  
                </div>
            </div>

        </footer>
    );
}

export default Footer