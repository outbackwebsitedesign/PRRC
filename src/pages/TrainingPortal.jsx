import { useState } from 'react';
import { Badge, Button, Icon } from '../design-system/index.js';
import { useApi } from '../api/client.js';
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
  const { data: courses } = useApi('/courses');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Curriculum</div>
        <div style={pageTitle}>Course Catalogue</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {(courses || []).map((c) => (
          <button
            key={c.code}
            onClick={() => onOpen(c.code)}
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

function Player({ courseCode, lessonIndex, setLessonIndex }) {
  const { data: courses } = useApi('/courses');
  const { data: lessonsData } = useApi('/lessons');
  const lessons = lessonsData || [];
  const activeCourse = (courses || []).find((c) => c.code === courseCode) || (courses || [])[0];
  const activeLesson = lessons[lessonIndex];
  if (!activeCourse || !activeLesson) return <div style={{ flex: 1 }} />;
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
          <Button onClick={() => setLessonIndex(Math.min(lessons.length - 1, lessonIndex + 1))}>
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
        {lessons.map((l, i) => {
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
  const { data: progressStats } = useApi('/stats?group=progress');
  const { data: certifications } = useApi('/certifications');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Record</div>
        <div style={pageTitle}>Progress &amp; Certifications</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {(progressStats || []).map((s) => (
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
        {(certifications || []).map((c) => (
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
  const { data: schedule } = useApi('/schedule');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Calendar</div>
        <div style={pageTitle}>Schedule</div>
      </div>
      <div style={rowStack}>
        {(schedule || []).map((s) => (
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
  const [courseCode, setCourseCode] = useState('trn-1');
  const [lessonIndex, setLessonIndex] = useState(0);

  const openCourse = (code) => {
    setCourseCode(code);
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
      {screen === 'player' && <Player courseCode={courseCode} lessonIndex={lessonIndex} setLessonIndex={setLessonIndex} />}
      {screen === 'progress' && <Progress />}
      {screen === 'schedule' && <Schedule />}
    </div>
  );
}
