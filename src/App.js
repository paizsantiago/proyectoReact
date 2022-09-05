
import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';

function App() {

  const stock = 10;
  const initial = 1;
  let totalStock = 0;

 
      

  function generarTitulo (){
    return <h1>Top movies, low price</h1>
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer generarTitulo={generarTitulo}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
