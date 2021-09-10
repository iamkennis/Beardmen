import CustomButton from '../CustomButton/custom-button'
import './SignUp.css'
import { useState } from 'react'
import Footer from '../Footer/Footer'


function SignUp () {

const [name, setName] = useState('')
const [lastname, setLastname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleSubmit= (e) => {
  e.preventDefault()
}
  
  return (
    <>
    <div className='signup--field'>
      <p className='signup--p'>Please sign in below to continue</p>
      <form onSubmit={ handleSubmit }>
        <div className='signup--form'>
          <section className='sign-up--email'>
            <p className='signup-form--p'>NAME</p>
            <input
              type="text"
              value={ name }
              onChange={ ( e ) => setName( e.target.value ) }
            />
          </section>
          <section className='sign-up--email'>
            <p className='signup-form--p'>LAST NAME</p>
            <input
              type="text"
              value={ lastname }
              onChange={ ( e ) => setLastname( e.target.value ) } />
          </section>
          <section className='sign-up--email'>
            <p className='signup-form--p'>EMAIL ADDRESS</p>
            <input
              type="text"
              value={ email }
              onChange={ ( e ) => setEmail( e.target.value ) } />
          </section>
          <section className='signup--password'>
            <p className='signup-form--p'>PASSWORD</p>
            <input
              type="password"
              value={ password }
              onChange={ ( e ) => setPassword( e.target.value ) }
            />
          </section>
        </div>
        <section className='signup--btn'>
         <CustomButton name='button'>Sign Up</CustomButton>
        </section>
      </form>
      <div>
        <p>or</p>
      </div>
      <section className='btn--social'>
        <div>
          <button className='signup--btn-social-go' name="button">Sign up with Google</button>
        </div>
        <div>
          <button className='signup--btn-social-fb' name="button">Sign up with Facebook</button>
        </div>
      </section>
      </div>
       <Footer/>
      </>
  );
}

export default SignUp