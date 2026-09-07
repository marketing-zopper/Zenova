import Reveal from './Reveal.jsx';
import './LogoStrip.css';

import bankOfBaroda from '../assets/logos/bank-of-baroda.png';
import indianBank from '../assets/logos/indian-bank.png';
import bankOfMaharashtra from '../assets/logos/bank-of-maharashtra.svg';
import ujjivan from '../assets/logos/ujjivan.svg';
import rblBank from '../assets/logos/rbl-bank.svg';
import equitas from '../assets/logos/equitas.png';
import jio from '../assets/logos/jio.svg';

// Sourced from each institution's official/Wikimedia logo assets.
const LOGOS = [
  { name: 'Bank of Baroda', src: bankOfBaroda },
  { name: 'Indian Bank', src: indianBank },
  { name: 'Bank of Maharashtra', src: bankOfMaharashtra },
  { name: 'Ujjivan Small Finance Bank', src: ujjivan },
  { name: 'RBL Bank', src: rblBank },
  { name: 'Equitas Small Finance Bank', src: equitas },
];

function LogoChip({ name, src }) {
  return (
    <div className="logo-chip" title={name}>
      <img src={src} alt={name} loading="lazy" />
    </div>
  );
}

function JioChip() {
  return (
    <div className="logo-chip jio-chip" title="Jio Credit Ltd.">
      <img src={jio} alt="" aria-hidden="true" />
      <span className="jio-chip-text">
        <span className="jio-word">Jio</span>
        <span className="jio-sub">CREDIT LTD.</span>
      </span>
    </div>
  );
}

export default function LogoStrip() {
  const track = [...LOGOS];

  return (
    <section className="logo-strip">
      <div className="container">
        <Reveal>
          <p className="logo-strip-label">TRUSTED BY INSTITUTIONS ACROSS THE INSURANCE ECOSYSTEM</p>
        </Reveal>
      </div>
      <Reveal delay={1} className="marquee">
        <div className="marquee-track" aria-hidden={false}>
          {track.map((l) => <LogoChip key={l.name} {...l} />)}
          <JioChip />
          {/* duplicate set for a seamless loop */}
          {track.map((l) => <LogoChip key={`${l.name}-dup`} {...l} />)}
          <JioChip key="jio-dup" />
        </div>
      </Reveal>
    </section>
  );
}
