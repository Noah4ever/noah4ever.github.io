import "@styles/components/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-title">
        <div className="footer-logo">
          <span className="footer-logo-around">{"{"}</span>
          <span className="footer-logo-center">T</span>
          <span className="footer-logo-around">{"}"}</span>
        </div>
      </div>
      <div className="footer-copyright">&copy; {new Date().getFullYear()} Noah Thiering. All rights reserved.</div>
    </footer>
  );
}
