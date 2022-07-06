import './Button.css';
import {useSelector} from 'react-redux'
import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';

function Button({children}) {
		const user = useSelector((state) => state.user);
		const { loading} = user;
	

	return <button className='custom__button'>{children}
	  {loading && <BtnSpinner/>}
	</button>;
}

export default Button;
