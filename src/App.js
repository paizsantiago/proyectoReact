
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  function generarTitulo (){
    return <h1>Top movies, low price</h1>
  }

  return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
