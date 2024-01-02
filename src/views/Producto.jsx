import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useParams } from 'react-router-dom';

const Producto = () => {
   const { producto, obtenerProducto, agregarProducto } =
      useContext(ContextStore);
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
            <p>Se produjo un error en la carga</p>
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
                  <h2
                     className="text-center italic hover:not-italic font-black"
                     style={{ marginTop: '50px', paddingTop: '100px' }}
                  >
                     {producto.title}
                  </h2>
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '50px',
                     }}
                  >
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                        }}
                     >
                        <img
                           style={{ width: '300px' }}
                           src={producto.image}
                           alt={producto.title}
                        />
                     </div>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           flexDirection: 'column',
                           marginLeft: '60px',
                        }}
                     >
                        <select
                           className="form-select"
                           aria-label="Default select example"
                        >
                           <option defaultValue="Selecciona una talla">
                              Selecciona una talla
                           </option>
                           <option value="S">S</option>
                           <option value="M">M</option>
                           <option value="L">L</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div className="descripcion">
                  <p style={{ fontSize: 'larger', textAlign: 'center' }}>
                     {producto.description}
                  </p>
                  <div
                     style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                     <button
                        className="btn btn-primary text-center"
                        onClick={() => agregarProducto(producto)}
                     >
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
