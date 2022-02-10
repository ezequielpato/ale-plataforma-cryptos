import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '/styles/cards.css';
import '/styles/main.css';
import '/styles/section0.css';
import '/styles/section1.css';
import '/styles/section2.css';
import '/styles/section3.css';
import '/styles/section4.css';
import '/styles/contacto.css';
import '/styles/footer.css';

// Libreria de Animaciones https://animate.style/
import 'animate.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com'></link>
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
