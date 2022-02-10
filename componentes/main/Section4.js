import { BsPatchCheckFill } from 'react-icons/bs';

const Section4 = () => {
	return (
		<div className='main-conteiner main-bggrey'>
			<div className='main-wrap section4-wrap'>
				<h2 className='main-textlight'>¿En que consiste la membresía?</h2>

				<div className='section4-box main-bggrey1'>
					<h6 id='section4-subtitle' className='main-textlight'>
						DURA 1 año.
					</h6>
					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Acceso total a la plataforma</h4>
					</div>
					<h6 className='main-textgrey '>A todas las áreas mencionadas anteriormente</h6>

					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Curso completo a profesional</h4>
					</div>
					<h6 className='main-textgrey'>
						Empezamos desde el nivel cero que es una criptomoneda hasta el nivel mas alto
						avanzado entender estrategias DeFi.
					</h6>

					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Master clases en vivo </h4>
					</div>
					<h6 className='main-textgrey'>Damos clases en profundidad sobre temas puntuales.</h6>

					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Mentorías privadas</h4>
					</div>
					<h6 className='main-textgrey'>
						Otorgamos mentorías privadas, personalizadas e individuales con personal
						calificado del equipo de trabajo.
					</h6>

					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Canal de señales</h4>
					</div>
					<h6 className='main-textgrey'>
						El único canal de señales que otorga TODO, señales spot y futuros con diferentes
						traders, ICOs, launchpad, private sale, listado hodl, listado yield farming, todas
						las herramientas.
					</h6>

					<div className='section4-icon-div'>
						<BsPatchCheckFill className='section4-icon' />
						<h4 className='main-textlight'>Soporte técnico</h4>
					</div>
					<h6 className='main-textgrey'>
						único equipo de trabajo que se encarga de ayudar y solucionar cualquier duda en el
						momento.
					</h6>
				</div>
			</div>
		</div>
	);
};

export default Section4;
