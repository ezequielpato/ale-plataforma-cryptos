import { URL_IMAGE } from '../../config/constants';

const Section0 = () => {
	return (
		<div
			className='section0-conteiner'
			style={{
				backgroundImage: `linear-gradient(to top, rgb(19, 20, 26, 1), rgba(0, 0, 0, 0.1)), url('${URL_IMAGE}/pics/top4.png')`,
			}}
		>
			<section className='section0-wrap animate__animated animate__fadeInUp'>
				<h1>Con muchos años de experiencia a tu disposición.</h1>
				<h2>Alcanza tu máximo potencial.</h2>
				<h5>Vive la vida que sueñas, vive crypto.</h5>
			</section>
		</div>
	);
};

export default Section0;
