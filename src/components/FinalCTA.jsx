import Reveal from './Reveal.jsx';
import { IconPlay, IconWave } from './icons.jsx';
import './FinalCTA.css';

// PLACEHOLDER: swap for a real scannable QR code linking to the live-call demo.
// Rendered as an SVG so it reads as an actual QR pattern rather than a broken-image checker.
function QrPlaceholder() {
  const finder = (x, y) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width="18" height="18" fill="#0A0A14" />
      <rect x="3" y="3" width="12" height="12" fill="#fff" />
      <rect x="6" y="6" width="6" height="6" fill="#0A0A14" />
    </g>
  );
  const modules = [
    22, 26, 34, 42, 50, 58, 62, 70, 74, 30, 46, 54, 66, 38, 78,
  ];
  return (
    <svg viewBox="0 0 100 100" className="booth-qr-svg" role="img" aria-label="QR code placeholder">
      <rect width="100" height="100" rx="10" fill="#fff" />
      {finder(6, 6)}
      {finder(76, 6)}
      {finder(6, 76)}
      {modules.map((v, i) => (
        <rect key={i} x={(v * 3.1) % 70 + 24} y={((v * 7) % 60) + 24} width="5" height="5" fill="#0A0A14" />
      ))}
      <rect x="40" y="40" width="20" height="20" rx="3" fill="#0A0A14" />
      <rect x="44" y="44" width="12" height="12" rx="2" fill="#fff" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section className="section final-cta-section">
      <div className="final-cta-glow" />
      <div className="dot-grid" style={{ opacity: 0.4 }} />
      <div className="container">
        <Reveal><span className="eyebrow final-cta-eyebrow">Ready when you are</span></Reveal>
        <Reveal delay={1}><h2 className="final-cta-title">Talk to <span className="accent">Zenova</span></h2></Reveal>
        <Reveal delay={2} className="final-cta-actions">
          <a href="mailto:hello@zopper.com" className="btn btn-primary btn-pulse">
            Talk to Zenova <span className="btn-arrow">→</span>
          </a>
        </Reveal>

        <Reveal delay={3}>
          <div className="booth-card">
            <div className="booth-qr-frame">
              <QrPlaceholder />
              <span className="booth-qr-play"><IconPlay width={22} height={22} /></span>
            </div>
            <div className="booth-copy">
              <span className="booth-live-tag"><span className="dot" />Scan to listen live</span>
              <div className="booth-copy-title">Listen to Zenova in action.</div>
              <p className="booth-copy-desc">
                Listen to this conversation LIVE, and explore more live use cases built for bank-led insurance.
              </p>
              <span className="booth-partner"><IconWave width={14} height={14} />Voice AI partner &middot; Gnani</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
