import Secao from "./components/Secao";
import CardIFTM from './components/CardIFTM';

export default function App() {
  return (
    <div>
      <Secao
        titulo="Acesso à Informação"
        subtitulo="Veja dados de transparência e governança"
      />
      <CardIFTM texto="Plano de Desenvolvimento Institucional"/>
    </div>
  )
}
