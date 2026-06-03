/**
 * Site-wide search index for navbar / mobile search.
 */
export const searchIndex = [
  { title: 'Home', path: '/', category: 'Page', keywords: 'home start landing apps' },
  { title: 'ZygnPro', path: '/zygnpro', category: 'App', keywords: 'signature sign document biometric blockchain pdf legal' },
  { title: 'Zentro', path: '/zentro', category: 'App', keywords: 'task productivity todo team collaboration voice notes' },
  { title: 'About Us', path: '/about', category: 'Page', keywords: 'company mission values uvrevive story team' },
  { title: 'Contact Us', path: '/contact', category: 'Page', keywords: 'support help email inquiry enterprise sales zygnverify.com@gmail.com' },
  { title: 'Email Support', path: '/contact', category: 'Support', keywords: 'zygnverify.com@gmail.com email mail contact support' },
  { title: 'Privacy Policy', path: '/privacy-policy', category: 'Legal', keywords: 'privacy data protection gdpr biometric' },
  { title: 'Terms & Conditions', path: '/terms-and-conditions', category: 'Legal', keywords: 'terms legal agreement license' },
  { title: 'Biometric Identity Verification', path: '/zygnpro', category: 'ZygnPro Feature', keywords: 'fingerprint face eye verify identity' },
  { title: 'Blockchain Verification', path: '/zygnpro', category: 'ZygnPro Feature', keywords: 'blockchain hash tamper proof audit' },
  { title: 'Digital Document Signing', path: '/zygnpro', category: 'ZygnPro Feature', keywords: 'pdf sign upload document' },
  { title: 'OTP Authentication', path: '/zygnpro', category: 'ZygnPro Feature', keywords: 'otp password mobile verify' },
  { title: 'Admin Dashboard', path: '/zygnpro', category: 'ZygnPro Feature', keywords: 'admin enterprise monitor compliance' },
  { title: 'Smart Task Management', path: '/zentro', category: 'Zentro Feature', keywords: 'tasks todo assign priority deadline' },
  { title: 'Voice Notes', path: '/zentro', category: 'Zentro Feature', keywords: 'voice record audio memo' },
  { title: 'Team Collaboration', path: '/zentro', category: 'Zentro Feature', keywords: 'team share assign sync realtime' },
  { title: 'Location Reminders', path: '/zentro', category: 'Zentro Feature', keywords: 'location gps geofence reminder field' },
  { title: 'Productivity Analytics', path: '/zentro', category: 'Zentro Feature', keywords: 'analytics charts insights progress' },
  { title: 'Download ZygnPro on Google Play', path: 'https://play.google.com/store/apps/details?id=com.jstclick.zygnpro&pcampaignid=web_share', category: 'Download', keywords: 'download install android play store zygnpro', external: true },
  { title: 'Download Zentro on Google Play', path: 'https://play.google.com/store/apps/details?id=com.jstclick.zentro&pcampaignid=web_share', category: 'Download', keywords: 'download install android play store zentro', external: true },
  { title: 'Enterprise & Bulk Licensing', path: '/contact', category: 'Support', keywords: 'enterprise bulk license organization business' },
  { title: 'Security & Encryption', path: '/', category: 'Topic', keywords: 'security encrypt safe protect data' },
  { title: 'FAQ — Difference between apps', path: '/', category: 'FAQ', keywords: 'faq difference zygnpro zentro compare' },
  { title: 'FAQ — Free download', path: '/', category: 'FAQ', keywords: 'faq free cost price download' },
  { title: 'FAQ — Device support', path: '/', category: 'FAQ', keywords: 'faq android device compatibility' },
];

export function filterSearch(query, limit = 12) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex
    .map((item) => {
      const haystack = `${item.title} ${item.category} ${item.keywords}`.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(q);
      const wordMatch = q.split(/\s+/).every((w) => haystack.includes(w));
      const score = titleMatch ? 3 : wordMatch ? 2 : haystack.includes(q) ? 1 : 0;
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
