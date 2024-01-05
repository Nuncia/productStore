import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextStore } from '../context/ContextStore';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LogIn = () => {
   const { setUsuario, contrasenya, setContrasenya } = useContext(ContextStore);
   const [loginUsuario, setLoginUsuario] = useState('');
   const [show, setShow] = useState(false);
   const navigate = useNavigate();
   const [mensaje, setMensaje] = useState('');

   const capitalizarPrimeraLetra = (palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      if (loginUsuario.trim() || contrasenya) {
         const palabraModificada = capitalizarPrimeraLetra(loginUsuario);
         setUsuario(palabraModificada);
         navigate(`/`);
         setContrasenya('');
      } else {
         // setMensaje('Todos loss campos son obligatorios');
         alert('Todos loss campos son obligatorios');
      }
   };

   const handleClose = () => {
      setShow(false);
   };

   const handleShow = () => {
      setShow(true);
   };

   const handleEnviar = () => {
      setShow(false);
      alert('Espera un correo con el código de recuperación');
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
                  autoComplete="on"
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
               {/* <button style={{ textAlign: 'center', textDecoration: 'black' }}> */}
               <a
                  // variant=''
                  onClick={handleShow}
                  className="btn border-t-orange-500"
                  style={{
                     width: '160px',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                  }}
               >
                  ¿Olvidó su contraseña?
               </a>
               {/* </button> */}
               <div
                  style={{
                     display: 'flex',
                     textAlign: 'center',
                     justifyContent: 'center',
                  }}
               >
                  ¿No tiene una cuenta? &nbsp;
                  <NavLink to="/nuevoUsuario" style={{ textAlign: 'center' }}>
                     Cree una aquí
                  </NavLink>
               </div>
            </form>
         </div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Recuperación de cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               Ingresa tu correo &nbsp;
               <input type="email" name="correo" placeholder="tuCorreo@cl" />
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cerrar
               </Button>
               <Button variant="primary" onClick={handleEnviar}>
                  Enviar
               </Button>
            </Modal.Footer>
         </Modal>
      </section>
   );
};

export default LogIn;
