import zenovaLogo from '../assets/zenova-logo-white.svg';
import './TopBar.css';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <img src={zenovaLogo} alt="Zenova" className="zenova-mark" />
          <span className="powered-by">powered by <b>Zopper</b></span>
        </div>
        <div className="topbar-right">
          <span className="pill-badge gff-badge"><span className="dot" />Global Fintech Fest 2026</span>
          <a href="#connect" className="btn btn-primary topbar-cta">Talk to us</a>
        </div>
      </div>
    </header>
  );
}
