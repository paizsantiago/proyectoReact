
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const stock = 10;
  const initial = 1;
  let totalStock = 0;

  const onAdd = (cantidad) => totalStock === 10 ? alert("Stock Agotado") : totalStock += cantidad;
      

  function generarTitulo (){
    return <h1>Las mejores peliculas al mejor precio</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer generarTitulo={generarTitulo}/>
      <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
    </div>
  );
}

export default App;
