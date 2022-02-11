import { URL_IMAGE } from '../../config/constants';
import { URL_PDFS } from '../../config/constants';

const Pdfs = () => {
	return (
		<div className='main-conteiner'>
			<div className='main-wrap pdfs-wrap'>
				<h5 className='main-textlight'>Complemento de estudio</h5>
				{/* Content */}
				<div className='pdfs-content'>
					{/* PDF File line */}
					<div className='pdfs-line'>
						<div className='pdfs-icons'>
							<img className='pdfs-ico' src={`${URL_IMAGE}/pics/pdf_ico.png`} alt='' />
						</div>
						<div className='pdfs-file'>
							<a href={`${URL_PDFS}/01_Analisis_Tecnico.zip`}>
								<h5 id='pdfs-file'>01 Analisis Técnico</h5>
							</a>
						</div>
					</div>

					<div className='pdfs-line'>
						<div className='pdfs-icons'>
							<img className='pdfs-ico' src={`${URL_IMAGE}/pics/pdf_ico.png`} alt='' />
						</div>
						<div className='pdfs-file'>
							<a href={`${URL_PDFS}/02_Robert_Kiyosaki.zip`}>
								<h5 id='pdfs-file'>02 Robert Kiyosaki</h5>
							</a>
						</div>
					</div>

					<div className='pdfs-line'>
						<div className='pdfs-icons'>
							<img className='pdfs-ico' src={`${URL_IMAGE}/pics/pdf_ico.png`} alt='' />
						</div>
						<div className='pdfs-file'>
							<a href={`${URL_PDFS}/03_Ondas_Elliot.zip`}>
								<h5 id='pdfs-file'>03 Ondas Elliot</h5>
							</a>
						</div>
					</div>

					<div className='pdfs-line'>
						<div className='pdfs-icons'>
							<img className='pdfs-ico' src={`${URL_IMAGE}/pics/pdf_ico.png`} alt='' />
						</div>
						<div className='pdfs-file'>
							<a href={`${URL_PDFS}/04_Fibonacci.zip`}>
								<h5 id='pdfs-file'>04 Fibonacci</h5>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pdfs;
