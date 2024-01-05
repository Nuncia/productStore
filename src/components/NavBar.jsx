import { useContext } from 'react';
import { BsBag } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';
import { ContextStore } from '../context/ContextStore';

const NavBar = () => {
   const setActive = (isActive) => (isActive ? 'active' : 'inActive');
   const { cantidadProducto, usuario } = useContext(ContextStore);
   return (
      <nav className="navBar">
         <div
            style={{
               marginLeft: '20px',
               minWidth: '100vh',
               backgroundColor: 'white',
               display: 'flex',
               alignItems: 'center',
            }}
         >
            <NavLink to="/" className={setActive}>
               PS
            </NavLink>
            <NavLink
               to="/categoria/men's clothing"
               style={{ marginLeft: '30px', marginRight: '10px' }}
            >
               Men
            </NavLink>
            <NavLink to="/categoria/jewelery" style={{ marginRight: '10px' }}>
               Jewelly
            </NavLink>
            <NavLink
               to="/categoria/electronics"
               style={{ marginRight: '10px' }}
            >
               Electronic
            </NavLink>
            <NavLink to="/categoria/women's clothing">Woman</NavLink>
         </div>
         <div
            style={{
               fontSize: '20px',
               marginRight: '50px',
               display: 'flex',
               alignItems: 'start',
            }}
         >
            {usuario ? (
               <div style={{ marginRight: '20px' }}>
                  Bienvenid@&nbsp;{usuario}
               </div>
            ) : (
               ''
            )}
            <NavLink to="/login" className={setActive}>
               <CiUser />
            </NavLink>
            &nbsp;
            <NavLink
               to="/carrito"
               className={setActive}
               style={{ marginTop: '5px' }}
            >
               <BsBag
                  style={{
                     position: 'absolute',
                     zIndex: '1',
                     marginRight: '20px',
                     // paddingTop: '10px',
                  }}
                  className="bg-transparent"
               />
               {cantidadProducto > 0 ? (
                  <div
                     style={{
                        position: 'absolute',
                        zIndex: '2',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        marginLeft: '15px',
                        color: 'white',
                        fontSize: '10px',
                        textAlign: 'center',
                     }}
                  >
                     {cantidadProducto}
                  </div>
               ) : (
                  ''
               )}
            </NavLink>
         </div>
      </nav>
   );
};

export default NavBar;
