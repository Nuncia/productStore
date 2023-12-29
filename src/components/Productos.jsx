import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconHeart from './IconHeart';

const Productos = ({ productos }) => {
   const [cargando, setcargando] = useState(false);
   const navigate = useNavigate();
   const mostrarProducto = (id) => {
      navigate(`producto/${id}`);
   };

   useEffect(() => {
      console.log(productos);
   }, []);

   return (
      <div className="cards">
         {cargando ? (
            <p>Cargando...</p>
         ) : (
            productos?.map((item) => (
               <div key={item.id} style={{ height: '400px', width: '18rem' }}>
                  <img src={item.image} alt={item.title} className="imagen" />
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
                     Agregar
                  </button>
               </div>
            ))
         )}
      </div>
   );
};

Productos.propTypes = {
   productos: PropTypes.array,
};

export default Productos;
