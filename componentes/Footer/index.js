import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiAiohttp } from 'react-icons/si';
const Footer = () => {
	return (
		<div className='footer-container' id='contact'>
			<div className='footer-wrap'>
				<section className='footer-links-container'>
					<h6 className='footer-h6'>Top</h6>
					<h6 className='footer-h6'>Mis Cursos</h6>
				</section>

				<p className='footer-master-tittle'>Master Crypto Club</p>

				<section className='footer-social-media'>
					{/* Sección Copyright */}
					<p className='footer-p'>
						Copyright Alejandro Egea © {new Date().getFullYear()} todos los derechos
						reservados.
					</p>

					{/* Social Icons */}

					{/* Icono Link de Instagram */}
					<section className='footer-links-group'>
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
			</div>
		</div>
	);
};

export default Footer;
