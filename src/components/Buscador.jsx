import PropTypes from 'prop-types';
import { useState } from 'react';

const Buscador = ({ onSearch }) => {
   const [buscandoProducto, setBuscandoProducto] = useState('');
   const handleSearch = (e) => {
      e.preventDefault();
      console.log(buscandoProducto);
      onSearch();
   };
   return (
      <div>
         <form action="" onSubmit={handleSearch}>
            <input
               type="text"
               name="name"
               value={buscandoProducto}
               onChange={(e) => setBuscandoProducto(e.target.value)}
               placeholder="Buscar producto..."
            />
            <button className="btn btn-primary">Buscar</button>
         </form>
      </div>
   );
};

// Buscador.propTypes = {
//    onSearch: PropTypes.any,
// };

export default Buscador;
