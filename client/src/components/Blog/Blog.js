import { useState } from 'react'
import Footer from '../Footer/Footer';

function Blog()
{
    const [title, setTitle] = useState('')
    return (
        <div>
            <div>
            <label>Title</label>
            <input
                type="text"
                value={ title } />
            <label>Type Words</label>
            <textarea required>
                
                </textarea>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog