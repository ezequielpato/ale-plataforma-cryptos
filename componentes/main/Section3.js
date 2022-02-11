import Cards from '../Main/Cards';

const Section3 = () => {
	return (
		<div className='main-conteiner main-bggrey2'>
			<div className='main-wrap section3-wrap'>
				<h2 className='main-textlight'>¿Como funciona el Club Master Crypto?</h2>
				<h5 className='main-textgrey3'>
					Contamos con la plataforma de internet para que puedas llevar adelante cómodamente tu
					avance de clases pregrabadas y catalogadas para una mejor disposición de la
					información desde nivel principiante, nivel intermedio hasta nivel avanzado.
				</h5>
				<h5 className='main-textgrey2'>
					También se suben tutoriales completos para que sea mas fácil llevar adelante
					cualquier actividad nueva.
				</h5>
				<h4 id='section3-subtitle' className='main-textlight'>
					Dentro de la plataforma encontraras:
				</h4>

				<Cards />
				<section className='section3-content main-textgrey2'></section>
			</div>
		</div>
	);
};

export default Section3;
