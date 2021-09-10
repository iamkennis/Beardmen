import './custom-button.css'


function CustomButton ({children}) {
    return (
        <button className='custom--button'>{children}</button>
    )
}

export default CustomButton;