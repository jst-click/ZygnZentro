import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiShieldCheckLine,
  RiLockLine,
  RiFileTextLine,
  RiUserLine,
  RiMailLine,
  RiDatabase2Line,
  RiEyeLine,
  RiDeleteBinLine,
  RiArrowRightLine,
  RiCalendarLine,
} from 'react-icons/ri';
import { SUPPORT_EMAIL } from '../constants/contact';
import './LegalPage.css';

const sections = [
  {
    icon: <RiUserLine />,
    title: '1. Information We Collect',
    content: [
      {
        subtitle: '1.1 ZygnPro',
        text: 'ZygnPro collects personal identification information required for digital signature workflows. This includes your mobile number for OTP-based authentication, biometric data (live photo, eye focus confirmation, fingerprint or thumb scan) used exclusively for identity verification during signing, document files you choose to upload and sign, timestamp and approximate location data recorded with each signing event, and device information required for app functionality and security.',
      },
      {
        subtitle: '1.2 Zentro',
        text: 'Zentro collects information necessary to provide task management and collaboration features. This includes your account registration details, task data, voice recordings attached to tasks, media files including images you attach, location data for location-based task reminders (only when you choose to use this feature), and activity and task history logs for tracking and accountability purposes.',
      },
      {
        subtitle: '1.3 Automatically Collected Information',
        text: 'Both applications may automatically collect device type and operating system version, app version and usage data, approximate geographic location (only where necessary for feature functionality), and crash reports and diagnostic data to help us improve app stability.',
      },
    ],
  },
  {
    icon: <RiEyeLine />,
    title: '2. How We Use Your Information',
    content: [
      {
        subtitle: 'Core App Functionality',
        text: 'Your data is used to operate and deliver the features of ZygnPro and Zentro. For ZygnPro, this means verifying your identity before each signing event, generating and storing secure audit trails, enabling document management, and maintaining blockchain-backed records of signed documents. For Zentro, this means creating and managing your tasks, enabling voice note attachment, providing location-based reminders, and facilitating team collaboration.',
      },
      {
        subtitle: 'Security and Compliance',
        text: 'We use collected data to detect unauthorized access attempts, maintain the integrity of signed documents, and comply with applicable legal and regulatory requirements. Audit trail data may be retained in accordance with legal retention requirements relevant to digital signatures and document compliance.',
      },
      {
        subtitle: 'App Improvement',
        text: 'Aggregated, anonymized diagnostic data may be used to identify bugs, improve performance, and enhance the user experience across both applications.',
      },
    ],
  },
  {
    icon: <RiDatabase2Line />,
    title: '3. Data Storage and Security',
    content: [
      {
        subtitle: 'Encryption',
        text: 'All data transmitted between your device and our servers is encrypted using industry-standard protocols. Data stored on our servers is encrypted at rest. Biometric and identity verification data is processed using secure, purpose-limited systems.',
      },
      {
        subtitle: 'Blockchain Records (ZygnPro)',
        text: 'Signing events recorded on the blockchain contain only hashed references to document integrity — not the documents themselves. These records are immutable by design to ensure the integrity and legal validity of signed documents.',
      },
      {
        subtitle: 'Access Controls',
        text: 'Access to user data is strictly limited to authorized personnel and only for purposes outlined in this policy. We do not allow third parties to access your data for their own purposes.',
      },
    ],
  },
  {
    icon: <RiShieldCheckLine />,
    title: '4. Data Sharing',
    content: [
      {
        subtitle: 'We Do Not Sell Your Data',
        text: 'UvRevive does not sell, rent, or trade your personal data or documents to any third party. Your information is not used for advertising, marketing profiling, or any commercial purpose beyond delivering our applications to you.',
      },
      {
        subtitle: 'Limited Sharing',
        text: 'We may share data only in the following limited circumstances: with service providers who assist in operating our infrastructure, under contractual obligations to protect your data; with law enforcement or regulatory bodies when required by applicable law; and in anonymized, aggregated form that cannot identify any individual, for product analytics purposes.',
      },
    ],
  },
  {
    icon: <RiDeleteBinLine />,
    title: '5. Data Retention and Deletion',
    content: [
      {
        subtitle: 'General Data',
        text: 'We retain your personal data for as long as your account is active and necessary to provide our services. When you delete your account, we initiate removal of your personal data subject to legal obligations.',
      },
      {
        subtitle: 'Legal Retention Requirements',
        text: 'Certain data — particularly audit trail records and signed document references required for legal and compliance purposes under digital signature laws — may be retained for defined periods as required by applicable regulations, even after account deletion.',
      },
      {
        subtitle: 'How to Request Deletion',
        text: 'You can request account deletion by sending an email to zygnverify.com@gmail.com from your registered contact details. Visit our Delete Account page for step-by-step instructions. We will acknowledge and process your request in accordance with applicable data protection laws.',
      },
    ],
  },
  {
    icon: <RiFileTextLine />,
    title: '6. Your Rights',
    content: [
      {
        subtitle: 'Access and Correction',
        text: 'You have the right to access the personal data we hold about you and to request corrections where the data is inaccurate or incomplete.',
      },
      {
        subtitle: 'Deletion',
        text: 'Subject to legal retention requirements, you have the right to request deletion of your personal data. We will honor deletion requests where legally permissible.',
      },
      {
        subtitle: 'Data Portability',
        text: 'You may request a copy of your personal data in a portable format. Contact our support team to initiate this request.',
      },
      {
        subtitle: 'Objection',
        text: 'You may object to certain uses of your data at any time. In many cases, this will mean we are unable to continue providing the service, as data collection is necessary for core functionality.',
      },
    ],
  },
  {
    icon: <RiLockLine />,
    title: '7. Biometric Data (ZygnPro)',
    content: [
      {
        subtitle: 'Collection Purpose',
        text: 'Biometric data — including live photos, eye focus confirmation, and fingerprint or thumb impressions — is collected exclusively to verify signer identity at the time of each document signing. This verification is the core security mechanism of ZygnPro.',
      },
      {
        subtitle: 'Handling',
        text: 'Biometric data is not stored permanently beyond what is necessary to generate and verify the signing record. It is not used for any purpose other than identity verification within ZygnPro. It is not shared with third parties for advertising, profiling, or any commercial purpose.',
      },
    ],
  },
  {
    icon: <RiMailLine />,
    title: '8. Children\'s Privacy',
    content: [
      {
        subtitle: 'Age Restriction',
        text: 'Both ZygnPro and Zentro are intended for users aged 18 years and above. These applications are designed for professional and legal use cases. We do not knowingly collect personal data from individuals under the age of 18. If we become aware that a minor has provided us with personal information, we will take immediate steps to delete that data.',
      },
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="page-hero legal-hero">
        <div className="legal-hero-orb" />
        <div className="container">
          <div className="legal-hero-content">
            <div className="legal-hero-icon">
              <RiShieldCheckLine />
            </div>
            <p className="section-label">Legal</p>
            <h1 className="legal-hero-title">Privacy Policy</h1>
            <p className="legal-hero-subtitle">
              This Privacy Policy explains how UvRevive collects, uses, and protects your information across ZygnPro and Zentro.
            </p>
            <div className="legal-meta">
              <span><RiCalendarLine /> Effective Date: February 3, 2026</span>
              <span><RiCalendarLine /> Last Updated: May 15, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="legal-layout">
            {/* TOC */}
            <aside className="legal-toc">
              <div className="legal-toc-inner">
                <h4 className="legal-toc-title">Contents</h4>
                <ul className="legal-toc-list">
                  {sections.map(({ title }) => (
                    <li key={title}>
                      <a href={`#section-${title.charAt(0)}`} className="legal-toc-link">
                        {title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#contact-section" className="legal-toc-link">9. Contact Us</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Sections */}
            <div className="legal-content">
              <div className="legal-intro">
                <p>
                  UvRevive offers two applications: <strong>ZygnPro</strong> (a secure digital signature platform) and <strong>Zentro</strong> (a productivity and task management application). We are committed to protecting your privacy and handling your data transparently and responsibly.
                </p>
                <p>
                  This policy applies to both applications. Where practices differ between the two apps, we clearly indicate which app is being described.
                </p>
              </div>

              {sections.map(({ icon, title, content }) => (
                <div className="legal-section" key={title} id={`section-${title.charAt(0)}`}>
                  <div className="legal-section-header">
                    <div className="legal-section-icon">{icon}</div>
                    <h2 className="legal-section-title">{title}</h2>
                  </div>
                  <div className="legal-section-body">
                    {content.map(({ subtitle, text }) => (
                      <div className="legal-subsection" key={subtitle}>
                        <h3 className="legal-subsection-title">{subtitle}</h3>
                        <p className="legal-text">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="legal-section" id="contact-section">
                <div className="legal-section-header">
                  <div className="legal-section-icon"><RiMailLine /></div>
                  <h2 className="legal-section-title">9. Contact Us</h2>
                </div>
                <div className="legal-section-body">
                  <p className="legal-text">
                    If you have questions, requests, or concerns about this Privacy Policy or how your data is handled, please contact us. We will respond to your inquiry within a reasonable timeframe.
                  </p>
                  <div className="legal-contact-block">
                    <div><strong>Company:</strong> UvRevive</div>
                    <div><strong>Apps:</strong> ZygnPro & Zentro</div>
                    <div><strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></div>
                    <div><strong>Location:</strong> India</div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <Link to="/delete-account" className="btn btn-primary">
                      Delete Account <RiArrowRightLine />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                      Contact Support <RiArrowRightLine />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
