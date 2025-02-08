import react from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../image/logo.png';



const Header = () => {
return (
<header className="header">
        <div className="logo">
                <img src={logo} alt="The Capital Tree Logo" />
                  <span>TheCapitalTree</span>
       </div>
        <nav>
          <ul className="nav-menu">
            <li><Link className="nav-link" to="/Homepage">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/support">Support</Link></li>
            <li><Link className="nav-link" to="/Login">Login</Link></li>
            <li><Link ClassName="nav-link" to="/Learn">Learn</Link></li>
            <li><Link ClassName="nav-link" to="/Invest">Invest</Link></li>
            <li><Link ClassName="nav-link" to="/SwpCalculator">Swpcalculator</Link></li>
          </ul>
        </nav>
      </header>
);
}
export default Header;