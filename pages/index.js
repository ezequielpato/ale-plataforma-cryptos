// import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
import Main from '../componentes/main';
import Login from '../componentes/formularios/Login';
import Register from '../componentes/formularios/Register';
import Footer from '../componentes/Footer';

export default function Home() {
	return (
		<section className='text-light'>
			{/** Header Component */}
			<Navbar />

			{/* Primary Main Component */}
			<Main />

			{/** Register and Login Components */}
			{/* <Register /> */}
			<Login />

			{/* Footer Component */}
			<Footer />
		</section>
	);
}
