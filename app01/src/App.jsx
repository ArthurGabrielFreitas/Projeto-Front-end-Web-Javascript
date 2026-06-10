import React, { useEffect } from "react";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Formulario from "./componentes/Formulario/Formulario"
import Faq from "./componentes/Faq/Faq";
import Faq2 from "./componentes/Faq2/Faq2";
import Whatsapp from "./componentes/Whatsapp/Whatsapp";

function App() {

  return (
    <>
      <Header />
      <Main />
      <Formulario />
      {/* <Faq /> */}
      <Faq2 />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default App;
