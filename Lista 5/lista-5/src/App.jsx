import Secao from "./components/Secao";
import CardIFTM from './components/CardIFTM';
import CardGrid from './components/CardGrid'

export default function App() {
  return (
    <div>
      <Secao
        titulo="Acesso à Informação"
        subtitulo="Veja dados de transparência e governança"
      />
      <CardIFTM texto="Plano de Desenvolvimento Institucional"/>
      <CardGrid />
    </div>
  )
}
