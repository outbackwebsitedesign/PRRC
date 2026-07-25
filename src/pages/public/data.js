export const services = [
  {
    icon: 'alertTriangle',
    title: 'Disaster Response',
    desc: 'Rapid mobilisation for natural disaster zones — evacuation support, logistics, and emergency coordination.',
  },
  {
    icon: 'shieldCheck',
    title: 'Security & Protection',
    desc: 'Close protection, site security, and perimeter control for volatile or high-risk environments.',
  },
  {
    icon: 'mapPin',
    title: 'Search & Rescue',
    desc: 'K9-supported search and rescue across land, coastal, and urban terrain.',
  },
  {
    icon: 'radio',
    title: 'Swift Water Rescue',
    desc: 'Flood and whitewater extraction teams for civilians and personnel trapped by rising water.',
  },
  {
    icon: 'bell',
    title: 'Vertical Rescue',
    desc: 'Rope-rescue teams for cliff, height, and confined-space extraction.',
  },
  {
    icon: 'clock',
    title: 'Survival Training',
    desc: 'Field-grade survival, tactical, and readiness training for personnel and partner units.',
  },
];

export const serviceDetails = [
  {
    icon: 'alertTriangle',
    title: 'Disaster Response',
    desc: 'We mobilise within hours of activation to support evacuation, shelter logistics, and emergency coordination in disaster zones.',
    points: ['Rapid activation, 24/7 standby', 'Evacuation & logistics support', 'Incident command coordination'],
  },
  {
    icon: 'shieldCheck',
    title: 'Security & Protection',
    desc: 'Trained personnel provide close protection and perimeter control in volatile or high-risk environments.',
    points: ['Close protection details', 'Perimeter & site security', 'Volatile-region operations'],
  },
  {
    icon: 'mapPin',
    title: 'Search & Rescue',
    desc: 'K9-supported teams locate and extract missing persons across land, coastal, and urban terrain.',
    points: ['K9 unit deployment', 'Land, coastal & urban SAR', 'Extraction & medical handoff'],
  },
  {
    icon: 'radio',
    title: 'Swift Water Rescue',
    desc: 'Rescue swimmers and boat teams reach and extract people from floodwater and fast-moving currents.',
    points: ['Flood & whitewater extraction', 'Boat & rescue-swimmer teams', 'Civilian & personnel recovery'],
  },
  {
    icon: 'bell',
    title: 'Vertical Rescue',
    desc: 'Rope-access teams recover people from cliffs, structures, and confined spaces where ground access fails.',
    points: ['High-angle rope rescue', 'Confined-space extraction', 'Structural & cliff-face recovery'],
  },
  {
    icon: 'clock',
    title: 'Survival Training',
    desc: 'We train personnel and partner units to operate and survive in demanding field conditions.',
    points: ['Field survival curriculum', 'Tactical readiness drills', 'Custom partner-unit training'],
  },
];

export const stats = [
  { value: '12', label: 'Active Missions' },
  { value: '48', label: 'Personnel Ready' },
  { value: '6', label: 'Sectors Covered' },
  { value: '24/7', label: 'Standby Response' },
];

export const values = [
  { icon: 'shieldCheck', title: 'Precision', desc: 'Every operation is planned and executed to a single standard.' },
  { icon: 'clock', title: 'Readiness', desc: 'Standby teams mobilize on short notice, around the clock.' },
  { icon: 'radio', title: 'Coordination', desc: 'We integrate with incident command and partner agencies.' },
  { icon: 'alertTriangle', title: 'Safety', desc: 'Risk is managed, never ignored, in every deployment.' },
];

export const jobs = [
  { id: 'PRRC-J14', title: 'Tactical Operator', location: 'Ipswich, QLD', type: 'Volunteer' },
  { id: 'PRRC-J11', title: 'Search & Rescue Volunteer', location: 'Field / Rotational', type: 'Volunteer' },
  { id: 'PRRC-J09', title: 'Survival Training Instructor', location: 'Ipswich, QLD', type: 'Volunteer' },
];

export const sectorOptions = [
  'Sector 1–4 (Coastal)',
  'Sector 5–8 (Highland)',
  'Sector 9–12 (Urban)',
  'Other / Unassigned',
];

export const ICON_STYLE = { color: 'var(--accent-primary)' };
export const CHECK_STYLE = { color: 'var(--status-success)' };
