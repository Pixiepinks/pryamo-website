const services = [
  ['Website Development', 'High-performance websites, portals, and web apps built to convert and scale.'],
  ['ERP System Development', 'Custom ERP platforms that connect every department into one reliable system.'],
  ['Mobile App Development', 'Modern iOS and Android experiences for customers, teams, and operations.'],
  ['Business Automation', 'Automate approvals, documents, reporting, workflows, and repetitive operations.'],
  ['AI Solutions', 'AI assistants, prediction tools, smart search, analytics, and process intelligence.'],
  ['Cloud Solutions', 'Cloud migration, hosting, DevOps, backups, and scalable infrastructure.'],
  ['IT Infrastructure', 'Networks, servers, endpoints, monitoring, and enterprise IT foundations.'],
  ['Cybersecurity', 'Security audits, hardening, endpoint protection, access control, and resilience.'],
  ['Digital Marketing', 'SEO, campaigns, content, analytics, and digital growth systems.'],
  ['UI/UX Design', 'User-friendly interfaces designed for speed, clarity, and adoption.'],
  ['Graphic Design & Branding', 'Premium brand identity, visuals, marketing assets, and design systems.'],
  ['E-commerce Solutions', 'Online stores, payment flows, inventory sync, and marketplace integrations.'],
  ['Software Integration', 'Connect ERP, CRM, websites, apps, APIs, payment gateways, and third-party tools.'],
  ['Data Analytics', 'Dashboards, reports, KPIs, and data pipelines for better decisions.'],
  ['IT Consulting', 'Technology roadmaps, architecture, vendor guidance, and transformation strategy.'],
  ['Maintenance & Support', 'Reliable long-term support, improvements, monitoring, and system care.']
];
const erpModules = ['Sales', 'Purchasing', 'Inventory', 'Accounting', 'Finance', 'Production', 'CRM', 'HR', 'Payroll', 'Attendance', 'Asset Management', 'Maintenance', 'Projects', 'POS', 'Customer Portal', 'Supplier Portal', 'Reports & Dashboards'];
const industries = ['Manufacturing', 'Retail & Wholesale', 'Distribution', 'Construction', 'Education', 'Healthcare', 'Hospitality', 'Logistics', 'Finance', 'Real Estate', 'E-commerce', 'Renewable Energy'];
const why = ['Business-focused software', 'Custom ERP development', 'Scalable cloud-ready architecture', 'AI and automation ready', 'Long-term technical support', 'Clean UI/UX and user-friendly systems'];

const serviceIcons = ['⌘','▦','▣','↻','◎','☁','▤','◈','✺','▧','✦','🛒','⚡','◬','✧','☎'];
document.getElementById('servicesGrid').innerHTML = services.map(([title, text], i) => `<article class="glass-card"><b>${serviceIcons[i]}</b><h3>${title}</h3><p>${text}</p></article>`).join('');
document.getElementById('moduleGrid').innerHTML = erpModules.map(module => `<span>✓ ${module}</span>`).join('');
document.getElementById('industryGrid').innerHTML = industries.map(industry => `<div>🏭 ${industry}</div>`).join('');
document.getElementById('whyGrid').innerHTML = why.map(item => `<div><b>🚀</b><span>${item}</span></div>`).join('');

const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
menuButton.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
