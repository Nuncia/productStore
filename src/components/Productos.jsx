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
      // console.log(id);
      // if (typeof id === 'string') {
      //    console.log('es string');
      // } else {
      //    console.log('no es string');
      // }
      navigate(`/producto/${id}`);
   };

   // useEffect(() => {
   //    console.log(productos);
   //    productos > 0 ? setcargando(false) : setcargando(true);
   // }, []);
   return (
      <div
      // style={{ marginTop: '300px' }}
      >
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
                        // flexGrow: '2',
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
      </div>
   );
};

Productos.propTypes = {
   productos: PropTypes.array,
};

export default Productos;
