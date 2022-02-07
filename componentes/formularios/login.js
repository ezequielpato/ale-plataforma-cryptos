import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Container, Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { schema } from '../../schemas/schema';

const Login = () => {
	const { register, handleSubmit, errors, reset, setValue } = useForm({
		resolver: yupResolver(schema),
	});

	const registro = (objeto) => {
		console.log(objeto);
	};

	// // user state for form
	// const [user, setUser] = useState(null);

	// // effect runs on component mount
	// useEffect(() => {
	// 	// simulate async api call with set timeout
	// 	setTimeout(() => setUser({ email: '', password: '' }), 1000);
	// }, []);

	// // effect runs when user state is updated
	// useEffect(() => {
	// 	// reset form with user data
	// 	reset(user);
	// }, [user]);

	useEffect(() => {
		setValue('pais', 'Argentina');
	}, []);

	return (
		<Container className='mt-4'>
			<Form.Row className='justify-content-center auth-form-body'>
				<Form
					className='col-4 rounded p-4 border border-dark text-white-50'
					style={{ backgroundColor: '#161b22' }}
					onSubmit={handleSubmit(registro)}
				>
					<h1 style={{ fontSize: '20px', color: '#fff' }}>Login</h1>
					<Form.Group controlId='Email'>
						<Form.Label className='mt-4' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Email
						</Form.Label>
						<Form.Control
							type='email'
							name='email'
							ref={register}
							className={errors.email && 'is-invalid'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.email && (
							<Alert
								className='mt-3 mb-3 text-white'
								style={{
									backgroundColor: '#301a1e',
									borderColor: '#6f2a2b',
									borderRadius: 10,
								}}
							>
								{errors.email.message}
							</Alert>
						)}
					</Form.Group>

					<Form.Group controlId='Contraseña'>
						<Form.Label style={{ fontSize: '18px', color: '#ccc9d9' }}>Contraseña</Form.Label>
						<Form.Control
							type='password'
							name='password'
							ref={register}
							className={errors.email && 'is-invalid'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.password && (
							<Alert
								className='mt-3 mb-3 text-white'
								style={{
									backgroundColor: '#301a1e',
									borderColor: '#6f2a2b',
									borderRadius: 10,
								}}
							>
								{errors.password.message}
							</Alert>
						)}
					</Form.Group>

					<Button
						variant='success'
						type='submit'
						className='btn btn-primary btn-block js-sign-in-button mt-4'
						style={{ borderRadius: 10, fontWeight: 500, fontSize: '18px' }}
					>
						Login
					</Button>
				</Form>
			</Form.Row>
		</Container>
	);
};

export default Login;
