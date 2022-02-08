// Librería para barra de progreso
import { ProgressBar } from 'react-bootstrap';

// Data para cards de cursos
import { cards } from '../utils/cards';

const PostCard = ({ cards }) => (
	// Cuerpo completo de la carta
	<section className='card-wrap'>
		{/* Header imagen de la carta */}
		<div className='overflow card-img'>
			<img src={cards.imageURL} alt='' className='card-img-top' />
		</div>

		{/* Body contenido de la carta */}
		<section className='card-body'>
			{/* Titulo de la carta */}

			<h5>{cards.title}</h5>

			{/* Descripcion  */}
			<p>{cards.description}</p>

			{/* Barra de progreso */}
			{/* <p className='mt-4 mb-1 text-black-50' style={{ fontSize: '11px' }}>
				COMPLETADO
			</p>
			<ProgressBar
				className='mb-4'
				animated
				now={cards.percentage}
				label={`${cards.percentage}%`}
			/> */}
			{/* Curso dictado por */}
		</section>
		<div id='card-created-by'>
			<p>Alejandro Egea</p>
		</div>
	</section>
);

const Cards = () => {
	return (
		<div className='cards-container'>
			{cards.map((cards, id) => (
				<PostCard cards={cards} key={id} />
			))}
		</div>
	);
};

export default Cards;
