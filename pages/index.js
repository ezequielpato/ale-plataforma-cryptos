// import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
import Header from '../componentes/Header';
import SectionOne from '../componentes/SectionOne';
import SectionTwo from '../componentes/SectionTwo';
import SectionThree from '../componentes/SectionThree';
import Login from '../componentes/formularios/Login';
import Register from '../componentes/formularios/Register';
import Footer from '../componentes/Footer';

export default function Home() {
	return (
		<>
			{/** Header Component */}
			<Navbar />
			<Header />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<Footer />

			{/* <Header /> */}
			{/** Register and Login Components */}
			<Register />
			<Login />
		</>
	);
}
