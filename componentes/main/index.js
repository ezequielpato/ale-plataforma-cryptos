import Header from '/componentes/main/Header';
import SectionOne from '/componentes/main/SectionOne';
import SectionTwo from '/componentes/main/SectionTwo';
import SectionThree from '/componentes/main/SectionThree';

const Main = () => {
	return (
		<section className=' ml-lg-5'>
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</section>
	);
};

export default Main;
