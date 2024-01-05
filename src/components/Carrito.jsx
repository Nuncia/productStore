import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';

const Carrito = () => {
   const { listaProductos, montoTotal, cargarListado } =
      useContext(ContextStore);
   const [cargando, setCargando] = useState(false);

   useEffect(() => {
      cargarListado();
      console.log(listaProductos);
      if (listaProductos > 0) {
         setCargando(false);
      } else {
         setCargando(true);
      }
   }, [listaProductos]);
   return (
      <div
         style={{
            margin: '100px',
            display: 'flex',
            paddingTop: '150px',
            justifyContent: 'center',
         }}
      >
         {cargando ? (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
               }}
            >
               <div className="detalle__2">
                  <h3 style={{ textAlign: 'center' }}>
                     No tienes productos selecionados
                  </h3>
               </div>
               <button
                  className="btn btn-danger"
                  style={{ width: '70px' }}
                  //  onClick={volver}
               >
                  Volver...
               </button>
            </div>
         ) : listaProductos ? (
            <div className="contenedor__carrito">
               <h3 style={{ textAlign: 'center' }}>Orden N° 1</h3>
               <table className="table">
                  <tbody>
                     {listaProductos.map((item) =>
                        item.cantidad > 0 ? (
                           <tr key={item.id}>
                              <td>
                                 <img
                                    style={{ width: '50px' }}
                                    src={item.image}
                                    alt={item.title}
                                 />
                              </td>
                              <td>
                                 {/* <p
                               style={{ color: 'blue', cursor: 'pointer' }}
                               onClick={() => volverDetalle(item)}
                            >
                               {item.name.toUpperCase()}
                            </p> */}
                              </td>
                              <td>$ {item.price}</td>
                              <td>
                                 {/* <button
                               style={{ marginRight: '6px' }}
                               className="btn btn-info"
                               onClick={() => decrementar(item)}
                            >
                               -
                            </button> */}
                                 {item.cantidad}
                                 {/* <button
                               style={{ marginLeft: '6px' }}
                               className="btn btn-danger"
                               onClick={() => sumar(item)}
                            >
                               +
                            </button> */}
                              </td>
                              <td style={{ marginLeft: '50px' }}>
                                 $ {item.price * item.cantidad}
                              </td>
                           </tr>
                        ) : (
                           ''
                        )
                     )}
                  </tbody>
               </table>
               <div style={{ display: 'flex' }}>
                  <button className="btn btn-danger">Ir a Pagar </button>
                  <p className="boton">$ {montoTotal}</p>
               </div>
            </div>
         ) : (
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <div className="detalle__2" style={{}}>
                  Debes agregar productos al carrito
               </div>
            </div>
         )}
      </div>
   );
};

export default Carrito;
