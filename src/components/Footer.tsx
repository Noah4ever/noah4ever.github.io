import "@styles/components/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <a className="footer-logo" href="#top">
          <span className="footer-logo-around">{"{"}</span>
          <span className="footer-logo-center">T</span>
          <span className="footer-logo-around">{"}"}</span>
        </a>
      </div>
      <div className="footer-copyright">&copy; {new Date().getFullYear()} Noah Thiering. All rights reserved.</div>
    </footer>
  );
}
