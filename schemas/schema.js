import * as yup from 'yup';

export const schema = yup.object().shape({
	nombre: yup.string().required('Campo nombre es obligatorio'),
	apellido: yup.string().required('Campo apellido es obligatorio'),
	pais: yup.string().required('Campo país es obligatorio'),
	email: yup.string().required('Campo email es obligatorio'),
	password: yup.string().required('Campo contraseña es obligatorio'),
});
