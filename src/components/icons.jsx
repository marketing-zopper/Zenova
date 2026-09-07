// Minimal inline SVG icon set — no icon fonts, no emoji.
const base = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const IconSearch = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.3-4.3" /></svg>
);
export const IconUsers = (p) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M2.5 19.5c0-3.3 2.9-5.8 6.5-5.8s6.5 2.5 6.5 5.8" /><circle cx="17.5" cy="9" r="2.6" /><path d="M15.5 13.6c2.9.4 4.9 2.6 4.9 5.4" /></svg>
);
export const IconChart = (p) => (
  <svg {...base} {...p}><path d="M4 20V10M11 20V4M18 20v-7" /><path d="M3 20h18" /></svg>
);
export const IconDevice = (p) => (
  <svg {...base} {...p}><rect x="6" y="2.5" width="12" height="19" rx="2.4" /><path d="M11 18.2h2" /></svg>
);
export const IconDoc = (p) => (
  <svg {...base} {...p}><path d="M6 2.8h8.5L19 7.3V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.8a1 1 0 0 1 1-1Z" /><path d="M14.2 2.8V7.5H19" /><path d="M8.2 12h7.2M8.2 15.6h7.2M8.2 8.4h3.5" /></svg>
);
export const IconShield = (p) => (
  <svg {...base} {...p}><path d="M12 2.5 4.5 5.4v6.1c0 5 3.2 8.3 7.5 10 4.3-1.7 7.5-5 7.5-10V5.4L12 2.5Z" /><path d="M8.8 12.1l2.3 2.3 4.1-4.6" /></svg>
);
export const IconRefresh = (p) => (
  <svg {...base} {...p}><path d="M20 11a8 8 0 0 0-14.6-4.3M4 13a8 8 0 0 0 14.6 4.3" /><path d="M5 3v4.2H9.2M19 21v-4.2h-4.2" /></svg>
);
export const IconCart = (p) => (
  <svg {...base} {...p}><path d="M3 4h2.2l1.9 11.4a2 2 0 0 0 2 1.6h7.3a2 2 0 0 0 2-1.6l1.4-7.4H6.4" /><circle cx="9.5" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></svg>
);
export const IconWifi = (p) => (
  <svg {...base} {...p}><path d="M3.5 9.3a13 13 0 0 1 17 0" /><path d="M6.6 12.9a8.6 8.6 0 0 1 10.8 0" /><path d="M9.8 16.4a4.3 4.3 0 0 1 4.4 0" /><circle cx="12" cy="19.6" r="1" fill="currentColor" stroke="none" /></svg>
);
export const IconSpark = (p) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18" /></svg>
);
export const IconPuzzle = (p) => (
  <svg {...base} {...p}><path d="M9 3.5h4v2.3a1.9 1.9 0 0 0 3.4 1.2 1.9 1.9 0 0 1 3.1 1.5c0 1-.8 1.9-1.9 1.9H21v4h-2.3a1.9 1.9 0 0 0-1.9 1.9 1.9 1.9 0 0 0 1.9 1.9V21H14v-2.2a1.9 1.9 0 0 0-3.5-1.1A1.9 1.9 0 0 1 7 16.2c0-1 .9-1.9 2-1.9H3v-4h2.2A1.9 1.9 0 0 0 7 8.4a1.9 1.9 0 0 0-1.9-1.9H3V3.5h6Z" /></svg>
);
export const IconArrowRight = (p) => (
  <svg {...base} width={16} height={16} className="btn-arrow" {...p}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
);
export const IconEye = (p) => (
  <svg {...base} {...p}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.6" /></svg>
);
export const IconGavel = (p) => (
  <svg {...base} {...p}><path d="M14.5 3.5l6 6-2.3 2.3-6-6 2.3-2.3Z" /><path d="M9.7 8.3l6 6-6.7 6.7a2 2 0 0 1-2.8 0l-3.2-3.2a2 2 0 0 1 0-2.8l6.7-6.7Z" /><path d="M3.5 20.5h9" /></svg>
);
export const IconStamp = (p) => (
  <svg {...base} {...p}><path d="M12 2.8a3.4 3.4 0 0 1 3.4 3.4c0 1.4-.8 2.2-1.5 3-.6.7-1 1.2-1 2v1.3H11v-1.3c0-.8-.4-1.3-1-2-.7-.8-1.5-1.6-1.5-3A3.4 3.4 0 0 1 12 2.8Z" /><path d="M5 21v-3.4A2.2 2.2 0 0 1 7.2 15.4h9.6A2.2 2.2 0 0 1 19 17.6V21" /><path d="M3 21h18" /></svg>
);
export const IconLock = (p) => (
  <svg {...base} {...p}><rect x="5" y="10.5" width="14" height="9.5" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" /></svg>
);
export const IconServer = (p) => (
  <svg {...base} {...p}><rect x="3.5" y="3.5" width="17" height="6.5" rx="1.6" /><rect x="3.5" y="14" width="17" height="6.5" rx="1.6" /><circle cx="7" cy="6.75" r="1" fill="currentColor" stroke="none" /><circle cx="7" cy="17.25" r="1" fill="currentColor" stroke="none" /></svg>
);
export const IconLayers = (p) => (
  <svg {...base} {...p}><path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3Z" /><path d="M3.5 12 12 16.5 20.5 12" /><path d="M3.5 16.5 12 21l8.5-4.5" /></svg>
);
export const IconPlay = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9.2" /><path d="M10 8.3v7.4l6-3.7-6-3.7Z" fill="currentColor" stroke="none" /></svg>
);
export const IconWave = (p) => (
  <svg {...base} {...p}><path d="M3 12h1M6.5 8.5v7M10 5.5v13M13.5 8.5v7M17 5.5v13M20.5 8.5v7M23 12h1" /></svg>
);
