import './signIn.css'
import { Link} from 'react-router-dom'
import {useState} from 'react'
import CustomButton from '../../components/CustomButton/customButton'
import Footer from '../../layout/Footer/Footer'
import {useDispatch, useSelector } from 'react-redux'
import {signInUser} from '../../actions/userAction'
import {Redirect } from 'react-router-dom'


function SignIn () {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch()
  
  const user = useSelector((state) => state.user)
  const { userDetails,error } = user
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInUser(email,password))
    setEmail('');
    setPassword('');
  };
  

  return (
    <>
      <section className='signin__box'>
        { error && <p className='error__message'>{error}</p>}
        <h1 className='sign__h1'>Welcome back!</h1>
        <p className='sign__p'>Please sign in below to continue</p>
        <form onSubmit={ handleSubmit }>
          <section className='signup__container'>
            <div>
              <label htmlFor="email" placeholder="example@mail.com">Email</label>
            </div>
            
            <input
              type="text"
              id="email"
              //  ref={emailRef}
               value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </section>
        
          <section className='signup-container'>
            <div>
              <label htmlFor="password" placeholder="*******">Password</label>
            </div>
            <input
              type="password"
              id="password"
              //  ref={passwordRef}
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <section className='form__btn'>
            {userDetails ? <Redirect to='/shop' /> :
              <CustomButton type='submit' name='button'>sign in</CustomButton> }
          </section>
        </form>
         <section className='forget__links'>
          {/* <Link className='forget--link' to='/forget-password'>Forget Password?</Link> */}
          {/* <Link className='forget--link' to='/forget-email'>Forget Email?</Link> */}
        </section> 
        <section className='signup__link'>
          <Link className='forget__link' to='/signup'>Not a member?Join us!</Link>
        </section>
      </section>
      <Footer />
    </>
  );
}



export default SignIn