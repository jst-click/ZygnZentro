import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiFileTextLine,
  RiShieldCheckLine,
  RiCheckboxLine,
  RiUserLine,
  RiAlertLine,
  RiLockLine,
  RiScalesLine,
  RiMailLine,
  RiArrowRightLine,
  RiCalendarLine,
  RiProhibitedLine,
  RiRefreshLine,
  RiGlobalLine,
} from 'react-icons/ri';
import { SUPPORT_EMAIL } from '../constants/contact';
import './LegalPage.css';

const sections = [
  {
    icon: <RiUserLine />,
    title: '1. Acceptance of Terms',
    content: [
      {
        subtitle: 'Agreement to Terms',
        text: 'By downloading, installing, or using ZygnPro or Zentro (collectively, "the Applications"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use our applications.',
      },
      {
        subtitle: 'Eligibility',
        text: 'You must be at least 18 years of age to use ZygnPro or Zentro. These applications are designed for professional and legal use cases and are not suitable for minors. By using the Applications, you represent and warrant that you meet this age requirement.',
      },
      {
        subtitle: 'Capacity to Contract',
        text: 'By accepting these Terms, you represent that you have the legal capacity to enter into a binding agreement and that your use of the Applications complies with all applicable laws and regulations in your jurisdiction.',
      },
    ],
  },
  {
    icon: <RiFileTextLine />,
    title: '2. Description of Services',
    content: [
      {
        subtitle: 'ZygnPro',
        text: 'ZygnPro is a secure digital signature platform that enables legally verifiable document signing through biometric identity verification, OTP-based authentication, audit trail generation, and blockchain-based signature verification. ZygnPro is intended for use by businesses, enterprises, legal professionals, financial institutions, government organizations, and individuals who require legally verifiable digital signatures.',
      },
      {
        subtitle: 'Zentro',
        text: 'Zentro is a productivity and task management application that provides smart task creation and assignment, voice note integration, real-time team collaboration, location-based task reminders, media attachments, analytics and progress tracking, and a task history and activity log. Zentro is intended for individuals and teams seeking to improve personal and organizational productivity.',
      },
      {
        subtitle: 'Platform Availability',
        text: 'Both applications are currently available for Android devices running Android 7.0 (API level 24) and above. We do not guarantee availability on all devices or operating system versions beyond those specified.',
      },
    ],
  },
  {
    icon: <RiCheckboxLine />,
    title: '3. User Accounts and Responsibilities',
    content: [
      {
        subtitle: 'Account Registration',
        text: 'To use the Applications, you may be required to register an account using your mobile number. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.',
      },
      {
        subtitle: 'Accurate Information',
        text: 'You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate. Providing false information — particularly in the context of identity verification for ZygnPro — constitutes a material breach of these Terms and may result in immediate account termination.',
      },
      {
        subtitle: 'Account Security',
        text: 'You are responsible for safeguarding your account and must notify us immediately through our Contact page if you suspect unauthorized access to your account. We are not liable for any loss arising from unauthorized use of your account.',
      },
    ],
  },
  {
    icon: <RiShieldCheckLine />,
    title: '4. Permitted Use',
    content: [
      {
        subtitle: 'License Grant',
        text: 'Subject to these Terms, UvRevive grants you a limited, non-exclusive, non-transferable, revocable license to download and use the Applications on your personal device solely for lawful personal or professional purposes.',
      },
      {
        subtitle: 'ZygnPro Permitted Use',
        text: 'You may use ZygnPro to sign documents digitally for legitimate professional, legal, financial, or organizational purposes. All signing actions must represent authentic, authorized acts by you as the verified signer. You agree not to use ZygnPro to sign documents on behalf of another person without explicit authorization.',
      },
      {
        subtitle: 'Zentro Permitted Use',
        text: 'You may use Zentro to manage personal and team tasks, collaborate with authorized colleagues, and track productivity for legitimate personal or professional purposes.',
      },
    ],
  },
  {
    icon: <RiProhibitedLine />,
    title: '5. Prohibited Activities',
    content: [
      {
        subtitle: 'Strictly Prohibited',
        text: 'You agree not to engage in any of the following activities while using the Applications: using the Applications for any unlawful purpose or in violation of applicable laws and regulations; attempting to impersonate another person during biometric or identity verification in ZygnPro; forging, falsifying, or misrepresenting your identity or authorization to sign any document; attempting to reverse-engineer, decompile, or disassemble any part of the Applications; interfering with or disrupting the integrity or performance of the Applications or their infrastructure; attempting to gain unauthorized access to any system, data, account, or network connected to the Applications; uploading or transmitting malicious code, viruses, or harmful content; using the Applications in any manner that could damage, disable, overburden, or impair our systems; or violating the intellectual property rights of UvRevive or any third party.',
      },
      {
        subtitle: 'Consequences of Violation',
        text: 'Violations of these prohibited activities may result in immediate termination of your account, legal action, and reporting to law enforcement or regulatory authorities where applicable.',
      },
    ],
  },
  {
    icon: <RiLockLine />,
    title: '6. Data and Privacy',
    content: [
      {
        subtitle: 'Privacy Policy',
        text: 'Your use of the Applications is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Applications, you consent to the collection and use of your information as described in the Privacy Policy.',
      },
      {
        subtitle: 'Data Accuracy (ZygnPro)',
        text: 'You acknowledge that the accuracy of biometric identity verification is dependent on the quality of the data you provide. You are responsible for ensuring that you are the person performing the identity verification during any signing event in ZygnPro.',
      },
      {
        subtitle: 'Task and Voice Data (Zentro)',
        text: 'You retain ownership of the content you create in Zentro, including tasks, notes, and voice recordings. You grant UvRevive a limited license to store and process this content solely for the purpose of delivering the app\'s features to you.',
      },
    ],
  },
  {
    icon: <RiAlertLine />,
    title: '7. Disclaimers and Limitation of Liability',
    content: [
      {
        subtitle: 'No Warranty',
        text: 'The Applications are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Applications will be error-free, uninterrupted, or free of security vulnerabilities.',
      },
      {
        subtitle: 'Legal Validity (ZygnPro)',
        text: 'While ZygnPro is designed to facilitate legally verifiable digital signatures, UvRevive does not guarantee the legal enforceability of any specific signed document in any particular jurisdiction. The legal validity of digital signatures depends on the applicable laws of the relevant jurisdiction. Users are responsible for ensuring compliance with local laws governing digital signatures.',
      },
      {
        subtitle: 'Limitation of Liability',
        text: 'To the maximum extent permitted by applicable law, UvRevive shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Applications, including but not limited to loss of data, business, revenue, or profits. Our total liability to you for any claim arising out of these Terms shall not exceed the amount you paid us in the twelve months preceding the claim, or INR 1,000, whichever is greater.',
      },
    ],
  },
  {
    icon: <RiScalesLine />,
    title: '8. Intellectual Property',
    content: [
      {
        subtitle: 'Ownership',
        text: 'All intellectual property rights in and to the Applications — including but not limited to software, design, trademarks, logos, content, and technology — are owned by UvRevive or their licensors. These Terms do not grant you any right, title, or interest in our intellectual property beyond the limited license described in Section 4.',
      },
      {
        subtitle: 'Restrictions',
        text: 'You may not copy, modify, distribute, sell, sublicense, or create derivative works based on the Applications or any part thereof without our express prior written consent. The ZygnPro and Zentro names, logos, and branding may not be used without authorization.',
      },
    ],
  },
  {
    icon: <RiRefreshLine />,
    title: '9. Termination',
    content: [
      {
        subtitle: 'Termination by You',
        text: 'You may terminate your account and stop using the Applications at any time by uninstalling the Applications and contacting us to request account deletion.',
      },
      {
        subtitle: 'Termination by Us',
        text: 'We reserve the right to suspend or terminate your account at any time, with or without notice, if we reasonably believe you have violated these Terms, engaged in fraudulent activity, or if required to do so by law.',
      },
      {
        subtitle: 'Effect of Termination',
        text: 'Upon termination, your license to use the Applications ceases immediately. Provisions of these Terms that by their nature should survive termination — including intellectual property rights, disclaimers, limitations of liability, and governing law — shall survive termination.',
      },
    ],
  },
  {
    icon: <RiGlobalLine />,
    title: '10. Governing Law',
    content: [
      {
        subtitle: 'Jurisdiction',
        text: 'These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.',
      },
      {
        subtitle: 'Compliance',
        text: 'Users are responsible for ensuring their use of the Applications complies with all applicable local, national, and international laws, including digital signature laws, data protection regulations, and professional licensing requirements relevant to their jurisdiction.',
      },
    ],
  },
  {
    icon: <RiRefreshLine />,
    title: '11. Changes to These Terms',
    content: [
      {
        subtitle: 'Modifications',
        text: 'UvRevive reserves the right to modify these Terms at any time. We will notify users of material changes through the Applications or via email. Continued use of the Applications after changes take effect constitutes your acceptance of the revised Terms.',
      },
      {
        subtitle: 'Review Obligation',
        text: 'We encourage you to review these Terms periodically to stay informed about your rights and responsibilities. The "Last Updated" date at the top of this page indicates when the Terms were most recently revised.',
      },
    ],
  },
];

const TermsAndConditions = () => {
  return (
    <div className="legal-page">
      {/* Hero */}
      <section className="page-hero legal-hero">
        <div className="legal-hero-orb" style={{ background: 'rgba(245, 158, 11, 0.08)' }} />
        <div className="container">
          <div className="legal-hero-content">
            <div className="legal-hero-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24' }}>
              <RiFileTextLine />
            </div>
            <p className="section-label">Legal</p>
            <h1 className="legal-hero-title">Terms & Conditions</h1>
            <p className="legal-hero-subtitle">
              These Terms and Conditions govern your use of ZygnPro and Zentro, provided by UvRevive. Please read them carefully before using our applications.
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
                      <a href={`#terms-${title.charAt(0)}`} className="legal-toc-link">
                        {title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#terms-contact" className="legal-toc-link">12. Contact Us</a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Content */}
            <div className="legal-content">
              <div className="legal-intro terms-intro">
                <div className="terms-highlight">
                  <p>
                    <strong>Important Notice:</strong> These Terms include provisions governing the use of biometric data and digital signatures in ZygnPro, which carry legal significance. Please read Section 4 (Permitted Use) and Section 5 (Prohibited Activities) carefully before signing any document through ZygnPro.
                  </p>
                </div>
                <p>
                  By downloading or using ZygnPro or Zentro, you enter into a binding legal agreement with UvRevive. These Terms apply to all users of both applications.
                </p>
              </div>

              {sections.map(({ icon, title, content }) => (
                <div className="legal-section" key={title} id={`terms-${title.charAt(0)}`}>
                  <div className="legal-section-header">
                    <div className="legal-section-icon" style={{ background: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.18)', color: '#fbbf24' }}>
                      {icon}
                    </div>
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

              <div className="legal-section" id="terms-contact">
                <div className="legal-section-header">
                  <div className="legal-section-icon" style={{ background: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.18)', color: '#fbbf24' }}>
                    <RiMailLine />
                  </div>
                  <h2 className="legal-section-title">12. Contact Us</h2>
                </div>
                <div className="legal-section-body">
                  <p className="legal-text">
                    If you have questions about these Terms and Conditions, please contact our team. We are happy to clarify any provision before you use our Applications.
                  </p>
                  <div className="legal-contact-block">
                    <div><strong>Company:</strong> UvRevive</div>
                    <div><strong>Apps:</strong> ZygnPro & Zentro</div>
                    <div><strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></div>
                    <div><strong>Location:</strong> India</div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                    <Link to="/contact" className="btn btn-primary">
                      Contact Support <RiArrowRightLine />
                    </Link>
                    <Link to="/privacy-policy" className="btn btn-secondary">
                      Privacy Policy
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

export default TermsAndConditions;
