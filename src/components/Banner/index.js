import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Salut, Monde.</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Alan Serafim, estudante de
          Desenvolvimento de Software. Aqui compartilho vários conhecimentos e
          curiosadades, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Fotografia do autor do blog: Alan Serafim"
        />
      </div>
    </div>
  );
}
