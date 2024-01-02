import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';

const Carrito = () => {
   const { listaProductos } = useContext(ContextStore);
   const [cargando, setCargando] = useState(false);

   useEffect(() => {
      console.log(listaProductos);
      if (listaProductos) {
         setCargando(false);
      } else {
         setCargando(true);
      }
   }, [listaProductos]);
   return (
      <div style={{ paddingTop: '100px' }}>
         <h2 className="text-center">Carrito</h2>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col"></th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
               </tr>
            </thead>
            <tbody>
               {cargando ? (
                  <h6>Problemas al cargar sus productos</h6>
               ) : (
                  <p>listado</p>
                  //   listaProductos.map((item) => (
                  //      <tr key={item.id}>
                  //         <th scope="row">{item.id}</th>
                  //         <td>
                  //            <img src={item.image} alt={item.title} />
                  //         </td>
                  //         <td>Otto</td>
                  //         <td>@mdo</td>
                  //      </tr>
                  //   ))
               )}
            </tbody>
         </table>
      </div>
   );
};

export default Carrito;
