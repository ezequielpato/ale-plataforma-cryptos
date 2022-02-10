import { URL_IMAGE } from '../../config/constants';

const Section1 = () => {
	return (
		<div className='main-conteiner main-bggrey2'>
			<div className='main-wrap '>
				<h2 className='main-textlight'>¿Que es el Master Crypto?</h2>
				<h5 className='main-textgrey3'>
					Es un sistema de formación intensiva diseñado para ayudarte a alcanzar tus objetivos
					con las criptomonedas.
				</h5>
				<h5 className='main-textgrey2'>
					Ponemos todo nuestro conocimiento en información única para tu conocimiento,
					estrategias únicas que nadie conoce para que puedas utilizar de manera simple y
					duplicable.
				</h5>
				<img className='section1-img' src={`${URL_IMAGE}/pics/logomaster1.png`} alt='' />
			</div>
		</div>
	);
};

export default Section1;
