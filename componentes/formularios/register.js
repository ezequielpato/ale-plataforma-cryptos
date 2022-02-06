import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { Container, Alert, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { schema } from '../../schemas/schema';

import paises from '../../utils/paises';

console.log(schema);

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
			<Form onSubmit={handleSubmit(registro)}>
				<Form.Group controlId='Nombre'>
					<Form.Label>Nombre</Form.Label>
					<Form.Control type='text' name='nombre' ref={register} />
					{errors.nombre && (
						<Alert variant='danger' className='mt-3 mb-3'>
							{errors.nombre.message}
						</Alert>
					)}
				</Form.Group>

				<Form.Group controlId='Apellido'>
					<Form.Label>Apellido</Form.Label>
					<Form.Control type='text' name='apellido' ref={register} />
					{errors.apellido && (
						<Alert variant='danger' className='mt-1 mb-3'>
							{errors.apellido.message}
						</Alert>
					)}
				</Form.Group>

				<Form.Group controlId='País'>
					<Form.Label>País</Form.Label>

					<select className='form-control' name='pais' ref={register}>
						{paises.map((post, i) => (
							<option value={post} key={i}>
								{post}
							</option>
						))}
					</select>

					{errors.pais && (
						<Alert variant='danger' className='mt-3 mb-3'>
							{errors.pais.message}
						</Alert>
					)}
				</Form.Group>

				<Form.Group controlId='Email'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' name='email' ref={register} />
					{errors.email && (
						<Alert variant='danger' className='mt-3 mb-3'>
							{errors.email.message}
						</Alert>
					)}
				</Form.Group>

				<Form.Group controlId='Contraseña'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type='password' name='password' ref={register} />
					{errors.password && (
						<Alert variant='danger' className='mt-3 mb-3'>
							{errors.password.message}
						</Alert>
					)}
				</Form.Group>

				<Button variant='danger' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Register;
