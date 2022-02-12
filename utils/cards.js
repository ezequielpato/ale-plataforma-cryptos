import { URL_IMAGE } from '../config/constants';

export const cards = [
	{
		id: 1,
		imageURL: `${URL_IMAGE}/pics/masterclass.png`,
		title: 'Master Crypto Club',
		description:
			'Donde se encuentran todos los videos diseñado para que tu formación al termino de 1 año te vuelvas un profesional en la industria.',
		price: 500,
		percentage: 50,
		url: 'curso1',
	},
	{
		id: 2,
		imageURL: `${URL_IMAGE}/pics/noticias.png`,
		title: 'Master Crypto Noticias',
		description:
			'Es el área de noticias, eventos y todo lo relacionado con la comunidad charlas gratuitas, webinar en vivos, próximas master clases etc.',
		price: 200,
		percentage: 30,
		url: 'curso2',
	},
	{
		id: 3,
		imageURL: `${URL_IMAGE}/pics/capitalas.png`,
		title: 'Capital As',
		description:
			'Diseñado como formato ballena, aprovecharemos las oportunidades del mercado trabajando en equipo, fusionando conocimientos y contactos internacionales.',
		price: 350,
		percentage: 80,
		url: 'curso3',
	},
];
