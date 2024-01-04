import { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { ContextStore } from '../context/ContextStore';
import Buscador from '../components/Buscador';
import Productos from '../components/Productos';
import Carrusel from '../components/Carrusel';

const Home = () => {
   const { productos, obtenerProductos } = useContext(ContextStore);
   const [productosFiltrados, setProductosFiltrados] = useState();

   const filterProductos = (search) => {
      // console.log(search);
      const filtrados = productos.filter((prod) =>
         prod.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductosFiltrados(filtrados);
   };

   function scrollArriba() {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }

   window.onscroll = () => {
      const botonScroll = document.getElementById('btnAceptar');
      console.log(botonScroll);
      if (
         document.body.scrollTop > 20 ||
         document.documentElement.scrollTop > 20
      ) {
         botonScroll.style.opacity = 1;
      } else {
         botonScroll.style.opacity = 0;
      }
   };

   useEffect(() => {
      obtenerProductos();
   }, []);

   return (
      <div>
         <div
            style={{
               display: 'flex',
               flexWrap: 'wrap',
               justifyContent: 'center',
               flexDirection: 'column',
               textAlign: 'center',
               position: 'relative',
            }}
         >
            <Buscador
               style={{ paddingLeft: 'auto', marginTop: '100px' }}
               onSearch={filterProductos}
            />
            <Carrusel />
            <div>
               <h2
                  className="text-center"
                  style={{
                     color: 'rgb(185, 5, 5)',
                     fontWeight: 'bold',
                     fontSize: '53px',
                     paddingTop: '70px',
                     marginTop: '80px',
                  }}
               >
                  ProductStore
               </h2>
               <Carrusel />
               <div style={{ position: 'absolute', zIndex: -1 }}>
                  <Productos
                     productos={
                        productosFiltrados?.length > 0
                           ? productosFiltrados
                           : productos
                     }
                  />
               </div>
            </div>
            <button
               id="btnArriba"
               className="btn btn-primary"
               onClick={scrollArriba}
            >
               <strong>△</strong>
            </button>
         </div>
      </div>
   );
};

export default Home;
