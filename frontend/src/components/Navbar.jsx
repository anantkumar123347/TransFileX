import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  return (
    <nav className='maindiv'>
      <h1>TransFileX</h1>
      <div className='smalldiv'>
        <h3 
          onClick={() => navigate('/home')}
          className={location.pathname === '/home' ? 'active' : ''}
        >
          Home
        </h3>
        <h3 
          onClick={() => navigate('/about')}
          className={location.pathname === '/about' ? 'active' : ''}
        >
          About Us
        </h3>
        <h3
          onClick={() => navigate('/contact')}
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contact Us
        </h3>
      </div>
    </nav>
  );
}

export default Navbar;
