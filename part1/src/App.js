import './App.css';
import Mensaje from './Mensaje';

const Titulo = () => {
  return <h1>Hola mundo</h1>
}

const App = () => {
  return (
    <div className="App">
      <Titulo />
      <Mensaje color = "red" message = "Subtitulo de la página" />
    </div>
  )
}

export default App;
