import zenovaLogo from '../assets/zenova-logo-white.svg';
import { useTheme } from '../hooks.js';
import { IconSun, IconMoon } from './icons.jsx';
import './TopBar.css';

export default function TopBar() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <img src={zenovaLogo} alt="Zenova" className="zenova-mark" />
          <span className="powered-by">powered by <b>Zopper</b></span>
        </div>
        <div className="topbar-right">
          <span className="pill-badge gff-badge"><span className="dot" />Global Fintech Fest 2026</span>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <IconSun width={16} height={16} /> : <IconMoon width={16} height={16} />}
          </button>
          <a href="#connect" className="btn btn-primary topbar-cta">Talk to us</a>
        </div>
      </div>
    </header>
  );
}
