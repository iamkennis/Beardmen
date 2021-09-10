import './SignIn.css'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import CustomButton from '../CustomButton/custom-button'
import Footer from '../Footer/Footer'



function SignIn () {
const [email, setEmail] = useState('')
const[password, setPassword] = useState('')

const handleSubmit= (e) => {
  e.preventDefault()
}

  return (
    <>
    <section className='signin--box'>
      <h1 className='sign--h1'>Welcome back!</h1>
      <p className='sign--p'>Please sign in below to continue</p>
      <form onSubmit={ handleSubmit }>
        <section className='sign--email'>
          <p className='form--p'>EMAIL ADDRESS</p>
          <input
            type="text"
            required
            onChange={ ( e ) => setEmail( e.target.value ) }
            value={ email }
          />
        </section>
        <section className='sign--password'>
          <p className='form--p'>PASSWORD</p>
          <input
            type="password"
            onChange={ ( e ) => setPassword( e.target.value ) }
            value={ password }
          />
        </section>
        <section className='form--btn'>
          <CustomButton name='button'>sign in</CustomButton>
          <div>
            <p>or</p>
          </div>
        </section>
      </form>
      <section className='btn--social'>
        <div>
          <button className='form--btn-social-go' name="button">Sign in with Google</button>
        </div>
        <div>
          <button className='form--btn-social-fb' name="button">Sign in with Facebook</button>
        </div>
      </section>
      <section className='forget--links'>
        <Link className='forget--link' to='/forget-password'>Forget Password?</Link>
        <Link className='forget--link' to='/forget-email'>Forget Email?</Link>
      </section>
      <section className='signup--link'>
        <Link className='forget--link' to='/sign-up'>Not a member?Join us!</Link>
      </section>
      </section>
       <Footer/>
    </>
  );
}

export default SignIn;