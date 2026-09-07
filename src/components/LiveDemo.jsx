import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import zenovaLogo from '../assets/zenova-logo-white.svg';
import './LiveDemo.css';

const CHAT = [
  { who: 'customer', text: 'Abhi job chali gayi hai. Itna premium ek saath bharna mushkil hai. Policy band karni padegi shayad.' },
  { who: 'agent', text: 'Policy band karna zaroori nahi hai. Aap monthly mode par shift kar sakte hain, ya cover thoda kam karke premium ghata sakte hain. Dono mein aapka cover chalta rahega.' },
  { who: 'customer', text: 'Monthly karne se total zyada nahi pad jayega saal bhar mein?' },
  { who: 'agent', text: 'Ji, thoda zyada padta hai. Main dono ka exact difference bhej deta hoon taaki aap dekh kar decide kar sakein.' },
  { who: 'customer', text: 'Aur agar main ye bhi na bhar paaya?' },
  { who: 'agent', text: 'Toh cover kam karke bhi option hai, ya policy loan bhi liya ja sakta hai. Main teeno bhej raha hoon.' },
];

// Each governance block is tied to the chat step index after which it appears.
const GOV_BLOCKS = {
  1: [{ type: 'log', time: '10:12:04', title: 'Affordability signal detected', items: ['Retention pressure capped', 'Cross-sell disabled for this contact'] }],
  2: [{ type: 'log', time: '10:12:06', title: 'Retention instruments computed', items: ['Mode change eligible', 'Sum assured reduction eligible', 'Policy loan available', 'Paid-up not yet acquired'] }],
  3: [{ type: 'disclosure', tag: 'Required Disclosure', title: 'Higher total outgo on monthly mode', desc: 'The customer must be told the annual cost rises. Not left to discover it.' }],
  5: [
    { type: 'outcome', tag: 'Outcome', title: 'Renewal collected, at a lower installment', desc: 'Instead of a lapse. The book keeps paying.' },
    { type: 'log', time: '10:13:31', title: 'Options recorded', items: ["All three offered, with the customer's response to each"] },
  ],
};

const TOTAL_STEPS = CHAT.length;
const AUTO_ADVANCE_MS = 3400;

export default function LiveDemo() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    if (step >= TOTAL_STEPS - 1) return;
    const id = setTimeout(() => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)), AUTO_ADVANCE_MS);
    return () => clearTimeout(id);
  }, [step, playing]);

  const visibleChat = CHAT.slice(0, step + 1);
  const visibleGov = Object.entries(GOV_BLOCKS)
    .filter(([atStep]) => Number(atStep) <= step)
    .flatMap(([, blocks]) => blocks);

  const goTo = (i) => {
    setPlaying(false);
    setStep(i);
  };

  return (
    <section className="section demo-section" id="live-demo">
      <div className="container">
        <span className="eyebrow">Governed AI, in a live call</span>
        <h2 className="section-heading">What does governed AI sound like?</h2>
        <p className="section-sub">
          Voice powered by Gnani &middot; every response adjudicated against policy in real time.
        </p>

        <Reveal className="demo-frame">
          <div className="demo-topbar">
            <div className="demo-brand">
              <img src={zenovaLogo} alt="Zenova" className="demo-brand-logo" />
              <span>Governed agent fleet &middot; Voice powered by Gnani</span>
            </div>
            <span className="demo-live-badge"><span className="dot" />Live Call &middot; LIFE RENEWAL</span>
          </div>

          <div className="demo-body">
            <div className="demo-col demo-col-left">
              <div className="demo-col-head">Conversation</div>
              <div className="demo-col-sub">Hindi &middot; Policy &bull;&bull;&bull;&bull;8812 &middot; Premium due, within grace</div>
              <div className="chat-stack">
                {visibleChat.map((c, i) => (
                  <div className={`chat-bubble ${c.who}`} key={i}>
                    <span className="who">{c.who}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="demo-col">
              <div className="demo-col-head">Governance</div>
              <div className="demo-col-sub">Deterministic adjudication &middot; Every decision recorded</div>
              <div className="gov-stack">
                {visibleGov.map((g, i) => {
                  if (g.type === 'log') {
                    return (
                      <div className="gov-entry gov-log" key={i}>
                        <span className="gov-time">{g.time}</span>
                        <div className="gov-log-body">
                          <div className="gov-log-title">{g.title}</div>
                          <ul className="gov-log-list">
                            {g.items.map((it) => <li key={it}>{it}</li>)}
                          </ul>
                        </div>
                      </div>
                    );
                  }
                  if (g.type === 'disclosure') {
                    return (
                      <div className="gov-entry gov-disclosure" key={i}>
                        <span className="tag">{g.tag}</span>
                        <div className="title">{g.title}</div>
                        <div className="desc">{g.desc}</div>
                      </div>
                    );
                  }
                  return (
                    <div className="gov-entry gov-outcome" key={i}>
                      <span className="tag">{g.tag}</span>
                      <div className="title">{g.title}</div>
                      <div className="desc">{g.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="demo-footnote">Every figure retrieved from the policy system. None is estimated.</p>

          <div className="demo-closing">
            A collection bot would have asked again. <b>Zenova found a way to retain the policy.</b>
          </div>

          <div className="demo-controls">
            <button className="demo-step-btn" onClick={() => goTo(Math.max(step - 1, 0))} disabled={step === 0}>Back</button>
            <div className="demo-dots">
              {CHAT.map((_, i) => (
                <button
                  key={i}
                  className={`demo-dot ${i === step ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="demo-step-btn"
              onClick={() => (step >= TOTAL_STEPS - 1 ? goTo(0) : goTo(step + 1))}
            >
              {step >= TOTAL_STEPS - 1 ? 'Replay' : 'Next'}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
