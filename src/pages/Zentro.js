import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiCheckboxLine,
  RiTeamLine,
  RiMicLine,
  RiBarChart2Line,
  RiNotification3Line,
  RiMapPinLine,
  RiImageLine,
  RiHistoryLine,
  RiListCheck2,
  RiGooglePlayLine,
  RiArrowRightLine,
  RiCheckLine,
  RiTimeLine,
  RiSmartphoneLine,
  RiLockLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import './ProductPage.css';

const ZENTRO_URL = "https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share";

const features = [
  {
    icon: <RiListCheck2 />,
    title: 'Smart Task Management',
    desc: 'Create, organize, and prioritize tasks with ease. Assign tasks to yourself, teammates, or groups and monitor progress in real time with intuitive status tracking.',
  },
  {
    icon: <RiMicLine />,
    title: 'Voice Notes Integration',
    desc: 'Record and attach voice notes directly to tasks for quick ideas, detailed instructions, or on-the-go reminders — no typing required.',
  },
  {
    icon: <RiBarChart2Line />,
    title: 'Progress Tracking & Insights',
    desc: 'Visualize your productivity through charts and analytics dashboards. Monitor completed tasks, identify bottlenecks, and continuously improve your workflow.',
  },
  {
    icon: <RiNotification3Line />,
    title: 'Real-Time Notifications',
    desc: 'Stay updated with instant alerts and reminders so you never miss a critical task, deadline, or team update — even when you are away from the app.',
  },
  {
    icon: <RiMapPinLine />,
    title: 'Location-Based Task Reminders',
    desc: 'Attach specific locations to tasks and receive smart reminders when you are near those places — perfect for field work, errands, and site visits.',
  },
  {
    icon: <RiImageLine />,
    title: 'Media Attachments',
    desc: 'Enhance tasks with images and files directly from your device camera or storage, providing full visual context to every task in your workflow.',
  },
  {
    icon: <RiTeamLine />,
    title: 'Team Collaboration',
    desc: 'Work seamlessly with colleagues by assigning tasks, sharing updates, and staying fully synchronized — keeping everyone aligned and productive.',
  },
  {
    icon: <RiHistoryLine />,
    title: 'Task History & Activity Log',
    desc: 'Maintain a comprehensive record of all tasks and actions for accountability, performance reviews, and detailed workflow analysis over time.',
  },
];

const workflowSteps = [
  'Create tasks and assign them to yourself or teammates',
  'Attach voice notes, images, and files for context',
  'Set deadlines, priorities, and location-based triggers',
  'Monitor progress with real-time analytics and insights',
  'Collaborate in sync — updates appear instantly for all members',
  'Review activity logs for accountability and performance tracking',
];

const zentroUseCases = [
  { icon: <RiTeamLine />, title: 'Team Projects', desc: 'Run sprints, assign owners, and track deliverables with shared visibility across your group.' },
  { icon: <RiMapPinLine />, title: 'Field Work', desc: 'Trigger reminders when arriving at job sites, warehouses, or client locations.' },
  { icon: <RiMicLine />, title: 'Quick Capture', desc: 'Record voice instructions on the go instead of typing long notes on a small screen.' },
  { icon: <RiBarChart2Line />, title: 'Performance Reviews', desc: 'Use activity logs and completion metrics to understand team output over time.' },
  { icon: <RiListCheck2 />, title: 'Personal Productivity', desc: 'Organize daily habits, errands, and personal goals in one distraction-free app.' },
  { icon: <RiNotification3Line />, title: 'Deadline Management', desc: 'Never miss a due date with smart alerts tuned to priority and urgency.' },
];

const zentroBenefits = [
  { title: 'Fewer tools, less friction', desc: 'Replace scattered notes, chat threads, and spreadsheets with one app built for tasks and teams.' },
  { title: 'Context where you need it', desc: 'Photos, voice, and files live on the task — not buried in email or messaging apps.' },
  { title: 'Real-time alignment', desc: 'When one person updates a task, everyone sees it instantly. No refresh, no confusion.' },
  { title: 'Privacy you control', desc: 'Your task data is yours. Delete history anytime and know we never sell your information.' },
];

const zentroFaqs = [
  { q: 'Can I use Zentro alone or with a team?', a: 'Both. Zentro works great for personal task management and scales to team collaboration with assignments, shared projects, and real-time updates.' },
  { q: 'How do location-based reminders work?', a: 'Attach a place to any task. When you enter that area, Zentro can notify you — ideal for errands, site visits, and field workflows.' },
  { q: 'Are voice notes stored securely?', a: 'Yes. Voice recordings are encrypted and tied to your tasks. They are not used for advertising or shared with third parties.' },
  { q: 'Does Zentro work offline?', a: 'Core task features are designed for reliable mobile use. Sync resumes when connectivity returns so your team stays up to date.' },
  { q: 'What analytics does Zentro provide?', a: 'Track completed tasks, progress trends, and bottlenecks through built-in charts and insights dashboards to improve how you work over time.' },
];

const Zentro = () => {
  return (
    <div className="product-page">
      {/* Hero */}
      <section className="page-hero product-hero product-hero-green">
        <div className="product-hero-orb" />
        <div className="container">
          <div className="product-hero-content">
            <div className="product-icon product-icon-green">
              <img src="/zentro-logo.png" alt="" className="product-logo-img" />
            </div>
            <span className="badge badge-green">Productivity & Task Management</span>
            <h1 className="product-hero-title">Zentro</h1>
            <p className="product-hero-subtitle">
              Your all-in-one personal productivity assistant. From managing daily to-dos to running complex team projects — Zentro keeps you organized, efficient, and in control.
            </p>
            <div className="product-hero-meta">
              <span><RiSmartphoneLine /> Android 7.0+</span>
              <span><RiTimeLine /> Latest Version</span>
              <span><RiLockLine /> Privacy First</span>
            </div>
            <div className="hero-actions">
              <a href={ZENTRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-green btn-lg">
                <RiGooglePlayLine /> Download on Google Play
              </a>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us <RiArrowRightLine />
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
              <p className="section-label">About Zentro</p>
              <h2 className="section-title">More than a to-do list — your productivity engine</h2>
              <p className="section-subtitle">
                Zentro combines task management, team collaboration, voice notes, location intelligence, and analytics into one clean, intuitive app that adapts to how you work.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginTop: '16px', fontWeight: '300' }}>
                Whether you are managing solo projects or coordinating across a team, Zentro scales with your workflow — delivering real-time sync, rich media attachments, and actionable insights every step of the way.
              </p>
            </div>
            <div className="overview-stats">
              {[
                { icon: <RiListCheck2 />, val: 'Smart', label: 'Task Management' },
                { icon: <RiTeamLine />, val: 'Real-Time', label: 'Team Collaboration' },
                { icon: <RiBarChart2Line />, val: 'Deep', label: 'Analytics & Insights' },
                { icon: <RiShieldCheckLine />, val: 'Secure', label: 'Privacy-First Data' },
              ].map(({ icon, val, label }) => (
                <div className="overview-stat" key={label}>
                  <div className="overview-stat-icon green">{icon}</div>
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
            <h2 className="section-title">Built to keep you focused and productive</h2>
            <p className="section-subtitle">
              Zentro packs powerful productivity tools into a clean, distraction-free interface designed to help individuals and teams do their best work.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ icon, title, desc }) => (
              <div className="feature-card feature-card-green" key={title}>
                <div className="feature-icon green">{icon}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="use-cases-inner">
            <div>
              <p className="section-label">How Zentro Works</p>
              <h2 className="section-title">A workflow built for results</h2>
              <p className="section-subtitle">
                Zentro is designed to reduce friction and eliminate busywork — so you can spend more time doing and less time organizing.
              </p>
            </div>
            <div className="zentro-flow">
              {workflowSteps.map((step, i) => (
                <div className="flow-step" key={i}>
                  <div className="flow-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <span className="flow-step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Use Cases */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Use Cases</p>
            <h2 className="section-title">Productivity for every kind of work</h2>
            <p className="section-subtitle">
              Whether you work solo or lead a team, Zentro adapts to how you plan, execute, and improve.
            </p>
          </div>
          <div className="content-grid-3">
            {zentroUseCases.map(({ icon, title, desc }) => (
              <div className="content-card" key={title}>
                <div className="content-card-icon green">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div>
              <p className="section-label">Why Zentro</p>
              <h2 className="section-title">Designed to reduce busywork, not add it</h2>
              <p className="section-subtitle">
                Most productivity apps pile on features you never use. Zentro focuses on what actually helps you and your team get things done.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {zentroBenefits.map(({ title, desc }) => (
                <div className="why-point" key={title}>
                  <div className="why-point-icon" style={{ background: 'rgba(5, 150, 105, 0.12)', borderColor: 'rgba(5, 150, 105, 0.2)', color: '#34d399' }}>
                    <RiCheckLine />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Privacy */}
      <section className="section">
        <div className="container">
          <div className="security-inner">
            <div className="security-visual">
              <div className="security-shield" style={{ background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.2), rgba(245, 158, 11, 0.2))', border: '2px solid rgba(5, 150, 105, 0.3)', color: '#34d399' }}>
                <RiLockLine />
              </div>
              <div className="security-rings">
                <div className="ring ring-1" style={{ borderColor: 'rgba(5, 150, 105, 0.2)' }} />
                <div className="ring ring-2" style={{ borderColor: 'rgba(5, 150, 105, 0.12)' }} />
                <div className="ring ring-3" style={{ borderColor: 'rgba(5, 150, 105, 0.06)' }} />
              </div>
            </div>
            <div>
              <p className="section-label">Privacy & Security</p>
              <h2 className="section-title">Your data stays yours</h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Zentro is built on a privacy-first foundation. Your task history, voice recordings, and personal data are protected and never monetized.
              </p>
              <ul className="security-list">
                {[
                  'Your data is fully encrypted and secure',
                  'You control your task history — delete it anytime',
                  'No data sold or shared with third parties',
                  'Voice notes stored locally and encrypted',
                  'Media attachments managed under your control',
                  'Clear data deletion options in-app',
                ].map((point) => (
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

      {/* Tips */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Pro Tips</p>
            <h2 className="section-title">Get more from Zentro every day</h2>
          </div>
          <div className="content-grid-3">
            {[
              { title: 'Start with voice', desc: 'Capture ideas as voice notes while commuting — convert them into structured tasks when you are back at your desk.' },
              { title: 'Use location triggers', desc: 'Attach places to errands and site visits so reminders fire when you arrive, not just at a fixed time.' },
              { title: 'Review weekly analytics', desc: 'Check completion trends every Friday to spot bottlenecks and rebalance workload across the team.' },
              { title: 'Rich task context', desc: 'Add photos and files to tasks so field teams have everything they need without chasing messages.' },
              { title: 'Priority discipline', desc: 'Tag urgent items clearly and limit high-priority tasks to what truly matters today.' },
              { title: 'Activity log reviews', desc: 'Use history for accountability in performance conversations and project retrospectives.' },
            ].map(({ title, desc }) => (
              <div className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Specs */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Technical Overview</p>
            <h2 className="section-title">Zentro at a glance</h2>
          </div>
          <div className="specs-grid">
            {[
              { label: 'Platform', value: 'Android 7.0 and above' },
              { label: 'Tasks', value: 'Create, assign, prioritize, and track with status' },
              { label: 'Collaboration', value: 'Real-time team sync and shared projects' },
              { label: 'Media', value: 'Images, files, and voice note attachments' },
              { label: 'Location', value: 'Geofenced reminders for place-based work' },
              { label: 'Analytics', value: 'Charts, insights, and activity history' },
              { label: 'Notifications', value: 'Deadlines, updates, and smart alerts' },
              { label: 'Privacy', value: 'Encrypted data, no ad-based monetization' },
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
            <h2 className="section-title">Zentro questions answered</h2>
          </div>
          <div className="faq-list">
            {zentroFaqs.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <div className="faq-question">{q}</div>
                <p className="faq-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="section product-cta product-cta-green">
        <div className="product-cta-orb" />
        <div className="container text-center">
          <p className="section-label">Available on Android</p>
          <h2 className="section-title">Take control of your productivity</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Zentro is available now on the Google Play Store. Download it free and start managing your tasks smarter.
          </p>
          <a href={ZENTRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-green btn-lg">
            <RiGooglePlayLine /> Download Zentro — Free
          </a>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="cta-text-link">
              Get in touch <RiArrowRightLine />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Zentro;
