import React, { useEffect } from "react";
import Home from "./componentes/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contatos from "./componentes/Contatos/Contatos";
import Prototipo from "./componentes/Prototipo/Prototipo";
import Menu from "./componentes/Menu/Menu";

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/prototipo" element={<Prototipo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
