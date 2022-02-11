import { FaInstagram } from 'react-icons/fa';
import { SiAiohttp } from 'react-icons/si';

import { URL_IMAGE } from '/config/constants';

const Footer = () => {
	return (
		<div className='footer-container' id='contact'>
			<div className='footer-wrap'>
				{/* Image Logo A Egea */}
				<img className='footer-img' src={`${URL_IMAGE}/pics/logo3.png`} alt='' />

				{/* Footer Primary tittle */}
				<p className='footer-master-tittle'>Master Crypto Club</p>

				{/* Social Media Section */}
				<section className='footer-social-media'>
					{/* Social Icons Section*/}
					<section className='footer-links-group'>
						{/* Icono Link de Instagram */}
						<div className='footer-link'>
							<a
								className='footer-social-icons-links'
								href='https://www.instagram.com/ale_egea/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
							>
								<FaInstagram />
							</a>
							<p className='footer-link-p'>Instagram</p>
						</div>

						{/* Icono Link de Webpage */}
						<div className='footer-link'>
							<a
								className='footer-social-icons-links'
								href='https://vip.aleegeacrypto.com/ig-egea'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Webpage'
							>
								<SiAiohttp />
							</a>
							<p className='footer-link-p'>Web Page</p>
						</div>
					</section>
				</section>

				{/* Politics Section */}
				<section className='footer-links-container'>
					<h6 className='footer-h6'>Terminos</h6>
					<h6 className='footer-h6'>Privacidad</h6>
					<h6 className='footer-h6'>Cookies</h6>
				</section>

				<section className='footer-copyright-section'>
					{/* Copyright */}
					<p className='footer-p'>
						Copyright Alejandro Egea © {new Date().getFullYear()} todos los derechos
						reservados.
					</p>

					{/* Created By */}
					<a
						id='footer-created-by'
						href='mailto:ezequiel.salomon@gmail.com'
						rel='noopener noreferrer'
					>
						Created by : EAS
					</a>
				</section>
			</div>
		</div>
	);
};

export default Footer;
