import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextStore = createContext();

export const ProviderStore = ({ children }) => {
   const [productos, setproductos] = useState([]);
   const [producto, setproducto] = useState({});
   const [listaProductos, setListaProductos] = useState([]);
   const [montoTotal, setMontoTotal] = useState(0);
   const [cantidadProducto, setCantidadProducto] = useState(0);
   const [usuario, setUsuario] = useState('');
   const [contrasenya, setContrasenya] = useState('');
   const [listaCategoria, setListaCategoria] = useState([]);

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
   // Busca si existe el producto en la lista de productos
   const agregarProducto = (producto) => {
      event.preventDefault();
      const productoExiste = listaProductos.find(
         (item) => item.id === producto.id
      );
      if (productoExiste) {
         //actualiza cantidad de producto existente
         const productoActualizados = listaProductos.map((item) =>
            item.id === producto.id
               ? { ...item, cantidad: item.cantidad + 1 }
               : item
         );
         setListaProductos(productoActualizados);
      } else {
         //agrega producto nuevo a la lista
         setListaProductos([...listaProductos, { ...producto, cantidad: 1 }]);
      }
      //Actualiza cantidad total y monto
      console.log(listaProductos);
      setCantidadProducto(cantidadProducto + 1);
      setMontoTotal(montoTotal + producto.price);
   };

   const buscarCategoria = (categoria) => {
      setListaCategoria([]);
      console.log(categoria);
      // console.log(productos);
      const lista = productos.filter((item) => item.category == categoria);
      console.log(lista);
      setListaCategoria(lista);
   };

   const cargarListado = () => {
      setListaProductos(producto);
      console.log(listaProductos);
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
            montoTotal,
            cantidadProducto,
            setCantidadProducto,
            setMontoTotal,
            cargarListado,
            usuario,
            setUsuario,
            contrasenya,
            setContrasenya,
            buscarCategoria,
            listaCategoria,
         }}
      >
         {children}
      </ContextStore.Provider>
   );
};

ProviderStore.propTypes = {
   children: PropTypes.any,
};
