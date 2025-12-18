import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  
  return (
    <header className="header">
      <div className="header-container">
  
        <div className="logo">
        <Link to="/" className="logo">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5d3710b664537f21b375fa3109a45fc473e92639?width=90" 
            alt="The BAE Movement" 
            className="logo-image"
          />
          <div className="logo-text">The BAE Movement</div>
          </Link>
        </div>
        
        <nav className="nav">
          <Link to="/" className={`nav-link ${isHomePage ? 'nav-link-active' : ''}`}>Home</Link>
          {isHomePage ? (
            <>
              <a href="#about" className="nav-link">About</a>
              <a href="#classes" className="nav-link">Classes & Events</a>
              <a href="#partnerships" className="nav-link">Brands & Partnerships</a>
            </>
          ) : (
            <>
              <Link to="/#about" className="nav-link">About</Link>
              <Link to="/#classes" className="nav-link">Classes & Events</Link>
              <Link to="/#partnerships" className="nav-link">Brands & Partnerships</Link>
            </>
          )}
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}>Contact</Link>
        </nav>
        
        <button className="shop-button">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.22102 0.775818C4.43825 0.318085 4.90684 0 5.44836 0H8.55164C9.09316 0 9.56097 0.318085 9.77898 0.775818C10.3089 0.780473 10.7224 0.804523 11.0917 0.948825C11.5325 1.12127 11.9159 1.41433 12.198 1.79447C12.4827 2.17772 12.6169 2.66881 12.8 3.34455L13.3757 5.45633L13.5929 6.10879L13.6115 6.13206C14.3105 7.02736 13.9777 8.35866 13.3121 11.0205C12.8885 12.7141 12.6774 13.5605 12.0459 14.0539C11.4144 14.5466 10.5416 14.5466 8.79602 14.5466H5.20398C3.45839 14.5466 2.5856 14.5466 1.95408 14.0539C1.32257 13.5605 1.11077 12.7141 0.687947 11.0205C0.0222953 8.35866 -0.310531 7.02736 0.388481 6.13206L0.407101 6.10879L0.62433 5.45633L1.19999 3.34455C1.38386 2.66881 1.51807 2.17694 1.80202 1.79369C2.08421 1.41384 2.46759 1.12105 2.90834 0.948825C3.27763 0.804523 3.69036 0.779697 4.22102 0.775818ZM4.22257 1.9411C3.70898 1.94653 3.50261 1.96592 3.33193 2.03264C3.09451 2.12549 2.88802 2.28332 2.73611 2.48805C2.59956 2.67192 2.51888 2.92871 2.29389 3.75651L1.85167 5.37719C2.64301 5.23677 3.7245 5.23677 5.20321 5.23677H8.79602C10.2755 5.23677 11.3562 5.23677 12.1476 5.37642L11.7061 3.75573C11.4811 2.92794 11.4004 2.67114 11.2639 2.48727C11.112 2.28254 10.9055 2.12472 10.6681 2.03187C10.4974 1.96515 10.291 1.94575 9.77743 1.94032C9.66727 2.17217 9.49364 2.36804 9.27669 2.50522C9.05973 2.6424 8.80832 2.71526 8.55164 2.71536H5.44836C5.19176 2.71533 4.94041 2.64259 4.72346 2.50555C4.50651 2.36851 4.33284 2.1728 4.22257 1.9411Z" fill="white"/>
          </svg>
          <span>Shop Now</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
