import { URL_IMAGE } from '../../config/constants';

const Section2 = () => {
	return (
		<div
			style={{
				backgroundImage: `url('${URL_IMAGE}/pics/bn_top1.png')`,
			}}
			className='main-conteiner main-bggrey'
		>
			<div className='main-wrap section2-wrap'>
				<h2 className='main-textlight'>
					Aprende lo que nadie más te puede enseñar, supera tus límites.
				</h2>
				<section className='section2-content main-textgrey2'>
					<div className='section2-content-div'>
						<h5 className='main-textlight'>Trabaja con las criptomonedas más rentable.</h5>
						<h6 className='main-textgrey211'>
							Es necesario tener conocimiento de todos los formatos y proyectos en constante
							crecimiento, no es solo BITCOIN también existen criptomonedas rentables y de
							gran capitalización que están cambiando la manera de invertir.
						</h6>
					</div>

					<div className='section2-content-div'>
						<h5 className='main-textlight'>Trabaja con diferentes protocolos. </h5>
						<h6 className='main-textgrey211'>
							No solo aprenderás de finanzas descentralizadas sino también de sistemas ya que
							para operar DeFi tienes que entender cómo funciona los conceptos, practicas y
							redes compatibles entre sí.
						</h6>
					</div>

					<div className='section2-content-div'>
						<h5 className='main-textlight'>Entrena tu mentalidad y confianza. </h5>
						<h6 className='main-textgrey211'>
							Tu perfil como inversor es tan importante como el conocimiento que desarrollas
							con tu formación, tienes que estar mentalizado al éxito siempre, pero también a
							la calma, pensar antes de actuar y sobre todo entender que es un mercado.
						</h6>
					</div>
				</section>
				<div className='section2-criptos'>
					<img src={`${URL_IMAGE}/pics/btc_ico.png`} alt='' />
					<img src={`${URL_IMAGE}/pics/eth_ico.png`} alt='' />
					<img src={`${URL_IMAGE}/pics/ada_ico.png`} alt='' />
					<img src={`${URL_IMAGE}/pics/bnb_ico.png`} alt='' />
					<img src={`${URL_IMAGE}/pics/sol_ico.png`} alt='' />
					<img src={`${URL_IMAGE}/pics/luna_ico.png`} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Section2;
