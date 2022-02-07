import * as yup from 'yup';

export const schema = yup.object().shape({
	nombre: yup.string().required('Por favor introduzca su nombre'),
	apellido: yup.string().required('Por favor introduzca su apellido'),
	pais: yup.string().required('Por favor introduzca su país'),
	email: yup.string().email().required('Por favor introduzca su email'),
	password: yup.string().required('Por favor introduzca su contraseña'),
});
