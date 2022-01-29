import './customButton.css'


function CustomButton (props) {
    return (
        <button className='custom__button'>{props.children}</button>
    )
}

export default CustomButton;