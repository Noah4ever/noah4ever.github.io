import "@styles/footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="footer-list-item">
            <a href="#">Terms of Service</a>
          </li>
          <li className="footer-list-item">
            <a href="#">Contact Me</a>
          </li>
        </ul>
        <ul className="footer-social-list">
          <li className="footer-social-list-item">
            <a
              href="https://github.com/Noah4ever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer-social-media-icon" />
            </a>
          </li>
          <li className="footer-social-list-item">
            <a
              href="https://www.linkedin.com/in/noah-thiering/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer-social-media-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2023 Noah Thiering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
