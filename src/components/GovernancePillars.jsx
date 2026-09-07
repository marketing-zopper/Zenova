import Reveal from './Reveal.jsx';
import { IconSearch, IconGavel, IconStamp } from './icons.jsx';
import './GovernancePillars.css';

const PILLARS = [
  {
    title: 'Suitability',
    question: 'Does this product make sense for this customer?',
    desc: 'Understand customer context, needs and eligibility before guiding the next step.',
    accent: 'cyan',
    Icon: IconSearch,
  },
  {
    title: 'Policy',
    question: 'What is allowed to happen?',
    desc: 'Embed business, conduct and journey rules directly into how the interaction unfolds.',
    accent: 'orange',
    Icon: IconGavel,
  },
  {
    title: 'Evidence',
    question: 'Can you prove what happened?',
    desc: 'Create a record of the interaction, disclosures, consent and transaction journey.',
    accent: 'white',
    Icon: IconStamp,
  },
];

export default function GovernancePillars() {
  return (
    <section className="section governance-section gradient-blue">
      <div className="dot-grid" style={{ opacity: 0.35 }} />
      <div className="container">
        <div className="governance-intro">
          <div>
            <Reveal><span className="eyebrow">Introducing Zenova</span></Reveal>
            <Reveal delay={1}><h2 className="section-heading">Built for governance</h2></Reveal>
          </div>
        </div>
        <div className="pillar-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i + 1, 4)} className={`panel pillar-card pillar-accent-${p.accent}`}>
              <div className="pillar-top">
                <span className="pillar-icon"><p.Icon width={20} height={20} /></span>
                <span className="pillar-index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-question">{p.question}</div>
              <p className="pillar-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
