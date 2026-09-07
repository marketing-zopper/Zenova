import { useCountUp } from '../hooks.js';
import './StatsBand.css';

const STATS = [
  { end: 3, prefix: '', suffix: '×', label: 'Faster launch', decimals: 0 },
  { end: 40, prefix: '', suffix: '%', label: 'Productivity gain', decimals: 0 },
  { end: 70, prefix: '', suffix: '%', label: 'Risk reduction', decimals: 0 },
  { end: 4500, prefix: '₹', suffix: ' Cr+', label: 'GWP managed', decimals: 0 },
];

function Stat({ end, prefix, suffix, label, decimals }) {
  const [ref, value] = useCountUp(end);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-num">
        {prefix}{value.toLocaleString('en-IN', { maximumFractionDigits: decimals })}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="section stats-section">
      <div className="container stats-grid">
        {STATS.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </section>
  );
}
