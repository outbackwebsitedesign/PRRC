import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const services = [
  {
    icon: 'alertTriangle',
    title: 'Disaster Response',
    shortDesc: 'Rapid mobilisation for natural disaster zones — evacuation support, logistics, and emergency coordination.',
    longDesc: 'We mobilise within hours of activation to support evacuation, shelter logistics, and emergency coordination in disaster zones.',
    points: ['Rapid activation, 24/7 standby', 'Evacuation & logistics support', 'Incident command coordination'],
  },
  {
    icon: 'shieldCheck',
    title: 'Security & Protection',
    shortDesc: 'Close protection, site security, and perimeter control for volatile or high-risk environments.',
    longDesc: 'Trained personnel provide close protection and perimeter control in volatile or high-risk environments.',
    points: ['Close protection details', 'Perimeter & site security', 'Volatile-region operations'],
  },
  {
    icon: 'mapPin',
    title: 'Search & Rescue',
    shortDesc: 'K9-supported search and rescue across land, coastal, and urban terrain.',
    longDesc: 'K9-supported teams locate and extract missing persons across land, coastal, and urban terrain.',
    points: ['K9 unit deployment', 'Land, coastal & urban SAR', 'Extraction & medical handoff'],
  },
  {
    icon: 'radio',
    title: 'Swift Water Rescue',
    shortDesc: 'Flood and whitewater extraction teams for civilians and personnel trapped by rising water.',
    longDesc: 'Rescue swimmers and boat teams reach and extract people from floodwater and fast-moving currents.',
    points: ['Flood & whitewater extraction', 'Boat & rescue-swimmer teams', 'Civilian & personnel recovery'],
  },
  {
    icon: 'bell',
    title: 'Vertical Rescue',
    shortDesc: 'Rope-rescue teams for cliff, height, and confined-space extraction.',
    longDesc: 'Rope-access teams recover people from cliffs, structures, and confined spaces where ground access fails.',
    points: ['High-angle rope rescue', 'Confined-space extraction', 'Structural & cliff-face recovery'],
  },
  {
    icon: 'clock',
    title: 'Survival Training',
    shortDesc: 'Field-grade survival, tactical, and readiness training for personnel and partner units.',
    longDesc: 'We train personnel and partner units to operate and survive in demanding field conditions.',
    points: ['Field survival curriculum', 'Tactical readiness drills', 'Custom partner-unit training'],
  },
];

const stats = [
  // Home page
  { group: 'home', value: '12', label: 'Active Missions' },
  { group: 'home', value: '48', label: 'Personnel Ready' },
  { group: 'home', value: '6', label: 'Sectors Covered' },
  { group: 'home', value: '24/7', label: 'Standby Response' },
  // Ops dashboard
  { group: 'dashboard', value: '12', label: 'Active Missions', icon: 'mapPin' },
  { group: 'dashboard', value: '7', label: 'Teams Deployed', icon: 'radio' },
  { group: 'dashboard', value: '3', label: 'Open Alerts', icon: 'alertTriangle' },
  { group: 'dashboard', value: '48', label: 'Personnel Ready', icon: 'shieldCheck' },
  // Training progress
  { group: 'progress', value: '4', label: 'Courses Enrolled' },
  { group: 'progress', value: '68%', label: 'Avg. Completion' },
  { group: 'progress', value: '2', label: 'Certifications Active' },
];

const values = [
  { icon: 'shieldCheck', title: 'Precision', desc: 'Every operation is planned and executed to a single standard.' },
  { icon: 'clock', title: 'Readiness', desc: 'Standby teams mobilize on short notice, around the clock.' },
  { icon: 'radio', title: 'Coordination', desc: 'We integrate with incident command and partner agencies.' },
  { icon: 'alertTriangle', title: 'Safety', desc: 'Risk is managed, never ignored, in every deployment.' },
];

const jobs = [
  { code: 'PRRC-J14', title: 'Tactical Operator', location: 'Ipswich, QLD', type: 'Volunteer' },
  { code: 'PRRC-J11', title: 'Search & Rescue Volunteer', location: 'Field / Rotational', type: 'Volunteer' },
  { code: 'PRRC-J09', title: 'Survival Training Instructor', location: 'Ipswich, QLD', type: 'Volunteer' },
];

const sectors = [
  { label: 'Sector 1–4 (Coastal)' },
  { label: 'Sector 5–8 (Highland)' },
  { label: 'Sector 9–12 (Urban)' },
  { label: 'Other / Unassigned' },
];

const contactInfo = {
  hqAddress: '44 Ridgeline Road, Ipswich QLD 4305',
  opsLine: '+61 1800 772 555',
  email: 'command@prrc.ops',
};

const missions = [
  { code: 'PRRC-2291', name: 'Wildfire Evacuation Support', sector: 'Sector 7', status: 'danger', statusLabel: 'Critical', brief: 'Assist local fire units with evacuation of residential zone. Establish perimeter and coordinate with incident command.', activeOnDashboard: true, assignedToField: true },
  { code: 'PRRC-2288', name: 'Coastal Flood Search & Rescue', sector: 'Sector 3', status: 'warning', statusLabel: 'Active', brief: 'Conduct door-to-door search of flooded coastal blocks. Extract stranded residents to staging area.', activeOnDashboard: true, assignedToField: true },
  { code: 'PRRC-2281', name: 'Perimeter Security Detail', sector: 'Sector 12', status: 'success', statusLabel: 'Stable', brief: 'Maintain perimeter security at client facility. Log all entries and report anomalies to command.', activeOnDashboard: true, assignedToField: true },
  { code: 'PRRC-2276', name: 'Survival Training Deployment', sector: 'Sector 5', status: 'info', statusLabel: 'Briefing', brief: null, activeOnDashboard: true, assignedToField: false },
];

const requests = [
  { code: 'REQ-441', org: 'Coastal County Emergency Mgmt', type: 'Flood Response', status: 'warning', statusLabel: 'Pending Review', time: '2h ago' },
  { code: 'REQ-440', org: 'Highland Fire District', type: 'Wildfire Evacuation', status: 'danger', statusLabel: 'Urgent', time: '4h ago' },
  { code: 'REQ-438', org: 'Private Security Client', type: 'VIP Protection Detail', status: 'success', statusLabel: 'Approved', time: '1d ago' },
  { code: 'REQ-435', org: 'Regional Red Cross', type: 'Search & Rescue Support', status: 'info', statusLabel: 'In Review', time: '2d ago' },
];

const reports = [
  { title: 'Q2 Deployment Summary', desc: '18 missions completed across 6 sectors.', date: 'Jul 1, 2026' },
  { title: 'Wildfire Evacuation After-Action Report', desc: 'Sector 7 — full personnel and timeline breakdown.', date: 'Jun 22, 2026' },
  { title: 'Training Readiness Audit', desc: 'Survival & tactical certification status by unit.', date: 'Jun 14, 2026' },
  { title: 'Equipment Inventory Report', desc: 'Fleet, comms gear, and medical supply levels.', date: 'Jun 3, 2026' },
];

const personnel = [
  { callsign: 'ALPHA-1', name: 'R. Vance', role: 'Team Lead', sector: 'Sector 7', status: 'danger', statusLabel: 'Deployed' },
  { callsign: 'BRAVO-2', name: 'M. Okafor', role: 'SAR Specialist', sector: 'Sector 3', status: 'warning', statusLabel: 'Deployed' },
  { callsign: 'CHARLIE-3', name: 'T. Reyes', role: 'Security Operator', sector: 'Sector 12', status: 'success', statusLabel: 'Standby' },
  { callsign: 'DELTA-4', name: 'S. Novak', role: 'Instructor', sector: 'Sector 5', status: 'info', statusLabel: 'Briefing' },
  { callsign: 'ECHO-5', name: 'J. Park', role: 'Medic', sector: 'HQ', status: 'success', statusLabel: 'Standby' },
];

const courses = [
  { code: 'trn-1', icon: 'alertTriangle', title: 'Disaster Response Fundamentals', desc: 'Core procedures for natural disaster mobilisation and evacuation support.', modules: 6, duration: '3h 20m', status: 'success', statusLabel: 'Enrolled' },
  { code: 'trn-2', icon: 'shieldCheck', title: 'Tactical Security Operations', desc: 'Perimeter control, protection details, and volatile-region protocol.', modules: 8, duration: '4h 45m', status: 'warning', statusLabel: 'In Progress' },
  { code: 'trn-3', icon: 'mapPin', title: 'Search & Rescue Certification', desc: 'K9-supported SAR technique across land, coastal, and urban terrain.', modules: 10, duration: '6h 10m', status: 'neutral', statusLabel: 'Not Started' },
  { code: 'trn-4', icon: 'radio', title: 'Field Survival Training', desc: 'Survival skills and readiness drills for extended field deployment.', modules: 5, duration: '2h 50m', status: 'success', statusLabel: 'Completed' },
  { code: 'trn-5', icon: 'bell', title: 'Incident Command Coordination', desc: 'Working with incident command and partner agencies on scene.', modules: 4, duration: '2h 05m', status: 'neutral', statusLabel: 'Not Started' },
  { code: 'trn-6', icon: 'alertTriangle', title: 'Advanced Medical Response', desc: 'Trauma triage and stabilisation for high-risk field scenarios.', modules: 7, duration: '3h 55m', status: 'neutral', statusLabel: 'Not Started' },
];

const lessons = [
  { code: 'l1', icon: 'check', title: '1. Mobilisation Protocol', desc: 'Review activation triggers, standby tiers, and command notification procedure for disaster mobilisation.' },
  { code: 'l2', icon: 'check', title: '2. Evacuation Zoning', desc: 'How to establish and communicate evacuation zones with local authorities and incident command.' },
  { code: 'l3', icon: 'radio', title: '3. Logistics Staging', desc: 'Setting up staging areas for personnel, equipment, and displaced residents.' },
  { code: 'l4', icon: 'chevronDown', title: '4. Comms & Reporting', desc: 'Field reporting cadence and required data points for command updates.' },
  { code: 'l5', icon: 'chevronDown', title: '5. After-Action Review', desc: 'Structuring after-action reports following a disaster response deployment.' },
];

const certifications = [
  { title: 'Field Survival Training', issued: 'Feb 2026', expires: 'Feb 2028', status: 'success', statusLabel: 'Active' },
  { title: 'Search & Rescue Certification', issued: 'Nov 2025', expires: 'Nov 2027', status: 'success', statusLabel: 'Active' },
  { title: 'Tactical Security Operations', issued: '—', expires: '—', status: 'warning', statusLabel: 'In Progress' },
  { title: 'Advanced Medical Response', issued: 'Jun 2024', expires: 'Jun 2026', status: 'danger', statusLabel: 'Expiring Soon' },
];

const schedule = [
  { when: '28 JUL · 09:00', title: 'Tactical Security Ops — Live Drill', location: 'Ridgeline Range', status: 'warning', statusLabel: 'Upcoming' },
  { when: '02 AUG · 07:30', title: 'Search & Rescue Field Assessment', location: 'Coastal Sector 3', status: 'info', statusLabel: 'Scheduled' },
  { when: '09 AUG · 13:00', title: 'Incident Command Coordination', location: 'HQ Briefing Room', status: 'neutral', statusLabel: 'Scheduled' },
  { when: '15 AUG · 06:00', title: 'Advanced Medical Response — Practical', location: 'Ridgeline Range', status: 'neutral', statusLabel: 'Scheduled' },
  { when: '22 AUG · 09:00', title: 'Annual Fitness & Readiness Test', location: 'HQ Grounds', status: 'danger', statusLabel: 'Mandatory' },
];

const alerts = [
  { time: '14:02', text: 'Sector 7 upgraded to Critical — all units acknowledge.', status: 'danger', statusLabel: 'Urgent' },
  { time: '13:41', text: 'Weather advisory: high winds expected in Sector 3 after 16:00.', status: 'warning', statusLabel: 'Advisory' },
  { time: '12:55', text: 'Checkpoint Bravo relocated 400m north of original grid.', status: 'info', statusLabel: 'Update' },
  { time: '11:30', text: 'Shift handover complete — Team Alpha on station.', status: 'neutral', statusLabel: 'Log' },
];

const fieldStatus = {
  unit: 'MDT-7 · UNIT ALPHA-1',
  subtitle: 'VEHICLE TERMINAL · FIELD OPS',
  gps: '34.9285° S, 138.6007° E',
  commsStatus: 'success',
  commsLabel: 'Comms: Online',
};

const withOrder = (rows) => rows.map((row, i) => ({ ...row, order: i }));

async function main() {
  // Idempotent: clear existing rows so re-seeding is safe.
  await prisma.servicePoint.deleteMany();
  await prisma.service.deleteMany();
  await prisma.stat.deleteMany();
  await prisma.value.deleteMany();
  await prisma.job.deleteMany();
  await prisma.sector.deleteMany();
  await prisma.contactInfo.deleteMany();
  await prisma.mission.deleteMany();
  await prisma.request.deleteMany();
  await prisma.report.deleteMany();
  await prisma.personnel.deleteMany();
  await prisma.course.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.scheduleItem.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.fieldStatus.deleteMany();

  for (const [i, s] of services.entries()) {
    await prisma.service.create({
      data: {
        icon: s.icon,
        title: s.title,
        shortDesc: s.shortDesc,
        longDesc: s.longDesc,
        order: i,
        points: { create: withOrder(s.points.map((text) => ({ text }))) },
      },
    });
  }

  await prisma.stat.createMany({ data: withOrder(stats) });
  await prisma.value.createMany({ data: withOrder(values) });
  await prisma.job.createMany({ data: withOrder(jobs) });
  await prisma.sector.createMany({ data: withOrder(sectors) });
  await prisma.contactInfo.create({ data: contactInfo });
  await prisma.mission.createMany({ data: withOrder(missions) });
  await prisma.request.createMany({ data: withOrder(requests) });
  await prisma.report.createMany({ data: withOrder(reports) });
  await prisma.personnel.createMany({ data: withOrder(personnel) });
  await prisma.course.createMany({ data: withOrder(courses) });
  await prisma.lesson.createMany({ data: withOrder(lessons) });
  await prisma.certification.createMany({ data: withOrder(certifications) });
  await prisma.scheduleItem.createMany({ data: withOrder(schedule) });
  await prisma.alert.createMany({ data: withOrder(alerts) });
  await prisma.fieldStatus.create({ data: fieldStatus });

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
