import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiShieldCheckLine,
  RiCheckboxLine,
  RiFingerprint2Line,
  RiLink,
  RiFileListLine,
  RiTeamLine,
  RiMicLine,
  RiBarChart2Line,
  RiNotification3Line,
  RiArrowRightLine,
  RiGooglePlayLine,
  RiVerifiedBadgeLine,
  RiLockLine,
  RiFlashlightLine,
  RiBuilding2Line,
  RiBriefcaseLine,
  RiHealthBookLine,
  RiBankLine,
  RiQuestionLine,
  RiDashboardLine,
  RiCloudLine,
  RiCustomerService2Line,
  RiAwardLine,
  RiBookOpenLine,
  RiDeviceLine,
  RiTimeLine,
  RiCheckLine,
} from 'react-icons/ri';
import './Home.css';

const ZYGNPRO_URL = "https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share";
const ZENTRO_URL = "https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share";

const useCases = [
  { icon: <RiBuilding2Line />, title: 'Enterprises', desc: 'Streamline contracts, approvals, and compliance documents across departments with verified digital signatures.' },
  { icon: <RiBriefcaseLine />, title: 'Legal & Finance', desc: 'Close deals faster with tamper-proof audit trails and identity-bound signatures that stand up to scrutiny.' },
  { icon: <RiHealthBookLine />, title: 'Healthcare', desc: 'Manage consent forms and internal workflows while keeping sensitive records secure and traceable.' },
  { icon: <RiBankLine />, title: 'Banking & Insurance', desc: 'Reduce paper handling for policies, claims, and customer agreements with blockchain-backed integrity.' },
  { icon: <RiTeamLine />, title: 'Remote Teams', desc: 'Coordinate projects in Zentro with real-time sync, voice notes, and location-aware reminders.' },
  { icon: <RiDashboardLine />, title: 'Field Operations', desc: 'Assign site tasks, attach photos, and get notified when team members arrive on location.' },
];

const zygnWorkflow = [
  { step: '01', title: 'Verify Identity', desc: 'Complete biometric verification and OTP authentication to establish a trusted signer profile.' },
  { step: '02', title: 'Upload Document', desc: 'Import PDFs or documents securely. Access is restricted to authorized users only.' },
  { step: '03', title: 'Sign & Record', desc: 'Apply your digital signature with full audit metadata — time, location, and verification status.' },
  { step: '04', title: 'Verify Forever', desc: 'Blockchain hashing ensures any post-signature change is instantly detectable by anyone who verifies.' },
];

const zentroWorkflow = [
  { step: '01', title: 'Plan & Prioritize', desc: 'Create tasks, set deadlines, and organize work by project, team, or priority level.' },
  { step: '02', title: 'Enrich with Context', desc: 'Add voice notes, images, files, and location triggers so nothing gets lost in translation.' },
  { step: '03', title: 'Collaborate Live', desc: 'Assign work to teammates and see updates in real time — everyone stays on the same page.' },
  { step: '04', title: 'Track & Improve', desc: 'Review analytics, activity logs, and completion trends to optimize how your team works.' },
];

const homeFaqs = [
  { q: 'What is the difference between ZygnPro and Zentro?', a: 'ZygnPro is a digital signature platform focused on secure, legally verifiable document signing with biometrics and blockchain proof. Zentro is a productivity app for task management, team collaboration, and workflow analytics. Many professionals use both together.' },
  { q: 'Are ZygnPro and Zentro free to download?', a: 'Yes. Both apps are available on Google Play. Download and explore core features at no upfront cost. Enterprise or advanced requirements can be discussed through our contact page.' },
  { q: 'Which devices are supported?', a: 'Both applications run on Android 7.0 and above. They are optimized for smartphones with reliable performance on modern hardware.' },
  { q: 'Is my data secure?', a: 'Absolutely. Data is encrypted in transit, biometrics are used only for verification in ZygnPro, and neither app sells your information for advertising. See our Privacy Policy for full details.' },
  { q: 'Can I use ZygnPro for legally binding signatures?', a: 'ZygnPro is designed to support legally verifiable digital signatures with identity verification and audit trails. Enforceability depends on your jurisdiction — consult local regulations for your specific use case.' },
  { q: 'How do I get support?', a: 'Email us at zygnverify.com@gmail.com or visit our Contact page for product questions, technical help, or enterprise inquiries. We typically respond within 1–2 business days.' },
  { q: 'Can I use both apps together?', a: 'Yes. Many teams use ZygnPro for contracts and agreements, then manage delivery and follow-ups in Zentro. They complement each other without overlapping features.' },
  { q: 'Do you offer enterprise plans?', a: 'We support organizations that need admin dashboards, volume deployment, and custom workflows. Contact us with your requirements for ZygnPro, Zentro, or both.' },
  { q: 'Where is my data stored?', a: 'Data is handled securely in line with our Privacy Policy. ZygnPro audit records may be retained for compliance; Zentro task data remains under your control with deletion options in-app.' },
  { q: 'How often are apps updated?', a: 'We release regular updates with security patches, performance improvements, and new features based on professional user feedback.' },
];

const trustFeatures = [
  { icon: <RiLockLine />, title: 'End-to-End Encryption', desc: 'Data protected in transit with industry-standard encryption across both applications.' },
  { icon: <RiFingerprint2Line />, title: 'Biometric Verification', desc: 'ZygnPro binds every signature to live identity checks at the moment of signing.' },
  { icon: <RiCloudLine />, title: 'Secure Cloud Sync', desc: 'Zentro keeps teams aligned with reliable sync when connectivity is available.' },
  { icon: <RiAwardLine />, title: 'Compliance Ready', desc: 'Audit trails, OTP auth, and privacy controls built for regulated industries.' },
  { icon: <RiCustomerService2Line />, title: 'Dedicated Support', desc: 'Reach our team for product help, enterprise sales, and technical questions.' },
  { icon: <RiDeviceLine />, title: 'Android Optimized', desc: 'Native mobile experience on Android 7.0+ with professional-grade performance.' },
];

const resources = [
  { icon: <RiShieldCheckLine />, title: 'ZygnPro Guide', desc: 'Explore signing workflows, biometrics, blockchain proof, and enterprise admin tools.', path: '/zygnpro', cta: 'Read ZygnPro details' },
  { icon: <RiCheckboxLine />, title: 'Zentro Guide', desc: 'Learn task management, collaboration, voice notes, and productivity analytics.', path: '/zentro', cta: 'Read Zentro details' },
  { icon: <RiBookOpenLine />, title: 'Privacy & Terms', desc: 'Understand how we handle data, biometrics, and your rights as a user.', path: '/privacy-policy', cta: 'View Privacy Policy' },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>

        <div className="container hero-content">
          <div className="hero-badge animate-fade-up">
            <RiVerifiedBadgeLine />
            <span>ZygnPro & Zentro — Trusted Digital Solutions</span>
          </div>

          <h1 className="hero-title animate-fade-up delay-1">
            <span className="hero-title-gradient">ZygnPro</span>
            <br />
            &amp; <span className="hero-title-gradient hero-title-green">Zentro</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-2">
            ZygnPro delivers biometric digital signatures with blockchain proof. Zentro powers task management, team collaboration, and productivity analytics. Two apps built for professionals who refuse to compromise on security or speed.
          </p>

          <div className="hero-actions animate-fade-up delay-3">
            <Link to="/zygnpro" className="btn btn-primary btn-lg">
              <RiShieldCheckLine /> Explore ZygnPro
            </Link>
            <Link to="/zentro" className="btn btn-secondary btn-lg">
              <RiCheckboxLine /> Explore Zentro
            </Link>
          </div>
        </div>
      </section>

      {/* App Cards */}
      <section className="section apps-section">
        <div className="container">
          <div className="text-center">
            <p className="section-label">Our Applications</p>
            <h2 className="section-title">Built for professionals who demand more</h2>
            <p className="section-subtitle">
              Whether you need legally verifiable digital signatures or a complete productivity ecosystem, our apps deliver exactly that.
            </p>
          </div>

          <div className="app-cards">
            {/* ZygnPro Card */}
            <div className="app-card app-card-zygn">
              <div className="app-card-bg" />
              <div className="app-card-header">
                <div className="app-icon app-icon-blue">
                  <img src="/zygnpro-logo.png" alt="" className="app-logo-img" />
                </div>
                <div className="app-badge badge badge-blue">Digital Signatures</div>
              </div>
              <h3 className="app-card-title">ZygnPro</h3>
              <p className="app-card-desc">
                A secure, legally-compliant digital signature platform with biometric identity verification, blockchain-backed audit trails, and enterprise-grade document management.
              </p>
              <ul className="app-features-list">
                <li><RiShieldCheckLine /> Biometric Identity Verification</li>
                <li><RiLink /> Blockchain-Based Proof</li>
                <li><RiFileListLine /> Tamper-Proof Audit Trails</li>
                <li><RiLockLine /> OTP Authentication</li>
              </ul>
              <div className="app-card-actions">
                <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <RiGooglePlayLine /> Download on Play Store
                </a>
                <Link to="/zygnpro" className="btn btn-outline">
                  Learn More <RiArrowRightLine />
                </Link>
              </div>
            </div>

            {/* Zentro Card */}
            <div className="app-card app-card-zentro">
              <div className="app-card-bg app-card-bg-green" />
              <div className="app-card-header">
                <div className="app-icon app-icon-green">
                  <img src="/zentro-logo.png" alt="" className="app-logo-img" />
                </div>
                <div className="app-badge badge badge-green">Productivity</div>
              </div>
              <h3 className="app-card-title">Zentro</h3>
              <p className="app-card-desc">
                Your all-in-one productivity and task management companion. Smart task creation, real-time team collaboration, voice notes, location-based reminders, and deep analytics.
              </p>
              <ul className="app-features-list">
                <li><RiTeamLine /> Real-Time Team Collaboration</li>
                <li><RiMicLine /> Voice Notes Integration</li>
                <li><RiBarChart2Line /> Progress Insights & Analytics</li>
                <li><RiNotification3Line /> Smart Reminders & Alerts</li>
              </ul>
              <div className="app-card-actions">
                <a href={ZENTRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                  <RiGooglePlayLine /> Download on Play Store
                </a>
                <Link to="/zentro" className="btn btn-outline">
                  Learn More <RiArrowRightLine />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: '2', label: 'Powerful Applications', icon: <RiFlashlightLine /> },
              { value: '100%', label: 'Encrypted & Secure', icon: <RiLockLine /> },
              { value: 'Android 7+', label: 'Device Compatibility', icon: <RiVerifiedBadgeLine /> },
              { value: '18+', label: 'For Professionals', icon: <RiShieldCheckLine /> },
            ].map(({ value, label, icon }) => (
              <div className="stat-card" key={label}>
                <div className="stat-icon">{icon}</div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <p className="section-label">Industries & Teams</p>
            <h2 className="section-title">Built for how you actually work</h2>
            <p className="section-subtitle">
              From regulated industries to fast-moving teams, ZygnPro and Zentro adapt to the workflows that matter most in your organization.
            </p>
          </div>
          <div className="content-grid-3">
            {useCases.map(({ icon, title, desc }) => (
              <div className="content-card" key={title}>
                <div className="content-card-icon blue">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ZygnPro Workflow */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">How ZygnPro Works</p>
            <h2 className="section-title">Sign documents in four simple steps</h2>
            <p className="section-subtitle">
              A streamlined signing flow designed for speed, security, and complete auditability from start to finish.
            </p>
          </div>
          <div className="workflow-timeline">
            {zygnWorkflow.map(({ step, title, desc }) => (
              <div className="workflow-step-card" key={title}>
                <div className="workflow-step-num">{step}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/zygnpro" className="btn btn-primary">
              <RiShieldCheckLine /> See all ZygnPro features <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </section>

      {/* Zentro Workflow */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">How Zentro Works</p>
            <h2 className="section-title">From idea to done — without the chaos</h2>
            <p className="section-subtitle">
              Zentro turns scattered to-dos into a clear, collaborative system your whole team can rely on every day.
            </p>
          </div>
          <div className="workflow-timeline">
            {zentroWorkflow.map(({ step, title, desc }) => (
              <div className="workflow-step-card" key={title}>
                <div className="workflow-step-num">{step}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/zentro" className="btn btn-green">
              <RiCheckboxLine /> See all Zentro features <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Compare */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Compare Apps</p>
            <h2 className="section-title">Two apps, one professional toolkit</h2>
            <p className="section-subtitle">
              Choose the right tool for each job — or use both together for signing and productivity in one ecosystem.
            </p>
          </div>
          <div className="compare-table">
            <div className="compare-row">
              <div className="compare-cell header feature">Capability</div>
              <div className="compare-cell header">ZygnPro</div>
              <div className="compare-cell header">Zentro</div>
            </div>
            {[
              ['Digital document signing', '✓', '—'],
              ['Biometric identity verification', '✓', '—'],
              ['Blockchain audit proof', '✓', '—'],
              ['Task & project management', '—', '✓'],
              ['Team collaboration', '—', '✓'],
              ['Voice notes on tasks', '—', '✓'],
              ['Location-based reminders', '—', '✓'],
              ['Productivity analytics', '—', '✓'],
              ['Admin dashboard', '✓', '—'],
            ].map(([feature, zygn, zentro]) => (
              <div className="compare-row" key={feature}>
                <div className="compare-cell feature">{feature}</div>
                <div className={`compare-cell ${zygn === '✓' ? 'check' : ''}`}>{zygn}</div>
                <div className={`compare-cell ${zentro === '✓' ? 'check' : ''}`}>{zentro}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">What Professionals Say</p>
            <h2 className="section-title">Trusted by teams who can&apos;t afford mistakes</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;ZygnPro cut our contract turnaround from days to hours. The biometric verification gives our legal team confidence every signature is authentic.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar blue">RK</div>
                <div>
                  <div className="testimonial-name">Rajesh K.</div>
                  <div className="testimonial-role">Operations Manager, Enterprise</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;Zentro replaced three different tools for our field team. Voice notes and location reminders alone saved us countless follow-up calls.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar green">PM</div>
                <div>
                  <div className="testimonial-name">Priya M.</div>
                  <div className="testimonial-role">Project Lead, Field Services</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;We use ZygnPro for client agreements and Zentro for internal delivery. Together they cover signing and execution without switching platforms.&rdquo;
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar blue">AS</div>
                <div>
                  <div className="testimonial-name">Amit S.</div>
                  <div className="testimonial-role">Founder, Professional Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why our apps */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <div className="why-content">
              <p className="section-label">Why ZygnPro & Zentro</p>
              <h2 className="section-title">Security and productivity, engineered together</h2>
              <p className="section-subtitle">
                We design tools that don't compromise on trust. Every feature is built with compliance, security, and user experience as the foundation.
              </p>

              <div className="why-points">
                {[
                  {
                    icon: <RiShieldCheckLine />,
                    title: 'Enterprise-Grade Security',
                    desc: 'End-to-end encryption, biometric verification, and blockchain-backed document integrity.',
                  },
                  {
                    icon: <RiVerifiedBadgeLine />,
                    title: 'Legal Compliance',
                    desc: 'Signed documents are verifiable, traceable, and hold up to regulatory scrutiny.',
                  },
                  {
                    icon: <RiFlashlightLine />,
                    title: 'Built for Speed',
                    desc: 'Streamlined workflows that eliminate paperwork and boost team efficiency dramatically.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div className="why-point" key={title}>
                    <div className="why-point-icon">{icon}</div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-visual">
              <div className="visual-card visual-card-top">
                <RiShieldCheckLine />
                <div>
                  <strong>ZygnPro</strong>
                  <span>Document Signed</span>
                </div>
                <div className="visual-status">Verified</div>
              </div>
              <div className="visual-card visual-card-mid">
                <RiLink />
                <div>
                  <strong>Blockchain Hash</strong>
                  <span>Immutable Record Stored</span>
                </div>
              </div>
              <div className="visual-card visual-card-bot">
                <RiCheckboxLine />
                <div>
                  <strong>Zentro Task</strong>
                  <span>3 tasks completed today</span>
                </div>
                <div className="visual-progress">
                  <div className="visual-bar" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Trust & Security</p>
            <h2 className="section-title">Built for professionals who can&apos;t afford risk</h2>
            <p className="section-subtitle">
              Security, privacy, and compliance are not add-ons — they are the foundation of every feature we ship.
            </p>
          </div>
          <div className="content-grid-3">
            {trustFeatures.map(({ icon, title, desc }) => (
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

      {/* Resources */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Resources</p>
            <h2 className="section-title">Learn more before you download</h2>
          </div>
          <div className="content-grid-3">
            {resources.map(({ icon, title, desc, path, cta }) => (
              <div className="content-card resource-card" key={title}>
                <div className="content-card-icon blue">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to={path} className="resource-link">
                  {cta} <RiArrowRightLine />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Together */}
      <section className="section together-section">
        <div className="container">
          <div className="together-inner">
            <div>
              <p className="section-label">Better Together</p>
              <h2 className="section-title">Sign with ZygnPro. Execute with Zentro.</h2>
              <p className="section-subtitle">
                Close the loop between agreements and action. After a contract is signed in ZygnPro, break deliverables into tasks in Zentro — assign owners, set deadlines, attach context, and track completion with full visibility.
              </p>
              <ul className="together-list">
                <li><RiCheckLine className="together-check" /> Contract signed → project tasks created</li>
                <li><RiCheckLine className="together-check" /> Legal proof in ZygnPro, execution tracked in Zentro</li>
                <li><RiCheckLine className="together-check" /> One workflow for agreements and delivery</li>
                <li><RiTimeLine className="together-check" /> Save hours every week on coordination</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '28px' }}>
                <Link to="/zygnpro" className="btn btn-primary">ZygnPro</Link>
                <Link to="/zentro" className="btn btn-green">Zentro</Link>
                <Link to="/about" className="btn btn-secondary">Our Story</Link>
              </div>
            </div>
            <div className="together-visual">
              <div className="together-step">
                <span className="together-step-badge blue">1</span>
                <strong>Sign agreement</strong>
                <p>Biometric verification + blockchain proof in ZygnPro</p>
              </div>
              <div className="together-arrow">↓</div>
              <div className="together-step">
                <span className="together-step-badge green">2</span>
                <strong>Plan delivery</strong>
                <p>Create tasks, assign team, set deadlines in Zentro</p>
              </div>
              <div className="together-arrow">↓</div>
              <div className="together-step">
                <span className="together-step-badge cyan">3</span>
                <strong>Track & complete</strong>
                <p>Real-time updates, voice notes, analytics until done</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common questions</h2>
            <p className="section-subtitle">
              Quick answers about ZygnPro, Zentro, security, and getting started.
            </p>
          </div>
          <div className="faq-list">
            {homeFaqs.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <div className="faq-question"><RiQuestionLine style={{ marginRight: 8, verticalAlign: 'middle' }} />{q}</div>
                <p className="faq-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Download CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-bg-orb" />
            <p className="section-label text-center">Available Now</p>
            <h2 className="section-title text-center">Ready to get started?</h2>
            <p className="section-subtitle text-center">
              Download ZygnPro and Zentro today from the Google Play Store and transform how your team works.
            </p>

            <div className="cta-buttons">
              <a href={ZYGNPRO_URL} target="_blank" rel="noopener noreferrer" className="cta-app-btn">
                <div className="cta-app-icon blue"><RiShieldCheckLine /></div>
                <div className="cta-app-info">
                  <span className="cta-app-store"><RiGooglePlayLine /> Google Play</span>
                  <span className="cta-app-name">ZygnPro</span>
                </div>
              </a>
              <a href={ZENTRO_URL} target="_blank" rel="noopener noreferrer" className="cta-app-btn">
                <div className="cta-app-icon green"><RiCheckboxLine /></div>
                <div className="cta-app-info">
                  <span className="cta-app-store"><RiGooglePlayLine /> Google Play</span>
                  <span className="cta-app-name">Zentro</span>
                </div>
              </a>
            </div>

            <div className="cta-links">
              <Link to="/zygnpro" className="cta-text-link">
                ZygnPro Details <RiArrowRightLine />
              </Link>
              <span>|</span>
              <Link to="/zentro" className="cta-text-link">
                Zentro Details <RiArrowRightLine />
              </Link>
              <span>|</span>
              <Link to="/contact" className="cta-text-link">
                Contact Us <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
