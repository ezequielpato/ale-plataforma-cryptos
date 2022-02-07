import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '/styles/footer.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
