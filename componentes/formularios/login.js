import { useEffect } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

// Schema con validaciones de yupResolver
import { schema } from '../../schemas/schema';

// Libreria de Animaciones https://animate.style/
import 'animate.css';

const Login = () => {
	const { register, handleSubmit, errors, reset, setValue } = useForm({
		resolver: yupResolver(schema),
	});

	const registro = (objeto) => {
		console.log(objeto);
	};

	useEffect(() => {
		setValue('pais', 'Argentina');
	}, []);

	return (
		<Container className='mt-4'>
			<Row className='justify-content-center auth-form-body'>
				<Form
					className='col-4 rounded p-4 border border-dark text-white-50'
					style={{ backgroundColor: '#161b22' }}
					onSubmit={handleSubmit(registro)}
				>
					<h1
						className='animate__animated animate__bounceIn'
						style={{ fontSize: '20px', color: '#fff' }}
					>
						Login
					</h1>

					<Form.Group controlId='Email'>
						<Form.Label className='mt-4 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Email
						</Form.Label>
						<Form.Control
							type='email'
							name='email'
							ref={register}
							className={errors.email && 'is-invalid border-danger'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.email && (
							<p
								className='mt-2 mb-3 animate__animated animate__headShake'
								style={{ color: '#e44258' }}
							>
								{errors.email.message}
							</p>
						)}
					</Form.Group>

					<Form.Group controlId='Contraseña'>
						<Form.Label className='mt-2 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Contraseña
						</Form.Label>
						<Form.Control
							type='password'
							name='password'
							ref={register}
							className={errors.password && 'is-invalid border-danger'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.password && (
							<p
								className='mt-2 mb-3 animate__animated animate__headShake'
								style={{ color: '#e44258' }}
							>
								{errors.password.message}
							</p>
						)}
					</Form.Group>

					<Button
						variant='success'
						type='submit'
						className='btn btn-primary btn-block js-sign-in-button mt-4 animate__animated animate__fadeInUp'
						style={{ borderRadius: 10, fontWeight: 500, fontSize: '18px' }}
					>
						Ingresar
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Login;
