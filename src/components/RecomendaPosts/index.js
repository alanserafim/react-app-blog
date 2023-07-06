import PostCard from "components/PostCard";
import styles from "./RecomendaPosts.module.css";

import React from "react";

export default function RecomendaPosts({ posts }) {
  return (
    <div className={styles.recomendadosContainer}>
      <h2 className={styles.tituloOutrosPosts}>
        Outros posts que você pode gostar:
      </h2>
      <ul className={styles.recomendadosPosts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
