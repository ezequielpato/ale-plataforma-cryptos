import { URL_IMAGE } from '../config/constants';

export const cards = [
	{
		id: 1,
		imageURL: `${URL_IMAGE}/pics/masterclass.jpg`,
		title: 'Mastar Class',
		description: 'La capacitación más completa en el mundo crypto',
		price: 500,
		percentage: 50,
		url: 'curso1',
	},
	{
		id: 2,
		imageURL: `${URL_IMAGE}/pics/noticias.jpg`,
		title: 'Noticias y eventos',
		description:
			'Toda la imformación de los eventos internacionales más importantes y prestigiosos',
		price: 200,
		percentage: 30,
		url: 'curso2',
	},
	{
		id: 3,
		imageURL: `${URL_IMAGE}/pics/capitalas.jpg`,
		title: 'Capitalas',
		description: 'La mejor opción a la hora de invertir tu capital. Conoce nuestro fondo',
		price: 350,
		percentage: 80,
		url: 'curso3',
	},
];
