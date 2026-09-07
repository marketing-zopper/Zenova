import Reveal from './Reveal.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero gradient-navy">
      <div className="dot-grid" style={{ opacity: 0.5 }} />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container hero-grid">
        <div>
          <Reveal>
            <span className="pill-badge"><span className="dot" />Built for Banks, NBFCs &amp; MFIs</span>
          </Reveal>
          <h1 className="hero-headline">
            <span className="hero-line hero-line-1">Where BFSI meets</span>
            <span className="hero-line hero-line-2 accent">insurance intelligence</span>
          </h1>
          <Reveal delay={2}>
            <p className="hero-lede">
              Zenova is an agentic AI platform built for Banks, NBFCs and MFIs to run
              insurance across sales, servicing, renewals, compliance and operations.
            </p>
          </Reveal>
          <Reveal delay={3} className="hero-ctas">
            <a href="#live-demo" className="btn btn-primary">Hear Zenova in action <span className="btn-arrow">→</span></a>
            <a href="#connect" className="btn btn-ghost">Talk to us</a>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div className="hero-shot">
            {/* PLACEHOLDER: replace with real product screenshot (Zenova console UI) */}
            <img
              src="https://placehold.co/960x720/151633/00B5EA?text=Zenova+Console&font=poppins"
              alt="Zenova product console preview"
              loading="eager"
            />
            <span className="hero-shot-tag">Zenova console — live preview</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
