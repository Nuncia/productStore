import { useContext, useState } from 'react';
import { ContextStore } from '../context/ContextStore';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
   const { setUsuario } = useContext(ContextStore);
   const [nombre, setNombre] = useState('');
   const [email, setEmail] = useState('');
   const [contrasenya, setContrasenya] = useState('');
   const [mensaje, setMensaje] = useState('');
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      // let formaValida = true;
      if (!nombre.trim() || email === '' || contrasenya === '') {
         setMensaje('Todos los campos son obligatorios');
      } else {
         const nombreUsuario = nombre.charAt(0).toUpperCase() + nombre.slice(1);
         setNombre('');
         setEmail('');
         setContrasenya('');
         setUsuario(nombreUsuario);
         setMensaje('Usuario creado');
         navigate(`/`);
      }
   };
   return (
      <section>
         <h2
            style={{
               paddingTop: '100px',
               textAlign: 'center',
               fontWeight: 'bold',
            }}
         >
            Registrarse
         </h2>
         <div
            style={{
               paddingTop: '80px',
               // width: '600px',
               display: 'flex',
               justifyContent: 'center',
               flexDirection: 'column',
            }}
         >
            <form
               action=""
               className="formulario"
               onSubmit={handleSubmit}
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  width: '',
                  marginLeft: 'auto',
                  marginRight: 'auto',
               }}
            >
               <input
                  type="text"
                  className="inputLogin"
                  placeholder="Nombre completo"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
               />
               <input
                  className="inputLogin"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  className="inputLogin"
                  type="password"
                  placeholder="Password"
                  name="contrasenya"
                  value={contrasenya}
                  onChange={(e) => setContrasenya(e.target.value)}
                  autoComplete="on"
               />
               <button type="submit" className="btn border-t-orange-500">
                  Aceptar
               </button>
               {mensaje ? <h4>{mensaje}</h4> : ''}
            </form>
         </div>
      </section>
   );
};

export default Formulario;
