import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProviderStore } from './context/ContextStore';
import Home from './views/Home';
import NavBar from './components/NavBar';
import Producto from './views/Producto';

function App() {
   return (
      <>
         <ProviderStore>
            <BrowserRouter>
               {/* <NavBar /> */}
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/producto/:id" element={<Producto />} />
               </Routes>
            </BrowserRouter>
         </ProviderStore>
      </>
   );
}

export default App;
