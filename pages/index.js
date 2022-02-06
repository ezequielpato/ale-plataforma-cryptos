import Head from "next/head";
import Image from "next/image";
import Formulario from "../componentes/formulario";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Formulario />
    </div>
  );
}
