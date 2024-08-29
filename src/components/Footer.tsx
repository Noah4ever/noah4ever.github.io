import "@styles/footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-list">
          <li className="footer-list-item">
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li className="footer-list-item">
            <Link to="/tos">Terms of Service</Link>
          </li>
          {/* <li className="footer-list-item">
            <Link to="/imprint">Imprint</Link>
          </li> */}
          <li className="footer-list-item">
            <Link to="#contact">Contact Me</Link>
          </li>
        </ul>
        <ul className="footer-social-list">
          <li className="footer-social-list-item">
            <a
              href="https://github.com/Noah4ever"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub className="footer-social-media-icon" />
            </a>
          </li>
          <li className="footer-social-list-item">
            <a
              href="https://www.linkedin.com/in/noah-thiering/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="footer-social-media-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Noah Thiering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
