import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextStore } from '../context/ContextStore';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
   const { usuario, setUsuario, contrasenya, setContrasenya } =
      useContext(ContextStore);
   const [loginUsuario, setLoginUsuario] = useState('');
   const navigate = useNavigate();

   const capitalizarPrimeraLetra = (palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const palabraModificada = capitalizarPrimeraLetra(loginUsuario);
      setUsuario(palabraModificada);
      navigate(`/`);
      setContrasenya('');
   };

   return (
      <section>
         <h1
            style={{
               textAlign: 'center',
               paddingTop: '150px',
               fontWeight: 'bold',
            }}
         >
            Iniciar sesión con su cuenta
         </h1>
         <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
            <form className="formulario" onSubmit={handleSubmit}>
               <p style={{ marginBottom: '0px' }}>
                  Dirección de correo electrónico
                  <strong style={{ color: 'red' }}>*</strong>
               </p>
               <input
                  type="text"
                  className="inputLogin"
                  name="loginUsuario"
                  value={loginUsuario}
                  onChange={(e) => setLoginUsuario(e.target.value)}
               />
               <p style={{ marginBottom: '0px' }}>
                  Contraseña <strong style={{ color: 'red' }}>*</strong>
               </p>
               <input
                  type="password"
                  className="inputLogin"
                  value={contrasenya}
                  name="contrasenya"
                  onChange={(e) => {
                     setContrasenya(e.target.value);
                  }}
               />
               <button
                  className="btn border-t-orange-500"
                  style={{
                     width: '160px',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                  }}
               >
                  Iniciar sesión
               </button>
               <NavLink
                  to="/"
                  style={{ textAlign: 'center', textDecoration: 'black' }}
               >
                  ¿Olvidó su contraseña?
               </NavLink>
               <div
                  style={{
                     display: 'flex',
                     textAlign: 'center',
                     justifyContent: 'center',
                  }}
               >
                  ¿No tiene una cuenta? &nbsp;
                  <NavLink to="/" style={{ textAlign: 'center' }}>
                     Cree una aquí
                  </NavLink>
               </div>
            </form>
         </div>
      </section>
   );
};

export default Formulario;
