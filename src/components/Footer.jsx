import zenovaLogo from '../assets/zenova-logo-white.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src={zenovaLogo} alt="Zenova" className="footer-mark" />
        <span className="footer-legal">&copy; Solvy Tech Solutions Pvt Ltd | All rights reserved</span>
      </div>
    </footer>
  );
}
