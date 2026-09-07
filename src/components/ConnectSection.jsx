import Reveal from './Reveal.jsx';
import { IconWifi, IconPuzzle, IconServer, IconShield, IconLock, IconEye } from './icons.jsx';
import './ConnectSection.css';

const BADGES = [
  { label: 'API-first', Icon: IconWifi },
  { label: 'Microservices', Icon: IconPuzzle },
  { label: 'On-prem runtime', Icon: IconServer },
  { label: 'SSO & RBAC', Icon: IconShield },
  { label: 'mTLS', Icon: IconLock },
  { label: 'Bank-grade encryption', Icon: IconLock },
  { label: 'Audit & observability', Icon: IconEye },
];

export default function ConnectSection() {
  return (
    <section className="section connect-section gradient-blue" id="connect">
      <div className="dot-grid" style={{ opacity: 0.35 }} />
      <div className="container">
        <Reveal><span className="eyebrow">Connect</span></Reveal>
        <Reveal delay={1}><h2 className="section-heading">Work with the systems you already have</h2></Reveal>
        <Reveal delay={2}>
          <p className="section-sub">
            Zenova is designed to sit within the existing technology and distribution
            environment&mdash;not create another silo.
          </p>
        </Reveal>

        <Reveal delay={3} className="arch-strip">
          <div className="panel arch-row systems">Your Systems &mdash; CBS / CRM / LOS / LMS / Apps / Contact Centre</div>
          <span className="arch-arrow">&darr;</span>
          <div className="arch-row zenova">ZENOVA</div>
          <span className="arch-arrow">&darr;</span>
          <div className="panel arch-row endpoints">Insurers / Channels / Customers / Operations</div>
        </Reveal>

        <div className="badge-row-wrap">
          <div className="badge-row">
            {BADGES.map((b, i) => (
              <Reveal key={b.label} delay={Math.min(i + 1, 4)} className="tech-badge">
                <span className="tech-badge-icon"><b.Icon width={16} height={16} /></span>
                {b.label}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
