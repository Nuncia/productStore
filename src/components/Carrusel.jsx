import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ContextStore } from '../context/ContextStore';
import { useNavigate } from 'react-router-dom';

function Carrusel() {
   const { productos } = useContext(ContextStore);
   const [cargando, setCargando] = useState(true);
   const navigate = useNavigate();

   const buscarProducto = (id) => {
      navigate(`producto/${id}`);
   };

   useEffect(() => {
      if (productos) {
         setCargando(false);
      } else {
         setCargando(true);
         return;
      }
   }, []);
   return (
      <>
         {cargando ? (
            <div></div>
         ) : (
            <div style={{ top: '175px' }}>
               <Carousel data-bs-theme="dark" interval={2000}>
                  {productos.map((producto) => (
                     <Carousel.Item interval={1000} key={producto.id}>
                        <img
                           style={{ width: '100px', height: '100px' }}
                           className="d-block"
                           src={producto.image}
                           alt={producto.id}
                           onClick={() => buscarProducto(producto.id)}
                        />
                        <Carousel.Caption>
                           {/* <p style={{ color: 'black' }}>{producto.title}</p> */}
                        </Carousel.Caption>
                     </Carousel.Item>
                  ))}
               </Carousel>
            </div>
         )}
      </>
   );
}

export default Carrusel;
