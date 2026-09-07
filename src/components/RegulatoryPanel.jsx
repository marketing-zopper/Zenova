import Reveal from './Reveal.jsx';
import './RegulatoryPanel.css';

const BUILDS = [
  { tag: 'Suitability', txt: 'into recommendations.' },
  { tag: 'Disclosures', txt: 'into conversations.' },
  { tag: 'Consent', txt: 'into the journey.' },
  { tag: 'Evidence', txt: 'into every transaction.' },
];

export default function RegulatoryPanel() {
  return (
    <section className="section reg-section">
      <div className="container">
        <Reveal>
          <div className="reg-card">
            <div className="reg-glow" />
            <div style={{ position: 'relative' }}>
              <span className="eyebrow">Prepare for RBI&rsquo;s new direction</span>
              <h2 className="reg-title">
                Don&rsquo;t wait until<br /><span className="accent">compliance</span> becomes the problem.
              </h2>
              <p className="reg-detail">
                Under RBI&rsquo;s Responsible Business Conduct directions, stricter rules around
                customer choice, consent, bundling and insurance sales take effect on <b>1st January 2027</b>.
              </p>
              <div className="reg-cta-row">
                <a href="#connect" className="btn btn-primary">Prepare for Responsible Business Conduct <span className="btn-arrow">→</span></a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <p className="eyebrow" style={{ marginBottom: 18 }}>Zenova helps build</p>
              <div className="reg-build-list">
                {BUILDS.map((b) => (
                  <div className="panel reg-build-item" key={b.tag}>
                    <span className="tag">{b.tag}</span>
                    <span className="txt">{b.txt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
