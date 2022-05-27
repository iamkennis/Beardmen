// import Button from '../../components/Button/Button'
import './signUp.css';
import { useState } from 'react';
import Footer from '../../layout/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../actions/userAction';
import { Redirect } from 'react-router-dom';

function SignUp(props) {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const { userDetails, error } = user;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signUpUser(name, lastName, email, password));
		setName('');
		setLastName('');
		setEmail('');
		setPassword('');
	};

	return (
		<div className='signup__box'>
			{error && <p className='error__message'>{error}</p>}
			<div className='signup__field'>
				<p className='signup__p'>Please sign in below to continue</p>
				<form className='signup__form' onSubmit={handleSubmit}>
					<section className='signup__container'>
						<div>
							<label htmlFor='name'>Name</label>
						</div>
						<input
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							// ref={nameRef}
						/>
					</section>
					<section className='signup-container'>
						<div>
							<label htmlFor='lastname'>Last Name</label>
						</div>
						<input
							type='text'
							id='lastname'
							// ref={lastNameRef}
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='email'>Email</label>
						</div>

						<input
							type='text'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							// ref={emailRef}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='password'>Password</label>
						</div>
						<input
							type='password'
							id='password'
							// ref={passwordRef}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</section>

					<section className='signup__btn'>
						{userDetails ? (
							<Redirect to='/' />
						) : (
							<button type='submit'>Sign Up</button>
						)}
					</section>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default SignUp;
