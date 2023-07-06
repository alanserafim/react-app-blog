import React from "react";
import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import RecomendaPosts from "components/RecomendaPosts";
import styles from './Post.module.css'
import PostCard from "components/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    //filtrando post diferentes do atual
    .filter((post)=> post.id !== Number(parametros.id))
    //ordenando em ordem descrescente
    .sort((a, b)=> b.id - a.id)
    //separando somente 4 posições
    .slice(0, 4)

  
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <>
            <PostModelo
              fotoCapa={`/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <RecomendaPosts posts={postsRecomendados}/>
            </PostModelo>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
