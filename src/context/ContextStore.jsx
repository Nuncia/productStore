import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextStore = createContext();

export const ProviderStore = ({ children }) => {
   const [productos, setproductos] = useState([]);
   const [producto, setproducto] = useState({});
   const [listaProductos, setListaProductos] = useState([]);
   const [montoTotal, setMontoTotal] = useState(0);
   const [cantidadProducto, setCantidadProducto] = useState(0);

   const obtenerProductos = useCallback(async () => {
      try {
         const url = 'https://fakestoreapi.com/products';
         const respuesta = await fetch(url);
         const datos = await respuesta.json();
         const Product = datos.map((item) => ({
            ...item,
            cantidad: 0,
            likes: 0,
         }));
         setproductos(Product);
      } catch (e) {
         console.log(e.message);
      }
   });

   const obtenerProducto = (id) => {
      const detalle = productos.find((item) => item.id == id);
      setproducto(detalle);
   };

   const incrementarLikes = (id) => {
      console.log(id);
      setproductos((prevImagen) =>
         prevImagen.map((producto) =>
            producto.id === id ? { ...producto, likes: 1 } : producto
         )
      );
   };

   const agregarProducto = (producto) => {
      // busca el producto en productos
      const productoExistente = listaProductos.find(
         (item) => item.id === producto.id
      );
      console.log(productoExistente);
      if (productoExistente) {
         //actualiza cantidad de producto existente
         console.log(productoExistente);

         const productosActualizados = listaProductos.map((item) =>
            item.id === producto.id
               ? { ...item, cantidad: item.cantidad + 1 }
               : item
         );

         setListaProductos(productosActualizados);
      } else {
         //Agrega producto nuevo a la lista
         setListaProductos([...listaProductos, { ...producto, cantidad: 1 }]);
      }
      console.log(listaProductos);
      //Actualiza cantidad total y monto
      setCantidadProducto(cantidadProducto + 1);
      setMontoTotal(montoTotal + producto.price);
      // console.log(cantidadProducto);
      // console.log(montoTotal);
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
            incrementarLikes,
            agregarProducto,
         }}
      >
         {children}
      </ContextStore.Provider>
   );
};

ProviderStore.propTypes = {
   children: PropTypes.any,
};
