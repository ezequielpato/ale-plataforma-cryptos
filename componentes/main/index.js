import SectionZero from './Section0';
import SectionOne from './Section1';
import SectionTwo from './Section2';
import SectionThree from './Section3';
import SectionFour from './Section4';
import Contacto from './Contacto';

const Main = () => {
	return (
		<section className='main-font'>
			<SectionZero />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Contacto />
		</section>
	);
};

export default Main;
