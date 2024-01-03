import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ContextStore } from '../context/ContextStore';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carrusel() {
   const { productos } = useContext(ContextStore);
   const [cargando, setCargando] = useState(true);
   // const [slides, setSlides] = useState([{}]);

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
            <Carousel>
               {productos.map((producto, index) => (
                  <Carousel.Item key={producto.id}>
                     <img
                        className="d-block w-100"
                        src={producto.image}
                        alt={`Slide ${index}`}
                     />
                     <Carousel.Caption>
                        <h3>{producto.title}</h3>
                        <p>{producto.description}</p>
                     </Carousel.Caption>
                  </Carousel.Item>
               ))}
            </Carousel>
         ) : (
            ''
         )}
      </>
   );
}

export default Carrusel;
