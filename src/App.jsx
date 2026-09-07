import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import LogoStrip from './components/LogoStrip.jsx';
import WhyAgenticAI from './components/WhyAgenticAI.jsx';
import GovernancePillars from './components/GovernancePillars.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import RegulatoryPanel from './components/RegulatoryPanel.jsx';
import LiveDemo from './components/LiveDemo.jsx';
import StatsBand from './components/StatsBand.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import ConnectSection from './components/ConnectSection.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <LogoStrip />
        <WhyAgenticAI />
        <GovernancePillars />
        <HowItWorks />
        <RegulatoryPanel />
        <LiveDemo />
        <StatsBand />
        <BeforeAfter />
        <ConnectSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
