import "./Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo -> Home */}
          <Link to="/" className="footer-logo">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5d3710b664537f21b375fa3109a45fc473e92639?width=90"
              alt="The BAE Movement"
              className="footer-logo-image"
            />
            <div className="footer-logo-text">The BAE Movement</div>
          </Link>

          {/* Nav links */}
          <nav className="footer-nav">
            <Link to="/" className="footer-link footer-link-bold">
              Home
            </Link>

            {isHomePage ? (
              <>
                <a href="#about" className="footer-link">About</a>
                <a href="#classes" className="footer-link">Classes & Events</a>
                <a href="#partnerships" className="footer-link">Brands & Partnerships</a>
              </>
            ) : (
              <>
                <Link to="/#about" className="footer-link">About</Link>
                <Link to="/#classes" className="footer-link">Classes & Events</Link>
                <Link to="/#partnerships" className="footer-link">Brands & Partnerships</Link>
              </>
            )}

            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </nav>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-social">
            {/* social icons later */}
          </div>

          <p className="footer-copyright">
            Copyright 2025 | RDN Labs | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

