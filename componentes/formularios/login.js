import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Container, Row, Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { schema } from '../../schemas/schema';

import paises from '../../utils/paises';

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
					<h1 style={{ fontSize: '20px', color: '#fff' }}>Login</h1>
					<Form.Group controlId='Email'>
						<Form.Label className='mt-4' style={{ fontSize: '18px', color: '#abb3ba' }}>
							Email
						</Form.Label>
						<Form.Control
							type='email'
							name='email'
							ref={register}
							className={errors.email && 'border-danger'}
							style={{ borderRadius: 5 }}
						/>
						{errors.email && (
							<Alert
								className='mt-3 mb-3 border-danger text-white'
								style={{ backgroundColor: '#301a1e', borderRadius: 10 }}
							>
								{errors.email.message}
							</Alert>
						)}
					</Form.Group>

					<Form.Group controlId='Contraseña'>
						<Form.Label style={{ fontSize: '18px', color: '#abb3ba' }}>Contraseña</Form.Label>
						<Form.Control
							type='password'
							name='password'
							ref={register}
							className={errors.password && 'border-danger'}
							style={{ borderRadius: 5 }}
						/>
						{errors.password && (
							<Alert
								className='mt-3 mb-3 border border-danger text-white'
								style={{ backgroundColor: '#301a1e', borderRadius: 10 }}
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
			</Row>
		</Container>
	);
};

export default Login;
