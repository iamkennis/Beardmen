import './signIn.css';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { Toaster} from 'react-hot-toast';
import Button from '../../components/Button/Button';
import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../actions/userAction';
import { Redirect } from 'react-router-dom';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const {loading,token} = user;
	

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signInUser(email, password));
		setEmail('');
		setPassword('');
	};

	return (
		<>
			<Toaster
				position='top-center'
				reverseOrder={false}
				gutter={8}
				toastOptions={{
					duration: 5000,
					style: {
						padding: '20px',
						fontSize: '13px',
						fontWeight: 'bolder',
						borderRadius: '15px',
					},
				}}
			/>

			<section className='container-fluid signin__box'>
				<h1 className='sign__h1'>Welcome back!</h1>
				<p className='sign__p'>Please sign in below to continue</p>
				<form onSubmit={handleSubmit}>
					<section>
						<div>
							<label>Email</label>
						</div>

						<input
							type='text'
							id='email'
							required
							htmlFor='email'
							placeholder='example@mail.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</section>

					<section>
						<div>
							<label>Password</label>
						</div>
						<input
							type='password'
							id='password'
							//  ref={passwordRef}
							htmlFor='password'
							placeholder='*******'
							value={password}
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
					</section>
					<section className='form__btn'>
					{token ? <Redirect to='/shop' /> :
						<Button type='submit' name='button'>
							{loading ? <BtnSpinner /> : 'SignIn'}
						</Button>}
					</section>
				</form>
				<section className='forget__links'>
					{/* <Link className='forget--link' to='/forget-password'>Forget Password?</Link> */}
					{/* <Link className='forget--link' to='/forget-email'>Forget Email?</Link> */}
				</section>
				<section className='signup__link'>
					<Link className='forget__link' to='/signup'>
						Not a member?Join us!
					</Link>
				</section>
			</section>
			{/* <Footer /> */}
		</>
	);
}

export default SignIn;
