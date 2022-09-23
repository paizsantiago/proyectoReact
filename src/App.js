
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import {CartProvider} from './context/CartContext';
import { ThemeProvider } from '@mui/material';
import {theme} from './themeMaterial/themeConfig';


function App() {

  return (
    <ThemeProvider theme={theme}>
        <CartProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
                <Route path='/detail/:categoriaId/:id' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
          </BrowserRouter>
        </CartProvider>
    </ThemeProvider>
  );
}

export default App;
