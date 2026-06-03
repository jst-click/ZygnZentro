import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiDeleteBinLine,
  RiMailLine,
  RiShieldCheckLine,
  RiCheckboxLine,
  RiAlertLine,
  RiArrowRightLine,
  RiCheckLine,
  RiTimeLine,
} from 'react-icons/ri';
import { SUPPORT_EMAIL } from '../constants/contact';
import './LegalPage.css';

const mailtoSubject = encodeURIComponent('Account Deletion Request — ZygnPro / Zevive');
const mailtoBody = encodeURIComponent(
  `Hello,\n\nI would like to request deletion of my account and associated data.\n\nApp: [ZygnPro / Zevive / Both]\nRegistered mobile number or email: \nFull name: \nReason (optional): \n\nThank you.`
);
const mailtoLink = `mailto:${SUPPORT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

const DeleteAccount = () => {
  return (
    <div className="legal-page">
      <section className="page-hero legal-hero">
        <div className="legal-hero-orb" style={{ background: 'rgba(239, 68, 68, 0.08)' }} />
        <div className="container">
          <div className="legal-hero-content">
            <div
              className="legal-hero-icon"
              style={{
                background: 'rgba(239, 68, 68, 0.1)',
                borderColor: 'rgba(239, 68, 68, 0.25)',
                color: '#f87171',
              }}
            >
              <RiDeleteBinLine />
            </div>
            <p className="section-label">Account</p>
            <h1 className="legal-hero-title">Delete Your Account</h1>
            <p className="legal-hero-subtitle">
              If you wish to delete your ZygnPro or Zevive account, send us an email from your registered address.
              We will process your request in line with our Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="legal-layout delete-account-layout">
            <div className="legal-content">
              <div className="delete-email-card">
                <RiMailLine className="delete-email-icon" />
                <h2>Send a deletion request by email</h2>
                <p>
                  To delete your account, email us at{' '}
                  <strong>{SUPPORT_EMAIL}</strong>. Use the button below to open your mail app with a
                  pre-filled message, or copy the address and send your request manually.
                </p>
                <a href={mailtoLink} className="btn btn-primary btn-lg delete-email-btn">
                  <RiMailLine /> Email {SUPPORT_EMAIL}
                </a>
                <p className="delete-email-note">
                  Please send from the email or phone number linked to your app account so we can verify your identity.
                </p>
              </div>

              <div className="legal-section">
                <div className="legal-section-header">
                  <div
                    className="legal-section-icon"
                    style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      borderColor: 'rgba(239, 68, 68, 0.18)',
                      color: '#f87171',
                    }}
                  >
                    <RiCheckLine />
                  </div>
                  <h2 className="legal-section-title">What to include in your email</h2>
                </div>
                <div className="legal-section-body">
                  <ul className="delete-checklist">
                    <li>Which app your account is for: <strong>ZygnPro</strong>, <strong>Zevive</strong>, or <strong>both</strong></li>
                    <li>Your registered <strong>mobile number</strong> or email used in the app</li>
                    <li>Your <strong>full name</strong> as shown in the account</li>
                    <li>A clear statement that you want to <strong>permanently delete</strong> your account and data</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon">
                    <RiTimeLine />
                  </div>
                  <h2 className="legal-section-title">What happens next</h2>
                </div>
                <div className="legal-section-body">
                  <div className="legal-subsection">
                    <p className="legal-text">
                      After we receive your email, our team will verify your request and begin account deletion.
                      You will receive a confirmation reply within <strong>1–2 business days</strong> once the process
                      has started or completed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon">
                    <RiShieldCheckLine />
                  </div>
                  <h2 className="legal-section-title">ZygnPro — important note</h2>
                </div>
                <div className="legal-section-body">
                  <p className="legal-text">
                    Some signing and audit records may need to be kept for legal and compliance reasons, even after
                    your account is deleted. We remove personal account data where permitted by law, but immutable
                    audit or blockchain references tied to signed documents may be retained as required by applicable
                    regulations.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon" style={{ background: 'rgba(5, 150, 105, 0.08)', borderColor: 'rgba(5, 150, 105, 0.18)', color: '#34d399' }}>
                    <RiCheckboxLine />
                  </div>
                  <h2 className="legal-section-title">Zevive — important note</h2>
                </div>
                <div className="legal-section-body">
                  <p className="legal-text">
                    Deleting your Zevive account removes your tasks, voice notes, attachments, and activity history
                    from our systems, subject to standard backup retention periods. This action cannot be undone
                    after deletion is complete.
                  </p>
                </div>
              </div>

              <div className="terms-highlight delete-warning">
                <p>
                  <RiAlertLine style={{ verticalAlign: 'middle', marginRight: 8 }} />
                  <strong>Before you delete:</strong> Export or save any documents, tasks, or data you may need later.
                  Account deletion is permanent for app access and most personal data.
                </p>
              </div>

              <div className="delete-actions">
                <a href={mailtoLink} className="btn btn-primary">
                  <RiMailLine /> Request deletion via email
                </a>
                <Link to="/privacy-policy" className="btn btn-secondary">
                  Privacy Policy <RiArrowRightLine />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Us <RiArrowRightLine />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
