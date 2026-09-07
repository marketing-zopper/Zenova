import { useState } from 'react';
import Reveal from './Reveal.jsx';
import {
  IconSearch, IconChart, IconUsers, IconDevice, IconDoc, IconShield,
  IconRefresh, IconCart, IconWifi, IconSpark, IconPuzzle, IconEye,
} from './icons.jsx';
import './HowItWorks.css';

const STAGES = [
  {
    key: 'grow',
    label: 'Grow',
    title: 'Find the right opportunity.',
    desc: 'Identify and prioritise insurance leads, understand customer context and assess protection or financial needs before the sales conversation begins.',
    features: [
      { title: 'Lead Management', desc: 'Automated lead prioritisation and intelligent routing.', Icon: IconUsers },
      { title: 'Financial Needs Analysis & Suitability', desc: 'Real-time needs analysis with suitability rules built into the process.', Icon: IconSearch },
      { title: 'Customer Context', desc: 'A connected view of the customer to support more relevant engagement.', Icon: IconEye },
    ],
  },
  {
    key: 'sell',
    label: 'Sell',
    title: 'Help every sales conversation move forward.',
    desc: 'Give RMs and sales teams the context, guidance and journeys they need—while keeping suitability, disclosures and consent part of the process.',
    features: [
      { title: 'RM Productivity', desc: 'Customer insights and real-time support for frontline teams.', Icon: IconChart },
      { title: 'Suitability', desc: 'Apply needs and product-fit rules across the insurance journey.', Icon: IconSearch },
      { title: 'Digital & Assisted Journeys', desc: 'Support insurance journeys across digital and assisted channels.', Icon: IconDevice },
      { title: 'Consent & Sales Governance', desc: 'Capture meaningful consent and embed policy and conduct rules into the journey.', Icon: IconShield },
    ],
  },
  {
    key: 'service',
    label: 'Service',
    title: 'Stay connected after the policy is issued.',
    desc: 'Manage the policy lifecycle and customer requests without treating servicing as a separate system or journey.',
    features: [
      { title: 'Policy Administration', desc: 'Support policy issuance and lifecycle management.', Icon: IconDoc },
      { title: 'Customer Servicing', desc: 'Manage servicing requests and customer interactions.', Icon: IconUsers },
      { title: 'Claims Assistance', desc: 'Enable claims intimation and real-time claim status tracking.', Icon: IconWifi },
    ],
  },
  {
    key: 'retain',
    label: 'Retain',
    title: "Don't wait for the policy to lapse.",
    desc: 'Use proactive engagement to manage renewals, maintain persistency and identify the next relevant insurance opportunity.',
    features: [
      { title: 'Renewals', desc: 'Automated and context-aware renewal management.', Icon: IconRefresh },
      { title: 'Persistency', desc: 'Support a higher-quality, longer-lasting insurance book.', Icon: IconShield },
      { title: 'Cross-sell', desc: 'Identify relevant opportunities across existing customer relationships.', Icon: IconCart },
    ],
  },
  {
    key: 'learn',
    label: 'Learn',
    title: 'Make every interaction useful.',
    desc: 'Move beyond isolated transactions and sampled QA. Turn conversations and customer interactions into intelligence, evidence and visibility.',
    features: [
      { title: 'Call Intelligence', desc: 'Understand customer conversations and surface relevant signals.', Icon: IconSpark },
      { title: 'Evidence & Compliance', desc: 'Generate regulator-grade evidence packs, including records of disclosures and interactions.', Icon: IconDoc },
      { title: 'Analytics', desc: 'Track sales, persistency and compliance through real-time dashboards.', Icon: IconChart },
    ],
  },
  {
    key: 'connect',
    label: 'Connect',
    title: 'Work with the systems you already have.',
    desc: 'Zenova is designed to sit within the existing technology and distribution environment—not create another silo.',
    features: [
      { title: 'Multi-Insurer Integration', desc: 'A unified gateway for connecting across insurer systems.', Icon: IconPuzzle },
      { title: 'API Connectivity', desc: 'API-first architecture designed for integration with enterprise systems.', Icon: IconWifi },
    ],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <Reveal><span className="eyebrow">How Zenova works</span></Reveal>
        <Reveal delay={1}>
          <h2 className="section-heading">From the first opportunity to<br />every interaction after</h2>
        </Reveal>

        <div className="hiw-tabs" role="tablist" aria-label="Zenova journey stages">
          {STAGES.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              aria-selected={i === active}
              className={`hiw-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="hiw-panel" key={stage.key}>
          <Reveal>
            <div className="hiw-copy-index">{String(active + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}</div>
            <h3 className="hiw-copy-title">{stage.title}</h3>
            <p className="hiw-copy-desc">{stage.desc}</p>
          </Reveal>
          <div className="hiw-feature-grid">
            {stage.features.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i + 1, 4)} className="panel hiw-feature-card">
                <span className="hiw-feature-icon"><f.Icon width={18} height={18} /></span>
                <div>
                  <div className="hiw-feature-title">{f.title}</div>
                  <div className="hiw-feature-desc">{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
