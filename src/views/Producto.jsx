import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useParams } from 'react-router-dom';

const Producto = () => {
   const { producto, obtenerProducto } = useContext(ContextStore);
   const [cargando, setcargando] = useState(true);
   const { id } = useParams();

   useEffect(() => {
      obtenerProducto(id);
      setcargando(false);
   }, [id]);
   return (
      <div>
         {cargando ? (
            <p>Cargando...</p>
         ) : producto === undefined ? (
            <p>Se ha producido un error en la carga</p>
         ) : (
            <div key={producto.id}>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                  }}
               >
                  <p className="text-center italic hover:not-italic">
                     {producto.title}
                  </p>
                  <div>
                     <img
                        className="h-96 w-72"
                        src={producto.image}
                        alt={producto.title}
                        style={{
                           justifyContent: 'center',
                        }}
                     />
                  </div>
               </div>
               <div>
                  <p>{producto.description}</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default Producto;
