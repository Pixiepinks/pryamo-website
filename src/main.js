const logo = document.getElementById('siteLogo');
const logoPath = '/assets/logos/pryamo-logo.png';
const logoImage = new Image();
logoImage.onload = () => {
  logo.replaceChildren(logoImage);
};
logoImage.src = logoPath;
logoImage.alt = 'PRYAMO';

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

const orbitServices = [
  { title: 'Web', icon: '⌘', ring: 'outer', angle: 274, text: 'Corporate websites, landing pages, e-commerce and custom web platforms.' },
  { title: 'ERP', icon: '▦', ring: 'outer', angle: 34, text: 'Custom ERP modules for sales, inventory, accounting, HR, payroll, CRM and reports.' },
  { title: 'AI', icon: '◎', ring: 'outer', angle: 154, text: 'AI chatbots, automation, document processing, voice AI and analytics.' },
  { title: 'Mobile', icon: '▣', ring: 'inner', angle: 320, text: 'Android, iOS and cross-platform apps for customers, staff and operations.' },
  { title: 'Cloud', icon: '☁', ring: 'inner', angle: 80, text: 'Cloud hosting, deployment, backups, server migration and scalable infrastructure.' },
  { title: 'Cybersecurity', icon: '◈', ring: 'inner', angle: 200, text: 'Security audits, endpoint protection, backups, firewalls and monitoring.' }
];

const serviceIcons = ['⌘','▦','▣','↻','◎','☁','▤','◈','✺','▧','✦','🛒','⚡','◬','✧','☎'];
document.getElementById('servicesGrid').innerHTML = services.map(([title, text], i) => `<article class="glass-card"><b>${serviceIcons[i]}</b><h3>${title}</h3><p>${text}</p></article>`).join('');
document.getElementById('moduleGrid').innerHTML = erpModules.map(module => `<span>✓ ${module}</span>`).join('');
document.getElementById('industryGrid').innerHTML = industries.map(industry => `<div>🏭 ${industry}</div>`).join('');
document.getElementById('whyGrid').innerHTML = why.map(item => `<div><b>🚀</b><span>${item}</span></div>`).join('');

const orbitStage = document.getElementById('orbitStage');
const orbitPlanets = document.getElementById('orbitPlanets');
const orbitPanel = document.getElementById('orbitPanel');
let activeOrbitIndex = 0;
let userIsHovering = false;
let orbitTimer;

const setActiveOrbitService = index => {
  activeOrbitIndex = index;
  const service = orbitServices[index];
  orbitPanel.innerHTML = `<span>Active orbit</span><h3>${service.title}</h3><p>${service.text}</p>`;
  orbitPlanets.querySelectorAll('.planet-orbit').forEach((item, itemIndex) => {
    item.classList.toggle('active', itemIndex === index);
    item.querySelector('.planet').setAttribute('aria-pressed', String(itemIndex === index));
  });
};

orbitPlanets.innerHTML = orbitServices.map((service, index) => `
  <div class="planet-orbit ${service.ring}" style="--angle:${service.angle}deg; --start:${service.angle}deg; --duration:${service.ring === 'outer' ? '62s' : '48s'};">
    <button class="planet" type="button" data-index="${index}" aria-label="Show ${service.title} details" aria-pressed="false">
      <span class="planet-globe">${service.icon}</span>
      <span class="planet-label">${service.title}</span>
    </button>
  </div>
`).join('');

const startAutoOrbit = () => {
  clearInterval(orbitTimer);
  orbitTimer = setInterval(() => {
    if (!userIsHovering) setActiveOrbitService((activeOrbitIndex + 1) % orbitServices.length);
  }, 3600);
};

orbitPlanets.querySelectorAll('.planet').forEach(planet => {
  planet.addEventListener('mouseenter', () => {
    userIsHovering = true;
    setActiveOrbitService(Number(planet.dataset.index));
  });
  planet.addEventListener('focus', () => {
    userIsHovering = true;
    setActiveOrbitService(Number(planet.dataset.index));
  });
  planet.addEventListener('click', () => setActiveOrbitService(Number(planet.dataset.index)));
});
orbitStage.addEventListener('mouseleave', () => { userIsHovering = false; });
orbitStage.addEventListener('focusout', event => {
  if (!orbitStage.contains(event.relatedTarget)) userIsHovering = false;
});
setActiveOrbitService(activeOrbitIndex);
startAutoOrbit();

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
