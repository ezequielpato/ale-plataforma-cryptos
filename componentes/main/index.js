import Header from '/componentes/main/Header';
import SectionOne from '/componentes/main/SectionOne';
import SectionTwo from '/componentes/main/SectionTwo';
import SectionThree from '/componentes/main/SectionThree';
import SectionLast from './SectionLast';

const Main = () => {
	return (
		<section>
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionLast />
		</section>
	);
};

export default Main;
