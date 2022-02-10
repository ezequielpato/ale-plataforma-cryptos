import SectionZero from './Section0';
import SectionOne from './Section1';
import SectionTwo from './Section2';
import SectionThree from './Section3';
import SectionFour from './Section4';
import Contacto from './Contacto';
import SectionLast from './SectionLast';

const Main = () => {
	return (
		<section className='main-font'>
			<SectionZero />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Contacto />
			{/* Sección comentada temporalmente
			<SectionLast /> */}
		</section>
	);
};

export default Main;
