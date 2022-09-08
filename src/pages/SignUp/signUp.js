import './signUp.css';
import { useState, useCallback,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../actions/userAction';
import BtnSpinner from '../../shared/BtnSpinner/btnSpinner';
import { Redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import { validate } from 'email-validator';
import Input from '../../components/Input'

import { Toaster } from 'react-hot-toast';
import Button from '../../components/Button/Button';

function SignUp() {
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [disabled, setDisabled] = useState(false)
    const [dirty, setDirty] = useState(false);

	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const {token} = user;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!dirty && !disabled) {
			setDirty(true)
		}
		try {
			setLoading(true)
            dispatch(signUpUser(name, lastName, email, password));
			setLoading(false);
		} catch ({ error }) {
			setLoading(false)
			console.log(error)
		}
		
		
	};

	 const handleValidation = useCallback(() => {
  
    const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)

    if (dirty) {
      setDisabled(!validate(email) || password.length < 7 || !validPassword)
    }
  }, [email, password, dirty])

  useEffect(() => {
    handleValidation()
  }, [handleValidation])



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
						<Input
							type='name'
							htmlFor='name'
							value={name}
							placeholder='Name'
							required
							onChange={setName}
						/>
					</section>
					<section>
						<div>
							<label htmlFor='lastname'>Last Name</label>
						</div>
						<Input
							type='lastname'
							id='lastname'
							htmlFor='lastname'
							value={lastName}
							placeholder='Last Name'
							onChange={setLastName}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='email'>Email</label>
						</div>
						<Input
							type='email'
							id='email'
							htmlFor='email'
							value={email}
							placeholder='Email'
							onChange={setEmail}
						/>
					</section>
					<section className='signup__container'>
						<div>
							<label htmlFor='password'>Password</label>
						</div>
						<Input
							type='password'
							id='password'
							htmlFor='password'
							value={email}
							placeholder='Password'
							onChange={setPassword}
						/>
					</section>

					<section className='signup__btn'>
						{token ? (
							<Redirect to='/' />
						) : (
							<Button type='submit' name='button' loading={loading} disabled={disabled}>
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
