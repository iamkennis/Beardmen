
import Footer from '../Footer/Footer';

function Blog()
{
    
    return (
        <div>
            <div>
            <label>Title</label>
            <input
                type="text"
                value="text"/>
            <label>Type Words</label>
            <textarea required>
                
                </textarea>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
