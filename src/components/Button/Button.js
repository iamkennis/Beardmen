import './Button.css';

function Button(props) {
	return <button className='custom__button'>{props.children}</button>;
}

export default Button;
