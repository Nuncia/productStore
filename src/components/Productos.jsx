import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconHeart from './IconHeart';
import { ContextStore } from '../context/ContextStore';

const Productos = ({ productos }) => {
   const { incrementarLikes, listaProductos } = useContext(ContextStore);
   const [cargando, setcargando] = useState(false);
   const navigate = useNavigate();
   const mostrarProducto = (id) => {
      navigate(`producto/${id}`);
      console.log(listaProductos);
   };

   useEffect(() => {}, []);

   return (
      <div>
         <div className="cards">
            {cargando ? (
               <p>Cargando...</p>
            ) : (
               productos?.map((item) => (
                  <div
                     key={item.id}
                     style={{
                        height: '400px',
                        width: '18rem',
                        backgroundColor: '#f8f9fa',
                        flexGrow: '2',
                     }}
                  >
                     <img
                        src={item.image}
                        alt={item.title}
                        className="imagen"
                        onClick={() => incrementarLikes(item.id)}
                     />
                     <IconHeart
                        className="corazon"
                        filled={item.likes > 0 ? true : false}
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
                        Ver
                     </button>
                  </div>
               ))
            )}
         </div>
         {/* <button id="btnArriba" className="btn btn-primary">
            <strong>△</strong>
         </button> */}
      </div>
   );
};

Productos.propTypes = {
   productos: PropTypes.array,
};

export default Productos;
