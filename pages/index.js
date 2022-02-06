import Login from '../componentes/formularios/login';
import Register from '../componentes/formularios/register';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Register />
			<Login />
		</div>
	);
}
