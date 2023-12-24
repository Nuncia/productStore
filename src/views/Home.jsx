import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextStore } from '../context/ContextStore';

const Productos = () => {
   const { productos, obtenerProductos } = useContext(ContextStore);
   const [cargando, setcargando] = useState(true);
   const navigate = useNavigate();

   const mostrarProducto = (id) => {
      navigate(`producto/${id}`);
   };

   useEffect(() => {
      if (productos.length === 0) {
         obtenerProductos();
         console.log(productos);
         setcargando(false);
      } else {
         setcargando(false);
      }
   }, []);
   return (
      <div
         style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
         }}
      >
         <h2 className="text-center">Departamento hombre</h2>
         <div className="cards">
            {cargando ? (
               <p>Cargando...</p>
            ) : (
               productos?.map((item) => (
                  <div
                     key={item.id}
                     style={{ height: '400px', width: '18rem' }}
                  >
                     <img
                        src={item.image}
                        alt={item.title}
                        className="imagen"
                     />
                     <p className="titulo">{item.title}</p>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between',
                        }}
                     >
                        <p>{item.category}</p>
                        <p>
                           <strong>${item.price}</strong>
                        </p>
                     </div>
                     <button
                        className="btn btn-primary"
                        onClick={() => mostrarProducto(item.id)}
                     >
                        Agregar
                     </button>
                  </div>
               ))
            )}
         </div>
      </div>
   );
};

export default Productos;
