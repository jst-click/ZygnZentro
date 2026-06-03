import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiShieldCheckLine,
  RiFingerprint2Line,
  RiLink,
  RiFileListLine,
  RiLockLine,
  RiFileTextLine,
  RiDashboardLine,
  RiSmartphoneLine,
  RiGooglePlayLine,
  RiArrowRightLine,
  RiCheckLine,
  RiScanLine,
  RiUserLine,
  RiTimeLine,
  RiMapPinLine,
} from 'react-icons/ri';
import './ProductPage.css';

const ZYGNPRO_URL = "https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share";

const features = [
  {
    icon: <RiFingerprint2Line />,
    title: 'Biometric Identity Verification',
    desc: 'Verify signer identity through live photo capture, eye focus detection, and fingerprint or thumb authentication. Ensures the signer is physically present at the time of signing.',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Secure Digital Document Signing',
    desc: 'Upload PDF or document files and apply digital signatures cryptographically linked to your verified identity. Each signature is tamper-evident and independently validatable.',
  },
  {
    icon: <RiLockLine />,
    title: 'OTP-Based Authentication',
    desc: 'Accounts are protected using mobile number verification and one-time password authentication, eliminating traditional password vulnerabilities.',
  },
  {
    icon: <RiFileListLine />,
    title: 'Comprehensive Audit Trails',
    desc: 'Every signing event is recorded with timestamp, approximate location, verification status, and confirmation — supporting compliance and accountability.',
  },
  {
    icon: <RiLink />,
    title: 'Blockchain Verification Layer',
    desc: 'Signature events are hashed onto a blockchain, providing immutable proof of document integrity. Any post-signature alteration is instantly detectable.',
  },
  {
    icon: <RiDashboardLine />,
    title: 'Admin Dashboard & Monitoring',
    desc: 'Authorized administrators can manage users, track document status, view compliance reports, and monitor all signing activity via a dedicated web panel.',
  },
  {
    icon: <RiFileTextLine />,
    title: 'Document Management',
    desc: 'Securely upload, view, download, and manage documents within the app. Access is restricted through robust authentication and authorization controls.',
  },
  {
    icon: <RiSmartphoneLine />,
    title: 'Mobile-First Design',
    desc: 'Designed for Android 7.0 and above, ZygnPro delivers a professional signing experience optimized for smartphones and enterprise-grade reliability.',
  },
];

const useCases = [
  { icon: <RiUserLine />, label: 'Businesses & Enterprises' },
  { icon: <RiFileListLine />, label: 'Legal & Compliance Teams' },
  { icon: <RiShieldCheckLine />, label: 'Financial Institutions' },
  { icon: <RiDashboardLine />, label: 'Government Organizations' },
  { icon: <RiFileTextLine />, label: 'Banking & Insurance' },
  { icon: <RiCheckLine />, label: 'Any Professional Workflow' },
];

const securityPoints = [
  'All data encrypted during transmission',
  'Biometric data collected only for verification',
  'No data sold or used for advertising',
  'Document access controlled via authentication',
  'Compliant with applicable data protection laws',
  'Account deletion available on request',
];

const signingFlow = [
  { step: '01', title: 'Register & Verify', desc: 'Create your account with mobile OTP verification, then complete biometric enrollment for trusted identity binding.' },
  { step: '02', title: 'Prepare Documents', desc: 'Upload PDFs or supported files. Organize pending, signed, and archived documents in one secure workspace.' },
  { step: '03', title: 'Capture & Sign', desc: 'Complete live identity checks at signing time — photo, eye focus, and fingerprint — then apply your digital signature.' },
  { step: '04', title: 'Audit & Anchor', desc: 'Every event is logged with timestamp and location. A blockchain hash anchors proof of document integrity.' },
  { step: '05', title: 'Share & Verify', desc: 'Recipients and auditors can validate signatures and detect any tampering after the document was signed.' },
];

const zygnFaqs = [
  { q: 'What file types can I sign with ZygnPro?', a: 'ZygnPro supports PDF and common document formats for digital signing. Upload directly from your device and manage files within the app\'s secure document library.' },
  { q: 'How does biometric verification work?', a: 'At signing time, ZygnPro may require live photo capture, eye focus confirmation, and fingerprint or thumb authentication to confirm you are the authorized signer and physically present.' },
  { q: 'What is the blockchain verification layer?', a: 'After signing, a cryptographic hash of the document and signing event is recorded on a blockchain. This creates an immutable reference — any alteration to the file after signing becomes detectable.' },
  { q: 'Is there an admin dashboard?', a: 'Yes. Authorized administrators can use the web panel to manage users, monitor signing activity, view compliance reports, and track document status across the organization.' },
  { q: 'Can I delete my account and data?', a: 'You may request account deletion through our support channels. Some audit records may be retained where required by law for digital signature compliance.' },
];

const documentTypes = [
  'Employment & HR agreements',
  'Vendor & procurement contracts',
  'Client service agreements',
  'Loan & financial documents',
  'Insurance policies & claims',
  'Internal compliance forms',
  'Board resolutions & approvals',
  'Consent & authorization letters',
];

const ZygnPro = () => {
  return (
    <div className="product-page">
      {/* Hero */}
      <section className="page-hero product-hero product-hero-blue">
        <div className="product-hero-orb" />
        <div className="container">
          <div className="product-hero-content">
            <div className="product-icon product-icon-blue">
              <img src="/zygnpro-logo.png" alt="" className="product-logo-img" />
            </div>
            <span className="badge badge-blue">Digital Signature Platform</span>
            <h1 className="product-hero-title">ZygnPro</h1>
            <p className="product-hero-subtitle">
              A secure, legally verifiable digital signature platform that binds every signature to a verified identity — powered by biometrics, audit trails, and blockchain technology.
            </p>
            <div className="product-hero-meta">
              <span><RiSmartphoneLine /> Android 7.0+</span>
              <span><RiTimeLine /> Version 1.0.2</span>
              <span><RiCheckLine /> Updated May 2026</span>
            </div>
            <div className="hero-actions">
              <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <RiGooglePlayLine /> Download on Google Play
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Sales <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div>
              <p className="section-label">About ZygnPro</p>
              <h2 className="section-title">Replace paper signing with trusted digital workflows</h2>
              <p className="section-subtitle">
                ZygnPro enables organizations and professionals to sign, manage, and verify documents digitally — with the same legal weight as handwritten signatures, and far greater security.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px', fontWeight: '300' }}>
                By combining biometric identity verification with blockchain-backed audit trails, ZygnPro eliminates document forgery, unauthorized signings, and compliance gaps that plague traditional paper-based workflows.
              </p>
            </div>
            <div className="overview-stats">
              {[
                { icon: <RiShieldCheckLine />, val: 'Biometric', label: 'Identity Verification' },
                { icon: <RiLink />, val: 'Blockchain', label: 'Tamper Proof' },
                { icon: <RiLockLine />, val: '100%', label: 'Data Encrypted' },
                { icon: <RiFileListLine />, val: 'Full', label: 'Audit Trails' },
              ].map(({ icon, val, label }) => (
                <div className="overview-stat" key={label}>
                  <div className="overview-stat-icon blue">{icon}</div>
                  <div className="overview-stat-val">{val}</div>
                  <div className="overview-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">Features</p>
            <h2 className="section-title">Everything you need for secure signing</h2>
            <p className="section-subtitle">
              ZygnPro combines cutting-edge verification technology with a clean, professional interface for seamless document workflows.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ icon, title, desc }) => (
              <div className="feature-card feature-card-blue" key={title}>
                <div className="feature-icon blue">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Signing Flow */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Signing Process</p>
            <h2 className="section-title">End-to-end signing you can trust</h2>
            <p className="section-subtitle">
              Every step is designed to bind identity, document, and proof together — so signatures hold up when it matters most.
            </p>
          </div>
          <div className="workflow-timeline workflow-timeline-5">
            {signingFlow.map(({ step, title, desc }) => (
              <div className="workflow-step-card" key={title}>
                <div className="workflow-step-num">{step}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Document Types */}
      <section className="section">
        <div className="container">
          <div className="use-cases-inner">
            <div>
              <p className="section-label">Document Types</p>
              <h2 className="section-title">Sign the documents that run your business</h2>
              <p className="section-subtitle">
                ZygnPro supports a wide range of professional and legal documents where verification and audit trails are essential.
              </p>
            </div>
            <ul className="security-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
              {documentTypes.map((doc) => (
                <li key={doc}>
                  <span className="security-check"><RiCheckLine /></span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Use Cases */}
      <section className="section use-cases-section">
        <div className="container">
          <div className="use-cases-inner">
            <div>
              <p className="section-label">Who Uses ZygnPro</p>
              <h2 className="section-title">Built for organizations that demand trust</h2>
              <p className="section-subtitle">
                From multinational enterprises to solo professionals, ZygnPro serves anyone who requires legally verifiable, tamper-resistant document signatures.
              </p>
            </div>
            <div className="use-case-grid">
              {useCases.map(({ icon, label }) => (
                <div className="use-case-card" key={label}>
                  <div className="use-case-icon blue">{icon}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Security */}
      <section className="section">
        <div className="container">
          <div className="security-inner">
            <div className="security-visual">
              <div className="security-shield">
                <RiShieldCheckLine />
              </div>
              <div className="security-rings">
                <div className="ring ring-1" />
                <div className="ring ring-2" />
                <div className="ring ring-3" />
              </div>
            </div>
            <div>
              <p className="section-label">Privacy & Security</p>
              <h2 className="section-title">Data protection at every layer</h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                ZygnPro is designed with a privacy-first approach. Your documents and identity data are protected by multiple layers of security and handled in full compliance with applicable laws.
              </p>
              <ul className="security-list">
                {securityPoints.map((point) => (
                  <li key={point}>
                    <span className="security-check"><RiCheckLine /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Tech specs */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Technical Overview</p>
            <h2 className="section-title">Specifications & requirements</h2>
          </div>
          <div className="specs-grid">
            {[
              { label: 'Platform', value: 'Android 7.0 (Nougat) and above' },
              { label: 'Authentication', value: 'Mobile OTP + biometric verification' },
              { label: 'Documents', value: 'PDF and supported document formats' },
              { label: 'Verification', value: 'Live photo, eye focus, fingerprint / thumb' },
              { label: 'Integrity', value: 'Blockchain-anchored signing hashes' },
              { label: 'Audit', value: 'Timestamp, location, status per signing event' },
              { label: 'Admin', value: 'Web dashboard for authorized administrators' },
              { label: 'Encryption', value: 'Data encrypted in transit' },
              { label: 'Age requirement', value: '18+ (professional use)' },
              { label: 'Current version', value: '1.0.2 (May 2026)' },
            ].map(({ label, value }) => (
              <div className="spec-row" key={label}>
                <span className="spec-label">{label}</span>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">ZygnPro questions answered</h2>
          </div>
          <div className="faq-list">
            {zygnFaqs.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <div className="faq-question">{q}</div>
                <p className="faq-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section product-cta product-cta-blue">
        <div className="product-cta-orb" />
        <div className="container text-center">
          <p className="section-label">Available on Android</p>
          <h2 className="section-title">Start signing securely today</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            ZygnPro is live on the Google Play Store. Download now and transform your document workflows.
          </p>
          <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <RiGooglePlayLine /> Download ZygnPro — Free
          </a>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="cta-text-link">
              Enterprise inquiry <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZygnPro;
