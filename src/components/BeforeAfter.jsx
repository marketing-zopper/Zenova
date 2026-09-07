import Reveal from './Reveal.jsx';
import './BeforeAfter.css';

const WITHOUT = ['Fragmented journeys', 'Manual processes', 'Reactive compliance', 'Low RM confidence', 'Operational overhead'];
const WITH = ['Connected journeys', 'Real-time intelligence', 'Suitability by design', 'Evidence by default', 'Optimised operations'];

export default function BeforeAfter() {
  return (
    <section className="section">
      <div className="container">
        <Reveal><span className="eyebrow">From fragmented to orchestrated</span></Reveal>
        <Reveal delay={1}><h2 className="section-heading">A before/after view of the insurance operation</h2></Reveal>

        <div className="ba-grid">
          <span className="ba-vs">VS</span>
          <Reveal delay={1} className="ba-col ba-without">
            <div className="ba-label">Without Zenova</div>
            <ul className="ba-list">
              {WITHOUT.map((t) => (
                <li key={t}><span className="ba-icon">&minus;</span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={2} className="ba-col ba-with">
            <div className="ba-label">With Zenova</div>
            <ul className="ba-list">
              {WITH.map((t) => (
                <li key={t}><span className="ba-icon">&#10003;</span>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
