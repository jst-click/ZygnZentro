import React, { useState } from 'react';
import {
  RiMailLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiCheckboxLine,
  RiSendPlaneLine,
  RiQuestionLine,
  RiCustomerService2Line,
  RiBuilding2Line,
} from 'react-icons/ri';
import { SUPPORT_EMAIL } from '../constants/contact';
import './ContactUs.css';

const contactTopics = [
  { icon: <RiQuestionLine />, title: 'General Inquiry', desc: 'Questions about our apps or company' },
  { icon: <RiShieldCheckLine />, title: 'ZygnPro Support', desc: 'Technical or signing-related queries' },
  { icon: <RiCheckboxLine />, title: 'Zentro Support', desc: 'Task management and feature questions' },
  { icon: <RiBuilding2Line />, title: 'Enterprise Sales', desc: 'Bulk licensing or custom solutions' },
];

const contactFaqs = [
  { q: 'How quickly will I hear back?', a: 'We aim to respond within 1–2 business days at zygnverify.com@gmail.com. Enterprise and urgent signing issues are prioritized when noted in your message.' },
  { q: 'What should I include in my message?', a: 'Your name, the app you are using (ZygnPro or Zentro), a clear description of your question, and any relevant screenshots or error details for technical issues.' },
  { q: 'Do you offer enterprise or bulk licensing?', a: 'Yes. Select Enterprise Inquiry in the form or choose that topic above. Our team can discuss admin access, volume deployment, and custom requirements.' },
  { q: 'Can I request a feature?', a: 'Absolutely. We actively improve both apps based on user feedback. Share your use case and we will consider it for future releases.' },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    app: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="contact-orb contact-orb-1" />
        <div className="contact-orb contact-orb-2" />
        <div className="container text-center">
          <p className="section-label">Contact Us</p>
          <h1 className="contact-hero-title">We would love to hear from you</h1>
          <p className="contact-hero-subtitle">
            Have a question about ZygnPro, Zentro, or an enterprise partnership? Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="section-sm">
        <div className="container">
          <div className="contact-topics">
            {contactTopics.map(({ icon, title, desc }) => (
              <div className="contact-topic-card" key={title}>
                <div className="contact-topic-icon">{icon}</div>
                <div>
                  <div className="contact-topic-title">{title}</div>
                  <div className="contact-topic-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send us a message</h2>
              <p className="contact-form-subtitle">Fill out the form below and we will respond within 1-2 business days.</p>

              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon"><RiSendPlaneLine /></div>
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. We will get back to you within 1-2 business days.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Related App</label>
                      <select
                        name="app"
                        className="form-input form-select"
                        value={formData.app}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an app</option>
                        <option value="zygnpro">ZygnPro</option>
                        <option value="zentro">Zentro</option>
                        <option value="general">General / Both</option>
                        <option value="enterprise">Enterprise Inquiry</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-input"
                        placeholder="Brief topic summary"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Describe your question or inquiry in detail..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg contact-submit">
                    <RiSendPlaneLine /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info-wrap">
              <h3 className="contact-info-title">Contact Information</h3>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon"><RiMailLine /></div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <div className="contact-info-value">
                      <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
                    </div>
                    <div className="contact-info-note">We respond within 1-2 business days</div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><RiMapPinLine /></div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">India</div>
                    <div className="contact-info-note">Offered by UvRevive</div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon"><RiCustomerService2Line /></div>
                  <div>
                    <div className="contact-info-label">Support Hours</div>
                    <div className="contact-info-value">Mon – Fri, 10am – 6pm IST</div>
                    <div className="contact-info-note">We aim for same-day responses</div>
                  </div>
                </div>
              </div>

              <div className="contact-app-links">
                <h4>Quick App Links</h4>
                <a
                  href="https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-app-link"
                >
                  <div className="app-link-icon blue"><RiShieldCheckLine /></div>
                  <div>
                    <div className="app-link-name">ZygnPro</div>
                    <div className="app-link-desc">Download on Google Play</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-app-link"
                >
                  <div className="app-link-icon green"><RiCheckboxLine /></div>
                  <div>
                    <div className="app-link-name">Zentro</div>
                    <div className="app-link-desc">Download on Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <p className="section-label">Before You Write</p>
            <h2 className="section-title">Quick answers</h2>
          </div>
          <div className="faq-list">
            {contactFaqs.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <div className="faq-question">{q}</div>
                <p className="faq-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
