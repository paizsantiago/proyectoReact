
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  function generarTitulo (){
    return <h1>Las mejores peliculas al mejor precio</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer generarTitulo={generarTitulo}/>
    </div>
  );
}

export default App;
