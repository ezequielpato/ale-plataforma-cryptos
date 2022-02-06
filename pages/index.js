import Head from 'next/head';
import Image from 'next/image';
import Register from '../componentes/formularios/register';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Register />
		</div>
	);
}
