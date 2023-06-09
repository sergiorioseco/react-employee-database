import Formulario from './components/Formulario.jsx'
import BaseColaboradores from './assets/BaseColaboradores.js'
import './App.css'

function App() {
  return (
    <>
    <Formulario listadoInicial={BaseColaboradores}></Formulario>
    </>
  )
}
export default App
