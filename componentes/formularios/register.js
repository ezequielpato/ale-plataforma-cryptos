import { useEffect } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

// Schema con validaciones de yupResolver
import { schema } from '../../schemas/schema';

// // Libreria de Animaciones https://animate.style/
// import 'animate.css';

// Array de paises para Form.Select
import paises from '../../utils/paises';

const Register = () => {
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
						Registro
					</h1>
					<Form.Group controlId='Nombre'>
						<Form.Label className='mt-4 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Nombre
						</Form.Label>
						<Form.Control
							type='text'
							name='nombre'
							ref={register}
							className={errors.nombre && 'is-invalid border-danger'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.nombre && (
							<p
								className='mt-2 mb-3 animate__animated animate__headShake'
								style={{ color: '#e44258' }}
							>
								{errors.nombre.message}
							</p>
						)}
					</Form.Group>

					<Form.Group controlId='Apellido'>
						<Form.Label className='mt-2 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Apellido
						</Form.Label>
						<Form.Control
							type='text'
							name='apellido'
							ref={register}
							className={`${errors.apellido && 'is-invalid border-danger'}`}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.apellido && (
							<p
								className='mt-2 mb-3 animate__animated animate__headShake'
								style={{ color: '#e44258' }}
							>
								{errors.apellido.message}
							</p>
						)}
					</Form.Group>

					<Form.Group controlId='Pa??s'>
						<Form.Label className='mt-2 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Pa??s
						</Form.Label>

						<Form.Control
							as='select'
							name='pais'
							ref={register}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
							custom
						>
							{paises.map((post, i) => (
								<option value={post} key={i}>
									{post}
								</option>
							))}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId='Email'>
						<Form.Label className='mt-2 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
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

					<Form.Group controlId='Contrase??a'>
						<Form.Label className='mt-2 mb-1' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Contrase??a
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
							// <Alert
							// 	className='mt-2 mb-3 text-white'
							// 	style={{
							// 		backgroundColor: '#301a1e',
							// 		borderColor: '#6f2a2b',
							// 		borderRadius: 10,
							// 		padding: '0.50rem 1.5rem',
							// 		height: '40px',
							// 	}}
							// >
							// 	{errors.password.message}
							// </Alert>
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
						className='btn btn-warning btn-block js-sign-in-button mt-4 animate__animated animate__fadeInUp'
						style={{ borderRadius: 10, fontWeight: 500, fontSize: '18px' }}
					>
						Registrar
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Register;
