// import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
import Main from '../componentes/Main';
import Login from '../componentes/Formularios/Login';
import Register from '../componentes/Formularios/Register';
import Footer from '../componentes/Footer';
import Cards from '../componentes/Cards';

export default function Home() {
	return (
		<section className='text-light'>
			{/** Header Component */}
			<Navbar />

			{/* Primary Main Component */}
			<Cards />
			<Main />

			{/** Register and Login Components */}
			<Register />
			<Login />

			{/* Footer Component */}
			<Footer />
		</section>
	);
}
