import { useContext, useEffect, useState } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useParams } from 'react-router-dom';
import Productos from '../components/Productos';

const Categoria = () => {
   const { buscarCategoria, listaCategoria } = useContext(ContextStore);
   const { categoria } = useParams();

   useEffect(() => {
      buscarCategoria(categoria);
      console.log(listaCategoria);
   }, []);

   return <Productos productos={listaCategoria} />;
};

export default Categoria;
