import { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextStore = createContext();

export const ProviderStore = ({ children }) => {
   const [productos, setproductos] = useState([]);
   const [producto, setproducto] = useState({});
   // const [listaProductos, setListaProductos] = useState([]);
   const [lista, setLista] = useState([]);
   const [montoTotal, setMontoTotal] = useState(0);
   const [cantidadProducto, setCantidadProducto] = useState(0);
   const [usuario, setUsuario] = useState('');
   const [contrasenya, setContrasenya] = useState('');
   const [listaCategoria, setListaCategoria] = useState([]);
   let listaProductos = [];

   const obtenerProductos = useCallback(async () => {
      try {
         const url = 'https://fakestoreapi.com/products';
         const respuesta = await fetch(url, {
            mode: 'cors',
            headers: {
               'Access-Control-Allow-Origin': '*',
            },
         });
         const datos = await respuesta.json();
         const Product = datos.map((item) => ({
            ...item,
            cantidad: 0,
            likes: 0,
         }));
         setproductos(Product);
         // console.log(productos);
      } catch (e) {
         console.log('obtenerProducto: ', e.message);
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
   // const agregarProducto = (producto) => {
   //    event.preventDefault();

   //    // console.log(producto);
   //    const productoExiste = lista.find((item) => item.id === producto.id);
   //    console.log(productoExiste);
   //    if (productoExiste) {
   //       //actualiza cantidad de producto existente
   //       const productoActualizados = lista.map((item) =>
   //          item.id === productoExiste.id
   //             ? { ...item, cantidad: item.cantidad + 1 }
   //             : item
   //       );
   //       // console.log(productoActualizados);
   //       setLista(productoActualizados);
   //    } else {
   //       //agrega producto nuevo a la lista
   //       console.log('lista: ', lista);
   //       setLista([...lista, { ...producto, cantidad: 1 }]);
   //    }
   //    //Actualiza cantidad total y monto
   //    // console.log(lista);
   //    setCantidadProducto(cantidadProducto + 1);
   //    setMontoTotal(montoTotal + producto.price);
   // };

   const agregarProducto = (producto) => {
      const existente = lista.find((prod) => prod.id === producto.id);
      console.log(existente);

      if (!existente) {
         listaProductos.push({ ...producto, cantidad: 1 });
      } else {
         listaProductos = [
            ...listaProductos,
            { ...producto, cantidad: producto.cantidad + 1 },
         ];
      }

      setLista(listaProductos);
      setCantidadProducto(cantidadProducto + 1);
      setMontoTotal(montoTotal + producto.price);
   };

   const buscarCategoria = (categoria) => {
      setListaCategoria([]);
      const lista = productos.filter((item) => item.category == categoria);
      setListaCategoria(lista);
   };

   const cargarListado = () => {
      console.log(lista);
      setLista(productos);
      console.log('cargarListado: ', lista);
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
