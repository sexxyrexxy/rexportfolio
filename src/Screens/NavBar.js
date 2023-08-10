import './NavBar.css';
import { Link } from 'react-router-dom';
import RexLimLogo from '../Assets/Image/RexLimLogo.png';
function NavBar() {
  return (
    <header className='navBar'>
      <div className='logo'><img src={RexLimLogo} alt="LogoNotFound" /></div>
      <div className='nav-bar-item'>
      <ul>
        <li><Link to="/project">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/home">About</Link></li>
      </ul>
      </div>
    </header>
  );
}

export default NavBar;
