import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProviderStore } from './context/ContextStore';
import Home from './views/Home';
import NavBar from './components/NavBar';
import Producto from './views/Producto';
import LogIn from './views/LogIn';
import Carrito from './components/Carrito';
import Formulario from './views/Formulario';

function App() {
   return (
      <>
         <ProviderStore>
            <BrowserRouter>
               <NavBar />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/producto/:id" element={<Producto />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/nuevoUsuario" element={<Formulario />} />
                  <Route path="/carrito" element={<Carrito />} />
               </Routes>
            </BrowserRouter>
         </ProviderStore>
      </>
   );
}

export default App;
