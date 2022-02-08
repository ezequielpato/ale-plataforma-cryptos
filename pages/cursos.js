// Librería para barra de progreso
import { ProgressBar } from 'react-bootstrap';

// Data para cards de cursos
import { cards } from '../utils/cards';

const PostCard = ({ cards }) => (
	// Cuerpo completo de la carta
	<div className='card card-style text-dark col-md-2 m-4 p-0'>
		{/* Header imagen de la carta */}
		<div style={{ borderRadius: '10px 10px 0 0' }} className='overflow'>
			<img src={cards.imageURL} alt='' className='card-img-top' />
		</div>

		{/* Body contenido de la carta */}
		<div className='card-body p-3'>
			{/* Titulo de la carta */}

			<h5 className='text-dark font-weight-bold'>{cards.title}</h5>

			{/* Descripcion  */}
			<p style={{ fontSize: '13px', color: '#777' }}>{cards.description}</p>

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
			<p className='mb-0' style={{ fontSize: '12px' }}>
				Alejandro Egea
			</p>
		</div>
	</div>
);

const Blog = () => {
	return (
		<div className='d-flex justify-content-center'>
			{cards.map((cards, id) => (
				<PostCard cards={cards} key={id} />
			))}
		</div>
	);
};

export default Blog;
