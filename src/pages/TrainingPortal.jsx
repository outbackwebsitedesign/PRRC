import { useState } from 'react';
import { Badge, Button, Icon } from '../design-system/index.js';
import logoIcon from '../assets/logo-icon.png';

const ICON_STYLE = { color: 'var(--accent-primary)' };
const MUTED_ICON_STYLE = { color: 'var(--text-muted)' };
const SUCCESS_ICON_STYLE = { color: 'var(--status-success)' };

const NAV_DEFS = [
  { id: 'catalog', label: 'Catalogue', icon: 'shieldCheck' },
  { id: 'player', label: 'Course', icon: 'chevronDown' },
  { id: 'progress', label: 'Progress', icon: 'check' },
  { id: 'schedule', label: 'Schedule', icon: 'clock' },
];

const COURSES = [
  { id: 'trn-1', icon: 'alertTriangle', title: 'Disaster Response Fundamentals', desc: 'Core procedures for natural disaster mobilisation and evacuation support.', modules: 6, duration: '3h 20m', status: 'success', statusLabel: 'Enrolled' },
  { id: 'trn-2', icon: 'shieldCheck', title: 'Tactical Security Operations', desc: 'Perimeter control, protection details, and volatile-region protocol.', modules: 8, duration: '4h 45m', status: 'warning', statusLabel: 'In Progress' },
  { id: 'trn-3', icon: 'mapPin', title: 'Search & Rescue Certification', desc: 'K9-supported SAR technique across land, coastal, and urban terrain.', modules: 10, duration: '6h 10m', status: 'neutral', statusLabel: 'Not Started' },
  { id: 'trn-4', icon: 'radio', title: 'Field Survival Training', desc: 'Survival skills and readiness drills for extended field deployment.', modules: 5, duration: '2h 50m', status: 'success', statusLabel: 'Completed' },
  { id: 'trn-5', icon: 'bell', title: 'Incident Command Coordination', desc: 'Working with incident command and partner agencies on scene.', modules: 4, duration: '2h 05m', status: 'neutral', statusLabel: 'Not Started' },
  { id: 'trn-6', icon: 'alertTriangle', title: 'Advanced Medical Response', desc: 'Trauma triage and stabilisation for high-risk field scenarios.', modules: 7, duration: '3h 55m', status: 'neutral', statusLabel: 'Not Started' },
];

const LESSONS = [
  { id: 'l1', icon: 'check', title: '1. Mobilisation Protocol', desc: 'Review activation triggers, standby tiers, and command notification procedure for disaster mobilisation.' },
  { id: 'l2', icon: 'check', title: '2. Evacuation Zoning', desc: 'How to establish and communicate evacuation zones with local authorities and incident command.' },
  { id: 'l3', icon: 'radio', title: '3. Logistics Staging', desc: 'Setting up staging areas for personnel, equipment, and displaced residents.' },
  { id: 'l4', icon: 'chevronDown', title: '4. Comms & Reporting', desc: 'Field reporting cadence and required data points for command updates.' },
  { id: 'l5', icon: 'chevronDown', title: '5. After-Action Review', desc: 'Structuring after-action reports following a disaster response deployment.' },
];

const PROGRESS_STATS = [
  { value: '4', label: 'Courses Enrolled' },
  { value: '68%', label: 'Avg. Completion' },
  { value: '2', label: 'Certifications Active' },
];

const CERTIFICATIONS = [
  { title: 'Field Survival Training', issued: 'Feb 2026', expires: 'Feb 2028', status: 'success', statusLabel: 'Active' },
  { title: 'Search & Rescue Certification', issued: 'Nov 2025', expires: 'Nov 2027', status: 'success', statusLabel: 'Active' },
  { title: 'Tactical Security Operations', issued: '—', expires: '—', status: 'warning', statusLabel: 'In Progress' },
  { title: 'Advanced Medical Response', issued: 'Jun 2024', expires: 'Jun 2026', status: 'danger', statusLabel: 'Expiring Soon' },
];

const SCHEDULE = [
  { when: '28 JUL · 09:00', title: 'Tactical Security Ops — Live Drill', location: 'Ridgeline Range', status: 'warning', statusLabel: 'Upcoming' },
  { when: '02 AUG · 07:30', title: 'Search & Rescue Field Assessment', location: 'Coastal Sector 3', status: 'info', statusLabel: 'Scheduled' },
  { when: '09 AUG · 13:00', title: 'Incident Command Coordination', location: 'HQ Briefing Room', status: 'neutral', statusLabel: 'Scheduled' },
  { when: '15 AUG · 06:00', title: 'Advanced Medical Response — Practical', location: 'Ridgeline Range', status: 'neutral', statusLabel: 'Scheduled' },
  { when: '22 AUG · 09:00', title: 'Annual Fitness & Readiness Test', location: 'HQ Grounds', status: 'danger', statusLabel: 'Mandatory' },
];

const eyebrow = {
  fontFamily: 'var(--font-heading)',
  fontSize: 11,
  letterSpacing: 'var(--tracking-widest)',
  textTransform: 'uppercase',
  color: 'var(--accent-primary)',
  fontWeight: 600,
};
const pageTitle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 28,
  fontWeight: 700,
  textTransform: 'uppercase',
  color: 'var(--text-primary)',
};
const rowStack = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  background: 'var(--border-subtle)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-md)',
  overflow: 'hidden',
};

function Catalog({ onOpen }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Curriculum</div>
        <div style={pageTitle}>Course Catalogue</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {COURSES.map((c) => (
          <button
            key={c.id}
            onClick={() => onOpen(c.id)}
            style={{
              textAlign: 'left',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Icon name={c.icon} size={20} style={ICON_STYLE} />
              <Badge status={c.status}>{c.statusLabel}</Badge>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 15,
                fontWeight: 700,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              {c.title}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, flex: 1 }}>
              {c.desc}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
              {c.modules} MODULES · {c.duration}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Player({ courseId, lessonIndex, setLessonIndex }) {
  const activeCourse = COURSES.find((c) => c.id === courseId) || COURSES[0];
  const activeLesson = LESSONS[lessonIndex];
  return (
    <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20, padding: 32, overflow: 'auto' }}>
        <div>
          <div style={eyebrow}>{activeCourse.title}</div>
          <div style={{ ...pageTitle, fontSize: 24 }}>{activeLesson.title}</div>
        </div>
        <div
          style={{
            background: 'var(--color-black)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            aspectRatio: '16 / 9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="shieldCheck" size={40} style={MUTED_ICON_STYLE} />
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {activeLesson.desc}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="secondary" onClick={() => setLessonIndex(Math.max(0, lessonIndex - 1))}>
            Previous
          </Button>
          <Button onClick={() => setLessonIndex(Math.min(LESSONS.length - 1, lessonIndex + 1))}>
            Mark Complete &amp; Continue
          </Button>
        </div>
      </div>
      <div
        style={{
          width: 280,
          borderLeft: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          padding: 24,
          gap: 10,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 11,
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          Modules
        </div>
        {LESSONS.map((l, i) => {
          const iconStyle = i < lessonIndex ? SUCCESS_ICON_STYLE : i === lessonIndex ? ICON_STYLE : MUTED_ICON_STYLE;
          return (
            <button
              key={l.id}
              onClick={() => setLessonIndex(i)}
              style={{
                textAlign: 'left',
                background: i === lessonIndex ? 'var(--surface-panel)' : 'transparent',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
              }}
            >
              <Icon name={l.icon} size={14} style={iconStyle} />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: i === lessonIndex ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {l.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Progress() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Record</div>
        <div style={pageTitle}>Progress &amp; Certifications</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {PROGRESS_STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 18,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 700, color: 'var(--text-primary)' }}>
              {s.value}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--tracking-wide)',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div style={rowStack}>
        {CERTIFICATIONS.map((c) => (
          <div
            key={c.title}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '1fr 200px 140px 120px',
              alignItems: 'center',
              padding: '14px 18px',
              gap: 12,
            }}
          >
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
              {c.title}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>Issued {c.issued}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>Expires {c.expires}</div>
            <Badge status={c.status}>{c.statusLabel}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Calendar</div>
        <div style={pageTitle}>Schedule</div>
      </div>
      <div style={rowStack}>
        {SCHEDULE.map((s) => (
          <div
            key={s.title}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '180px 1fr 160px 140px',
              alignItems: 'center',
              padding: '14px 18px',
              gap: 12,
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-primary)' }}>{s.when}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
              {s.title}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{s.location}</div>
            <Badge status={s.status}>{s.statusLabel}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrainingPortal() {
  const [screen, setScreen] = useState('catalog');
  const [courseId, setCourseId] = useState('trn-1');
  const [lessonIndex, setLessonIndex] = useState(0);

  const openCourse = (id) => {
    setCourseId(id);
    setLessonIndex(0);
    setScreen('player');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
      <div
        style={{
          width: 220,
          background: 'var(--color-black)',
          borderRight: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '20px 18px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <img src={logoIcon} style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="PRRC" />
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 13,
              color: 'var(--text-primary)',
              letterSpacing: 'var(--tracking-wide)',
              lineHeight: 1.15,
            }}
          >
            PRRC
            <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 'var(--tracking-widest)' }}>TRAINING</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: 12, gap: 2 }}>
          {NAV_DEFS.map((it) => {
            const active = it.id === screen;
            return (
              <button
                key={it.id}
                onClick={() => setScreen(it.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  background: active ? 'var(--surface-panel)' : 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${active ? 'var(--accent-primary)' : 'transparent'}`,
                  color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Icon name={it.icon} size={16} />
                {it.label}
              </button>
            );
          })}
        </div>
      </div>

      {screen === 'catalog' && <Catalog onOpen={openCourse} />}
      {screen === 'player' && <Player courseId={courseId} lessonIndex={lessonIndex} setLessonIndex={setLessonIndex} />}
      {screen === 'progress' && <Progress />}
      {screen === 'schedule' && <Schedule />}
    </div>
  );
}
