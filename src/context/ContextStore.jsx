import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextStore = createContext();

export const ProviderStore = ({ children }) => {
   const [productos, setproductos] = useState([]);
   const [producto, setproducto] = useState({});

   const obtenerProductos = useCallback(async () => {
      try {
         const url = 'https://fakestoreapi.com/products';
         const respuesta = await fetch(url);
         const datos = await respuesta.json();
         const Product = datos.map((item) => ({ ...item, cantidad: 0 }));
         console.log(Product);
         setproductos(Product);
      } catch (e) {
         console.log(e.message);
      }
   });

   const obtenerProducto = (id) => {
      console.log(id);
      const detalle = productos.find((item) => item.id == id);
      setproducto(detalle);
      console.log(producto);
   };
   return (
      <ContextStore.Provider
         value={{
            productos,
            setproductos,
            producto,
            setproducto,
            obtenerProductos,
            obtenerProducto,
         }}
      >
         {children}
      </ContextStore.Provider>
   );
};

ProviderStore.propTypes = {
   children: PropTypes.any,
};
