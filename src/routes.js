import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop/>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMin />} />
          </Route>
          <Route path="posts/:id/*" element={<Post />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
  );
}

export default AppRoutes;
