import { Link } from 'react-router-dom';
import './PartnershipsPage.css';

const partners = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/2c115bfae0a42fbb62c9912a104edc5864f80093?width=816',
    name: 'Prosecco Rose Boutique'
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/66189056ec6449f9ff749d8d27c460a63fb0dd48?width=816',
    name: 'Sazon Grip'
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/ddf9ea7b0e4562341dd47274485cf06fae0d54cd?width=816',
    name: 'Blond Bungalow'
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/28d8957d3ed6720b57ceebf2687796aa0210ae8a?width=816',
    name: 'Salud'
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/60ddbdf65c84da6a34cd884a931a77dec5739e4d?width=816',
    name: "BUBBL'R"
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c856caccbca5044f08c4c5f3b37654a38be748e8?width=816',
    name: 'Hanson'
  }
];

const collaborationLanes = [
  {
    icon: '🛍️',
    title: 'Brand Partners',
    description:
      'Work with us on sampling, product placement, gifting moments, and co-marketing touchpoints across events and content.',
    bestFor: ['Launches', 'IRL activations', 'Community reach']
  },
  {
    icon: '🧘‍♀️',
    title: 'Wellness & Service Providers',
    description:
      'Bring your expertise to our audience through classes, wellness experiences, recovery offerings, and beauty services.',
    bestFor: ['Expert-led sessions', 'Trial moments', 'Brand trust']
  },
  {
    icon: '📸',
    title: 'Creators & Media',
    description:
      'Capture and co-create stories that highlight culture, wellness, and the women shaping our community.',
    bestFor: ['Content capture', 'UGC', 'Storytelling']
  }
];

const proofPoints = [
  {
    icon: '✨',
    title: 'High-intent Audience',
    subtitle: 'Community-first experiences'
  },
  {
    icon: '📱',
    title: 'IRL to Social',
    subtitle: 'Content-led activations'
  },
  {
    icon: '📍',
    title: 'Pop-ups & Brand Moments',
    subtitle: 'Designed for real connection'
  },
  {
    icon: '🌉',
    title: 'Bay Area Based',
    subtitle: 'Local roots with flexible formats'
  }
];

const benefits = [
  {
    title: 'Effortless Execution',
    description:
      'From planning to on-site flow, our team leads partner integration so your activation runs smoothly and feels elevated.'
  },
  {
    title: 'Amplified Visibility',
    description:
      'Each partnership is supported by photo/video moments and distribution across our community and digital channels.'
  },
  {
    title: 'True Alignment',
    description:
      'We prioritize culturally rooted wellness, women-centered spaces, and intentional brands that add real value.'
  }
];

const inclusions = [
  'On-site sampling and gifting',
  'Co-branded moments',
  'Instructor-led programming',
  'Content capture (photo and video)',
  'Social posts and recap assets',
  'Email and newsletter features',
  'Vendor pop-up table',
  'Special perks for attendees'
];

function PartnershipsPage() {
  return (
    <main className="pp-page">
      <section className="pp-hero" aria-labelledby="pp-hero-title">
        <div className="pp-container pp-hero-grid">
          <div className="pp-hero-copy">

            <h1 id="pp-hero-title" className="pp-title">
              Partner with The BAE Movement
            </h1>
            <p className="pp-subhead">
            Tap into a vibrant community through wellness experiences, cultural events, and brand collaborations.            </p>

            <div className="pp-hero-actions">
              <Link to="/contact" className="pp-btn pp-btn-primary">
                Partnerships
              </Link>
              <a href="#pp-partners" className="pp-btn pp-btn-secondary">
                Past Partners
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-proof" aria-labelledby="pp-proof-title">
        <div className="pp-container">
          <h2 id="pp-proof-title" className="pp-proof-title">
            Built for modern partnerships
          </h2>
          <div className="pp-proof-grid">
            {proofPoints.map((point) => (
              <article key={point.title} className="pp-proof-card">
                <span className="pp-proof-icon" aria-hidden="true">
                  {point.icon}
                </span>
                <h3>{point.title}</h3>
                <p>{point.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section pp-section-white" aria-labelledby="pp-lanes-title">
        <div className="pp-container">
          <div className="pp-section-head">
            <h2 id="pp-lanes-title">Choose your collaboration lane</h2>
            <p>Select the format that best fits your goals, audience, and campaign timeline.</p>
          </div>

          <div className="pp-lane-grid">
            {collaborationLanes.map((lane) => (
              <article key={lane.title} className="pp-lane-card">
                <div className="pp-lane-top">
                  <span className="pp-lane-icon" aria-hidden="true">
                    {lane.icon}
                  </span>
                  <h3>{lane.title}</h3>
                </div>
                <p className="pp-lane-copy">{lane.description}</p>
                <p className="pp-lane-meta">Best for:</p>
                <div className="pp-tag-row">
                  {lane.bestFor.map((tag) => (
                    <span key={tag} className="pp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#pp-includes" className="pp-inline-link">
                  Learn more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section pp-section-tint" aria-labelledby="pp-why-title">
        <div className="pp-container">
          <div className="pp-section-head">
            <h2 id="pp-why-title">Why collaborate with us</h2>
            <p>Short, strategic, and thoughtful partnerships that feel aligned from concept to content.</p>
          </div>

          <div className="pp-benefit-grid">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="pp-benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pp-includes" className="pp-section pp-section-white" aria-labelledby="pp-includes-title">
        <div className="pp-container pp-includes-grid">
          <div className="pp-includes-copy">
            <h2 id="pp-includes-title">What a partnership can include</h2>
            <p>
              Every collaboration is tailored, but these are the most common ways our partners plug into The BAE Movement experience.
            </p>
          </div>

          <ul className="pp-check-list">
            {inclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pp-partners" className="pp-section pp-section-partners" aria-labelledby="pp-partners-title">
        <div className="pp-container">
          <div className="pp-section-head">
            <h2 id="pp-partners-title">Past partners</h2>
            <p>Brands we&apos;ve collaborated with across experiential wellness moments and community-centered content.</p>
          </div>

          <div className="pp-marquee-wrap" aria-label="Partner showcase marquee">
            <div className="pp-marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} className="pp-marquee-pill">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>

          <div className="pp-partner-grid">
            {partners.map((partner) => (
              <article key={partner.name} className="pp-partner-card">
                <img src={partner.image} alt={`${partner.name} partner feature`} className="pp-partner-image" />
                <h3>{partner.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-cta" aria-labelledby="pp-cta-title">
        <div className="pp-container">
          <div className="pp-cta-panel">
            <h2 id="pp-cta-title">Let&apos;s build something together.</h2>
            <p>Tell us what you&apos;re launching and we&apos;ll reply with ideas & next steps.</p>
            <p className="pp-cta-micro">Partnership inquiries typically receive a response within 2-3 business days.</p>
            <Link to="/contact" className="pp-btn pp-btn-primary pp-cta-btn">
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PartnershipsPage;
