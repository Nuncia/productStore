import { NavLink } from 'react-router-dom';

const Formulario = () => {
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
            <form className="formulario">
               <p style={{ marginBottom: '0px' }}>
                  Dirección de correo electrónico
                  <strong style={{ color: 'red' }}>*</strong>
               </p>
               <input type="text" className="inputLogin" />
               <p style={{ marginBottom: '0px' }}>
                  Contraseña <strong style={{ color: 'red' }}>*</strong>
               </p>
               <input type="password" className="inputLogin" />
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
                  ¿Olvió su contraseña?
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
