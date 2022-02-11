// import Header from '../componentes/Header';
import Navbar from '../componentes/Navbar';
import Main from '../componentes/Main';
import Login from '../componentes/Formularios/Login';
import Register from '../componentes/Formularios/Register';
import Footer from '../componentes/Footer';
import Terms from '../componentes/Terms/';
import Privacy from '../componentes/Privacy';
import Cookies from '../componentes/Cookies';

export default function Home() {
	return (
		<section className='text-light'>
			<Navbar />
			<Main />
			{/* <Terms /> */}
			{/* <Privacy /> */}
			{/* <Cookies /> */}
			{/* <Register /> */}
			{/* <Login /> */}
			<Footer />
		</section>
	);
}
