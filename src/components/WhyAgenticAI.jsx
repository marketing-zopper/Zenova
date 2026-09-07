import Reveal from './Reveal.jsx';
import { IconSearch, IconGavel, IconShield, IconStamp } from './icons.jsx';
import './WhyAgenticAI.css';

const CAPABILITIES = [
  { label: 'Understand context', Icon: IconSearch },
  { label: 'Make decisions', Icon: IconGavel },
  { label: 'Guide action', Icon: IconArrow },
  { label: 'Follow rules', Icon: IconShield },
  { label: 'Create evidence', Icon: IconStamp },
];

function IconArrow(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12h13M12 5l7 7-7 7" />
    </svg>
  );
}

export default function WhyAgenticAI() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-head">
          <Reveal><span className="eyebrow">Agentic AI is here</span></Reveal>
          <Reveal delay={1}>
            <h2 className="section-heading">What does it actually look<br />like in insurance?</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="section-sub">
              GFF&rsquo;s 2026 theme is about translating emerging technology from potential to
              real-world impact. For insurance, that means moving beyond chatbots and automation.
              It means intelligence that can:
            </p>
          </Reveal>
        </div>
        <div className="capability-row">
          {CAPABILITIES.map(({ label, Icon }, i) => (
            <Reveal key={label} delay={Math.min(i + 1, 4)} className="panel capability-card">
              <span className="capability-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="capability-icon"><Icon /></span>
              <p>{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
