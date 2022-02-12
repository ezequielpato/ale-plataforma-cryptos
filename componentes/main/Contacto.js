import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneForward } from 'react-icons/bs';

const Contacto = () => {
	return (
		<div className='main-conteiner contacto-container main-bggrey3'>
			<div className='main-wrap contacto-wrap'>
				<div className='contacto-box main-bggrey2'>
					<h4 id='contacto-title' className='main-textlight'>
						contacto
					</h4>
					<h4 id='contacto-subtitle' className='main-textgrey2'>
						MASTER CRYPTO CLUB
					</h4>

					{/* Datos de contacto */}
					<div className='contacto-icon-div'>
						<FaRegAddressCard className='contacto-hover' id='contacto-address' />
						<h4 className='main-textgrey3'>Dirección:</h4>
					</div>
					<h6 className='main-textgrey '>solicitar dato...</h6>

					<div className='contacto-icon-div'>
						<HiOutlineMail className='contacto-hover' id='contacto-email' />
						<h4 className='main-textgrey3'>Email:</h4>
					</div>
					<h6 className='main-textgrey '>info@mastercrypto-club.com</h6>

					<div className='contacto-icon-div'>
						<BsTelephoneForward className='contacto-hover' id='contacto-phone' />
						<h4 className='main-textgrey3'>Teléfonos:</h4>
					</div>

					<div id='contacto-contactos'>
						<div className='contacto-telefonicos '>
							<div className='contacto-ico-contact'>
								<AiOutlineWhatsApp id='contacto-wapp' />
								<h6 className='main-textlight'>Enzo:</h6>
							</div>
							<div id='contacto-num'>
								<h6 className='main-textgrey'>+54 348 420-4565</h6>
							</div>
						</div>

						<div className='contacto-telefonicos'>
							<div className='contacto-ico-contact'>
								<AiOutlineWhatsApp id='contacto-wapp' />
								<h6 className='main-textlight'>Seba:</h6>
							</div>
							<div id='contacto-num'>
								<h6 className='main-textgrey'>+54 223 541-9299</h6>
							</div>
						</div>

						<div className='contacto-telefonicos'>
							<div className='contacto-ico-contact'>
								<AiOutlineWhatsApp id='contacto-wapp' />
								<h6 className='main-textlight'>Martín:</h6>
							</div>
							<div id='contacto-num'>
								<h6 className='main-textgrey'>+54 3496 54-5377</h6>
							</div>
						</div>

						<div className='contacto-telefonicos'>
							<div className='contacto-ico-contact'>
								<AiOutlineWhatsApp id='contacto-wapp' />
								<h6 className='main-textlight'>Lucas:</h6>
							</div>
							<div id='contacto-num'>
								<h6 className='main-textgrey'>+54 11 5942-6849</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacto;
