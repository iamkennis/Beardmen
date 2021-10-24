import './signIn.css'
import { Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import CustomButton from '../../components/CustomButton/customButton'
import Footer from '../../layout/Footer/Footer'
import {useDispatch, useSelector } from 'react-redux'
import {signInUser} from '../../actions/userAction'
import {Redirect } from 'react-router-dom'



function SignIn (props) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const dispatch = useDispatch()
  
  const userSignIn = useSelector((state) => state.users)
  const { users,token, message } = userSignIn
  
  useEffect(() => {
    if (users)
    {
     return  <Redirect to='/shop'/>
    } else
    {
      return message
   }
},[users,message])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInUser(email,password))
    
   console.log(email, password)
  };
 

  return (
    <>
      <section className='signin--box'>
        <h1 className='sign--h1'>Welcome back!</h1>
        <p className='sign--p'>Please sign in below to continue</p>
        <form onSubmit={ handleSubmit }>
          <section className='signup-container'>
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
              <label htmlFor="password" placeholder="*******" >Password</label>
            </div>
            <input
              type="password"
              id="password"
              //  ref={passwordRef}
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <section className='form--btn'>
            <CustomButton type='submit' name='button'>sign in</CustomButton>
          </section>
        </form>
         <section className='forget--links'>
          {/* <Link className='forget--link' to='/forget-password'>Forget Password?</Link> */}
          {/* <Link className='forget--link' to='/forget-email'>Forget Email?</Link> */}
        </section> 
        <section className='signup--link'>
          <Link className='forget--link' to='/signup'>Not a member?Join us!</Link>
        </section>
      </section>
      <Footer />
    </>
  );
}



export default SignIn