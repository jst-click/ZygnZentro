import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiShieldCheckLine,
  RiCheckboxLine,
  RiLightbulbLine,
  RiHeartLine,
  RiTeamLine,
  RiGlobalLine,
  RiArrowRightLine,
  RiVerifiedBadgeLine,
  RiLockLine,
  RiFlashlightLine,
  RiRocketLine,
  RiFocus3Line,
  RiCodeLine,
} from 'react-icons/ri';
import './AboutUs.css';

const milestones = [
  { year: '2026', title: 'Launch', desc: 'ZygnPro and Zentro released on Google Play — bringing secure signing and modern productivity to Android professionals.' },
  { year: 'Today', title: 'Growing ecosystem', desc: 'Continuous updates across biometrics, blockchain verification, team collaboration, and analytics based on user feedback.' },
  { year: 'Ahead', title: 'Enterprise expansion', desc: 'Deeper admin tools, integrations, and partnership programs for organizations that need scale and compliance.' },
];

const offerings = [
  {
    icon: <RiShieldCheckLine />,
    title: 'ZygnPro — Digital Signatures',
    desc: 'Biometric verification, OTP security, blockchain-backed audit trails, document management, and an admin dashboard for organizations that need trusted signing at scale.',
    tags: ['Biometrics', 'Blockchain', 'Compliance', 'PDF Signing'],
  },
  {
    icon: <RiCheckboxLine />,
    title: 'Zentro — Productivity Suite',
    desc: 'Task management, team sync, voice notes, media attachments, location reminders, and analytics — everything teams need to plan, execute, and improve together.',
    tags: ['Tasks', 'Collaboration', 'Voice Notes', 'Analytics'],
  },
];

const values = [
  {
    icon: <RiShieldCheckLine />,
    title: 'Trust & Security',
    desc: 'Every product we build is designed with security as the foundation — not an afterthought. We hold ourselves to the highest standards of data protection.',
  },
  {
    icon: <RiLightbulbLine />,
    title: 'Purposeful Innovation',
    desc: 'We build technology that solves real problems. Every feature is evaluated against a simple question: does it genuinely improve how our users work?',
  },
  {
    icon: <RiHeartLine />,
    title: 'User-First Design',
    desc: 'Complex problems deserve simple solutions. We invest deeply in user experience to ensure our apps are accessible, intuitive, and delightful to use.',
  },
  {
    icon: <RiVerifiedBadgeLine />,
    title: 'Legal Compliance',
    desc: 'We build tools that meet the regulatory expectations of enterprises, legal teams, and governments — so our users can operate with confidence.',
  },
  {
    icon: <RiGlobalLine />,
    title: 'Accessibility for All',
    desc: 'Our apps are designed to work across devices and contexts, making professional-grade tools available to individuals and organizations of all sizes.',
  },
  {
    icon: <RiLockLine />,
    title: 'Privacy by Default',
    desc: 'User data is never sold or used for advertising. We collect only what is necessary and protect it with enterprise-grade encryption and controls.',
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero about-hero">
        <div className="about-hero-orb about-orb-1" />
        <div className="about-hero-orb about-orb-2" />
        <div className="container">
          <div className="text-center">
            <p className="section-label">About ZygnPro & Zentro</p>
            <h1 className="about-hero-title">
              We build tools that
              <br />
              professionals trust.
            </h1>
            <p className="about-hero-subtitle">
              ZygnPro and Zentro are secure, enterprise-grade applications that help professionals and organizations sign documents digitally and manage their productivity with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <p className="section-label">Our Mission</p>
              <h2 className="section-title">Eliminating friction in professional workflows</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300', marginBottom: '20px' }}>
                We believe that the tools professionals use every day should be intelligent, secure, and easy to use. We exist to replace outdated, paper-based processes and disconnected task systems with modern digital solutions that work the way people do.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300', marginBottom: '32px' }}>
                Our applications — ZygnPro and Zentro — represent two pillars of this mission: verified digital signing and high-performance task management. Together, they form a complete toolkit for the modern professional.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/zygnpro" className="btn btn-primary">
                  <RiShieldCheckLine /> ZygnPro
                </Link>
                <Link to="/zentro" className="btn btn-green">
                  <RiCheckboxLine /> Zentro
                </Link>
              </div>
            </div>

            <div className="mission-apps">
              <div className="mission-app-card mission-app-zygn">
                <div className="mission-app-icon">
                  <img src="/zygnpro-logo.png" alt="" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
                </div>
                <div className="mission-app-content">
                  <h3>ZygnPro</h3>
                  <p>Biometric digital signatures with blockchain verification and full legal compliance for enterprises and professionals.</p>
                  <div className="mission-app-tags">
                    <span>Digital Signatures</span>
                    <span>Blockchain</span>
                    <span>Biometrics</span>
                  </div>
                </div>
              </div>

              <div className="mission-app-card mission-app-zentro">
                <div className="mission-app-icon green">
                  <img src="/zentro-logo.png" alt="" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
                </div>
                <div className="mission-app-content">
                  <h3>Zentro</h3>
                  <p>Intelligent task management with team collaboration, voice notes, location triggers, and productivity analytics.</p>
                  <div className="mission-app-tags">
                    <span>Task Management</span>
                    <span>Collaboration</span>
                    <span>Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* What We Build */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">What We Build</p>
            <h2 className="section-title">Two apps, one vision for modern work</h2>
            <p className="section-subtitle">
              We focus exclusively on tools that remove friction from signing and productivity — no bloat, no compromises on security.
            </p>
          </div>
          <div className="offerings-grid">
            {offerings.map(({ icon, title, desc, tags }) => (
              <div className="content-card" key={title}>
                <div className="content-card-icon blue">{icon}</div>
                <h3>{title}</h3>
                <p style={{ marginBottom: '16px' }}>{desc}</p>
                <div className="mission-app-tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Story / Timeline */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title">Built for professionals who outgrew paper and spreadsheets</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300', marginBottom: '20px' }}>
                We started with a simple observation: signing documents and managing work still rely on tools from another era. Fax machines, wet signatures, and endless email threads slow everyone down — and create risk when compliance matters.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300' }}>
                ZygnPro and Zentro were built to fix that. One app brings enterprise-grade digital signing to your pocket. The other gives teams a single place to plan, collaborate, and improve. Together, they form a practical toolkit for how work gets done today.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {milestones.map(({ year, title, desc }) => (
                <div className="content-card" key={title} style={{ padding: '24px 28px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#60a5fa', marginBottom: '8px' }}>{year}</div>
                  <h3 style={{ fontSize: '17px', marginBottom: '8px' }}>{title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 300 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Our Expertise</p>
            <h2 className="section-title">Engineering depth across the stack</h2>
          </div>
          <div className="content-grid-3">
            {[
              { icon: <RiCodeLine />, title: 'Mobile Engineering', desc: 'Native-quality Android experiences optimized for performance, reliability, and professional daily use.' },
              { icon: <RiLockLine />, title: 'Security & Compliance', desc: 'Encryption, biometric flows, and audit systems designed with regulatory expectations in mind.' },
              { icon: <RiFocus3Line />, title: 'Product & UX', desc: 'Interfaces that stay out of your way — complex capabilities presented simply for every user.' },
              { icon: <RiRocketLine />, title: 'Rapid Iteration', desc: 'Regular updates driven by real user feedback, security improvements, and new capabilities.' },
              { icon: <RiTeamLine />, title: 'Team Workflows', desc: 'Collaboration patterns that mirror how modern teams actually coordinate work in the field and office.' },
              { icon: <RiGlobalLine />, title: 'India-First, Global Ready', desc: 'Built in India with infrastructure and practices that scale for domestic and international use cases.' },
            ].map(({ icon, title, desc }) => (
              <div className="content-card" key={title}>
                <div className="content-card-icon cyan">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our core values</h2>
            <p className="section-subtitle">
              These principles guide every product decision, design choice, and engineering commitment we make.
            </p>
          </div>
          <div className="values-grid">
            {values.map(({ icon, title, desc }) => (
              <div className="value-card card" key={title}>
                <div className="value-icon">{icon}</div>
                <h3 className="value-title">{title}</h3>
                <p className="value-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Company Info */}
      <section className="section">
        <div className="container">
          <div className="company-info-grid">
            <div>
              <p className="section-label">Company</p>
              <h2 className="section-title">Built by UvRevive</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300', marginBottom: '20px' }}>
                ZygnPro and Zentro are offered by UvRevive, a technology company committed to building meaningful software products that solve real-world professional challenges.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', fontWeight: '300' }}>
                Our team brings together expertise in mobile development, security engineering, UX design, and regulatory compliance to create products that professionals and enterprises can depend on.
              </p>
            </div>
            <div className="company-stats">
              {[
                { icon: <RiFlashlightLine />, label: 'Apps Launched', value: '2' },
                { icon: <RiTeamLine />, label: 'Platform', value: 'Android' },
                { icon: <RiVerifiedBadgeLine />, label: 'Established', value: '2026' },
                { icon: <RiGlobalLine />, label: 'Headquarters', value: 'India' },
              ].map(({ icon, label, value }) => (
                <div className="company-stat" key={label}>
                  <div className="company-stat-icon">{icon}</div>
                  <div className="company-stat-value">{value}</div>
                  <div className="company-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="about-cta-orb" />
        <div className="container text-center">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Questions? We are here to help.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Reach out to our team for product questions, enterprise partnerships, or general inquiries.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <RiArrowRightLine />
            </Link>
            <Link to="/" className="btn btn-secondary btn-lg">
              View Our Apps
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
