import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useParams } from 'react-router-dom';

const Producto = () => {
   const { producto, obtenerProducto } = useContext(ContextStore);
   const [cargando, setcargando] = useState(true);
   const { id } = useParams();

   useEffect(() => {
      obtenerProducto(id);
      console.log('obtenerProducto');
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
                  className="imagen__producto"
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                  }}
               >
                  <h2 className="text-center italic hover:not-italic">
                     {producto.title}
                  </h2>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '50px',
                     }}
                  >
                     <img
                        className="h-96 w-72"
                        src={producto.image}
                        alt={producto.title}
                     />
                  </div>
               </div>
               <div className="descripcion">
                  <p style={{ fontSize: 'larger', textAlign: 'center' }}>
                     {producto.description}
                  </p>
                  <div
                     style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                     <button className="btn btn-primary text-center">
                        Agregar
                     </button>
                     <p>
                        <strong>${producto.price}</strong>
                     </p>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Producto;
