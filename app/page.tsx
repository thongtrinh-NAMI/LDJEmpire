import { ArrowRight, CalendarCheck, Check, Clock3, HeartHandshake, MapPin, Phone, ShieldCheck, Sparkles, Stethoscope, Users } from 'lucide-react';

const services = [
  { icon: Stethoscope, title: 'Medical appointments', text: 'Dependable transportation for routine visits, specialists, therapy, and follow-up care.' },
  { icon: Users, title: 'Senior transportation', text: 'Patient, respectful support for older adults traveling to essential appointments.' },
  { icon: CalendarCheck, title: 'Recurring rides', text: 'Consistent scheduling for dialysis, rehabilitation, and other ongoing care needs.' },
];
const steps = [
  ['01', 'Call to schedule', 'Tell us where you need to go and when you need to arrive.'],
  ['02', 'We confirm the details', 'We coordinate your pickup and make the plan clear.'],
  ['03', 'Ride with confidence', 'Enjoy a comfortable, dependable trip to your destination.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LDJ Empire home"><img src="/ldj-empire-logo.png" alt="LDJ Empire — Reliable Rides, Every Time" /></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#why-us">Why us</a><a href="#process">How it works</a></nav>
        <a className="header-call" href="tel:+19416670098" aria-label="Call LDJ Empire at 941-667-0098"><Phone size={17} aria-hidden="true" /><span>941-667-0098</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><MapPin size={15} aria-hidden="true" /> Serving Central Florida</div>
          <h1>Every ride matters.<br /><em>Every mile, cared for.</em></h1>
          <p className="hero-copy">
            <strong>Safe. Reliable. Non-Emergency Medical Transportation.</strong>
            <br />
            Serving Central Florida with dependable rides for medical appointments, therapy, dialysis, senior care, and recurring transportation needs.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="tel:+19416670098"><Phone size={19} aria-hidden="true" /> Schedule a ride</a>
            <a className="text-link" href="#services">Explore services <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="trust-row" aria-label="Service highlights"><span><Check size={16} aria-hidden="true" /> Reliable pickups</span><span><Check size={16} aria-hidden="true" /> Courteous service</span><span><Check size={16} aria-hidden="true" /> Comfortable rides</span></div>
        </div>

        <aside className="hero-card" aria-label="Contact LDJ Empire">
          <div className="card-corner" aria-hidden="true"><Sparkles size={90} /></div>
          <span className="availability"><span /> Now scheduling rides</span>
          <p className="card-kicker">Your journey starts here</p>
          <h2>Need a dependable ride?</h2>
          <p>Speak with our team to discuss your next medical trip in Central Florida.</p>
          <a href="tel:+19416670098" className="phone-panel"><span className="phone-icon"><Phone size={22} aria-hidden="true" /></span><span><small>Call us today</small><strong>941-667-0098</strong></span><ArrowRight size={20} aria-hidden="true" /></a>
          <div className="card-note"><Clock3 size={16} aria-hidden="true" /> Advance scheduling recommended</div>
        </aside>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><div><span className="section-label">Transportation with purpose</span><h2>Care that goes beyond the curb.</h2></div><p>From one-time appointments to regular care, we help make every trip feel simple, dignified, and dependable.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><span className="service-icon"><Icon size={25} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><a href="tel:+19416670098">Ask about this service <ArrowRight size={16} aria-hidden="true" /></a></article>)}</div>
      </section>

      <section className="accessible-feature" aria-label="Wheelchair-accessible transportation">
        <img src="/accessible-transport-van.png" alt="Driver assisting a passenger toward a wheelchair-accessible transport van with its ramp deployed" />
        <div className="accessible-caption">
          <span className="section-label">Accessible transportation</span>
          <h2>Comfort and dignity, built into every ride.</h2>
          <p>Thoughtful assistance and wheelchair-accessible transportation for a safer, smoother journey.</p>
          <a href="tel:+19416670098">Ask about accessible rides <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="why section" id="why-us">
        <div className="why-mark" aria-hidden="true"><img src="/ldj-empire-logo.png" alt="" /></div>
        <div className="why-content"><span className="section-label">The LDJ Empire difference</span><h2>Dependability is more than arriving on time.</h2><p>It is the confidence of knowing your ride has been thoughtfully planned and your comfort matters at every step.</p>
          <div className="feature-list"><div><ShieldCheck aria-hidden="true" /><span><strong>Safety-minded service</strong><small>Careful, attentive transportation from pickup to drop-off.</small></span></div><div><HeartHandshake aria-hidden="true" /><span><strong>Respectful personal care</strong><small>Every rider is welcomed with patience, dignity, and kindness.</small></span></div><div><MapPin aria-hidden="true" /><span><strong>Central Florida focused</strong><small>Local service for the communities we know and call home.</small></span></div></div>
        </div>
      </section>

      <section className="process section" id="process"><div className="process-intro"><span className="section-label">Simple by design</span><h2>Three steps to a smoother trip.</h2><p>Scheduling transportation should not add stress to your day. One call gets the process started.</p></div><div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="cta-section"><div><span className="section-label">Reliable rides, every time</span><h2>Let’s plan your next ride.</h2><p>Call LDJ Empire today for non-emergency medical transportation in Central Florida.</p></div><a className="button button-dark" href="tel:+19416670098"><Phone size={20} aria-hidden="true" /> 941-667-0098</a></section>

      <footer><img src="/ldj-empire-logo.png" alt="LDJ Empire" /><p>Non-emergency medical transportation serving Central Florida.</p><a href="tel:+19416670098">941-667-0098</a><small>© {new Date().getFullYear()} LDJ Empire. All rights reserved.</small></footer>
      <a className="mobile-call" href="tel:+19416670098"><Phone size={19} aria-hidden="true" /> Call to schedule</a>
    </main>
  );
}

