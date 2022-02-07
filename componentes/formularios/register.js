import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Container, Row, Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { schema } from '../../schemas/schema';

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
					<h1 style={{ fontSize: '20px', color: '#fff' }}>Registro</h1>
					<Form.Group controlId='Nombre'>
						<Form.Label className='mt-4' style={{ fontSize: '18px', color: '#ccc9d9' }}>
							Nombre
						</Form.Label>
						<Form.Control
							type='text'
							name='nombre'
							ref={register}
							className={errors.nombre && 'is-invalid'}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.nombre && (
							<Alert
								className='mt-2 mb-3 text-white'
								style={{
									backgroundColor: '#301a1e',
									borderColor: '#6f2a2b',
									borderRadius: 10,
									padding: '0.25rem 1.5rem',
									height: '35px',
								}}
							>
								{errors.nombre.message}
							</Alert>
						)}
					</Form.Group>

					<Form.Group controlId='Apellido'>
						<Form.Label style={{ fontSize: '18px', color: '#ccc9d9' }}>Apellido</Form.Label>
						<Form.Control
							type='text'
							name='apellido'
							ref={register}
							className={`form-control ${errors.apellido && 'is-invalid'}`}
							style={{
								borderRadius: 5,
								borderColor: '#313437',
								backgroundColor: '#0d1117',
								fontSize: '17px',
								color: '#ccc9d9',
							}}
						/>
						{errors.apellido && (
							<Alert
								className='mt-3 mb-3 text-white'
								style={{
									backgroundColor: '#301a1e',
									borderColor: '#6f2a2b',
									borderRadius: 10,
								}}
							>
								{errors.apellido.message}
							</Alert>
						)}
					</Form.Group>

					<Form.Group controlId='País'>
						<Form.Label style={{ fontSize: '18px', color: '#ccc9d9' }}>País</Form.Label>

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

						{errors.pais && (
							<Alert
								className='mt-3 mb-3 text-white'
								style={{
									backgroundColor: '#301a1e',
									borderColor: '#6f2a2b',
									borderRadius: 10,
								}}
							>
								{errors.pais.message}
							</Alert>
						)}
					</Form.Group>

					<Form.Group controlId='Email'>
						<Form.Label style={{ fontSize: '18px', color: '#ccc9d9' }}>Email</Form.Label>
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
							className={errors.password && 'is-invalid'}
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
						Registrar
					</Button>
				</Form>
			</Row>
		</Container>
	);
};

export default Register;
