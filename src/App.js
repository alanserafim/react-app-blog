import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMim";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<Inicio/>}/>
         <Route path="/sobremin" element={<SobreMin/>}/>
         <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
