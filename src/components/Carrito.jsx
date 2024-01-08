import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';

const Carrito = () => {
   const { lista, cargarListado, montoTotal, productos } =
      useContext(ContextStore);
   const [cargando, setCargando] = useState(true);

   useEffect(() => {
      cargarListado();
      setCargando(false);
   }, [lista]);

   useEffect(() => {
      console.log('lista carrito: ', lista);
   }, [lista]);
   return (
      <div
         style={{
            // margin: '100px',
            display: 'flex',
            paddingTop: '150px',
            justifyContent: 'center',
         }}
      >
         {cargando ? (
            <p>{lista}</p>
         ) : (
            <div className="contenedor__carrito">
               <h3 style={{ textAlign: 'center' }}>Orden N° 1</h3>
               <table className="table">
                  <tbody>
                     {lista?.map((item) => (
                        <tr key={item.id}>
                           <td>
                              <img
                                 style={{ width: '50px' }}
                                 src={item.image}
                                 alt={item.title}
                              />
                           </td>
                           <td>
                              <p
                                 style={{ color: 'blue', cursor: 'pointer' }}
                                 //  onClick={() => volverDetalle(item)}
                              >
                                 {item.name}
                              </p>
                           </td>
                           <td>$ {item.price}</td>
                           <td>
                              <button
                                 style={{ marginRight: '6px' }}
                                 className="btn btn-info"
                                 //  onClick={() => decrementar(item)}
                              >
                                 -
                              </button>
                              {item.cantidad}
                              <button
                                 style={{ marginLeft: '6px' }}
                                 className="btn btn-danger"
                                 //  onClick={() => sumar(item)}
                              >
                                 +
                              </button>
                           </td>
                           <td style={{ marginLeft: '50px' }}>
                              $ {item.price * item.cantidad}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
               <div style={{ display: 'flex' }}>
                  <button className="btn btn-danger">Ir a Pagar </button>
                  <p className="boton">$ {montoTotal}</p>
               </div>
            </div>
         )}
      </div>
   );
};

export default Carrito;
