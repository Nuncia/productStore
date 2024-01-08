import { useContext, useEffect } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useParams } from 'react-router-dom';
import Productos from '../components/Productos';

const Categoria = () => {
   const { buscarCategoria, listaCategoria, obtenerProductos } =
      useContext(ContextStore);
   const { categoria } = useParams();

   useEffect(() => {
      obtenerProductos();
      buscarCategoria(categoria);
      if (listaCategoria === 0) {
         alert('Error al cargar');
      } else {
         return;
      }
   }, [categoria]);

   return (
      <div>
         <h2
            style={{
               paddingTop: '70px',
               textAlign: 'center',
               color: 'rgb(185, 5, 5)',
               fontWeight: 'bold',
               fontSize: '53px',
               fontFamily: 'fantasy',
            }}
         >
            ProductStore
         </h2>
         <Productos productos={listaCategoria} />
      </div>
   );
};

export default Categoria;
