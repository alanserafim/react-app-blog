import React from 'react'
import styles from './Post.module.css'

export default function Post({post}) {

  const path =  `./posts/${post.id}/capa.png`

  return (
    <div className={styles.post}>
        <img
            className={styles.capa}
            src={path}
            alt="imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>Ler</button>
    </div>
  )
}
