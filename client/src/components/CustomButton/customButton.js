import './customButton.css'


function CustomButton (props) {
    return (
        <button className='custom--button'>{props.children}</button>
    )
}

export default CustomButton;