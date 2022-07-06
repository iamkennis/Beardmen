import './signUp.css';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../actions/userAction';
import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';
import { Redirect } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Button from '../../components/Button/Button';

function SignUp(props) {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const {loading,token } = user;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signUpUser(name, lastName, email, password));
		setName('');
		setLastName('');
		setEmail('');
		setPassword('');
	};


	return (
		<div className='container-fluid signup__box'>
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
			<div className='signup__field'>
				<p className='signup__p'>Please sign up below to continue</p>
				<form className='signup__form' onSubmit={handleSubmit}>
					<section>
						<div>
							<label>Name</label>
						</div>
						<input
							type='name'
							htmlFor='name'
							value={name}
							placeholder='Doe'
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</section>
					<section>
						<div>
							<label htmlFor='lastname'>Last Name</label>
						</div>
						<input
							type='lastname'
							id='lastname'
							required
							value={lastName}
							placeholder='John'
							onChange={(e) => setLastName(e.target.value)}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='email'>Email</label>
						</div>

						<input
							type='email'
							htmlFor='email'
							value={email}
							required
							placeholder='example@gmail.com'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='password'>Password</label>
						</div>
						<input
							type='password'
							id='password'
							htmlFor='password'
							placeholder='*******'
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</section>

					<section className='signup__btn'>
						{token ? (
							<Redirect to='/' />
						) : (
							<Button type='submit' name='button' loading={loading}>
								Sign Up
							</Button>
						)}
					</section>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
