import { useState } from 'react';
import { Badge, Button, Icon, Tabs } from '../design-system/index.js';
import { useApi } from '../api/client.js';
import logoIcon from '../assets/logo-icon.png';

const ICON_STYLE = { color: 'var(--accent-primary)' };
const MUTED_ICON_STYLE = { color: 'var(--text-muted)' };

const NAV_DEFS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'shieldCheck' },
  { id: 'missions', label: 'Missions', icon: 'mapPin' },
  { id: 'reports', label: 'Reports', icon: 'clock' },
  { id: 'personnel', label: 'Personnel', icon: 'radio' },
];

const REQ_TABS = [
  { id: 'all', label: 'All' },
  { id: 'urgent', label: 'Urgent' },
  { id: 'pending', label: 'Pending' },
  { id: 'approved', label: 'Approved' },
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
const mono = (color) => ({ fontFamily: 'var(--font-mono)', fontSize: 12, color });
const bodyCell = { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 };

function Dashboard() {
  const { data: stats } = useApi('/stats?group=dashboard');
  const { data: missions } = useApi('/missions?scope=dashboard');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Operations Overview</div>
        <div style={pageTitle}>Command Dashboard</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {(stats || []).map((s) => (
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
            <Icon name={s.icon} size={18} style={ICON_STYLE} />
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 700, color: 'var(--text-primary)' }}>
              {s.value}
            </div>
            <div style={{ ...mono('var(--text-muted)'), fontSize: 11, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            marginBottom: 12,
            letterSpacing: 'var(--tracking-wide)',
          }}
        >
          Active Missions
        </div>
        <div style={rowStack}>
          {(missions || []).map((m) => (
            <div
              key={m.code}
              style={{
                background: 'var(--surface-card)',
                display: 'grid',
                gridTemplateColumns: '120px 1fr 120px 100px',
                alignItems: 'center',
                padding: '14px 18px',
                gap: 12,
              }}
            >
              <div style={mono('var(--text-muted)')}>{m.code}</div>
              <div style={bodyCell}>{m.name}</div>
              <div style={mono('var(--text-secondary)')}>{m.sector}</div>
              <Badge status={m.status}>{m.statusLabel}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Missions() {
  const [tab, setTab] = useState('all');
  const { data: requests } = useApi('/requests');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={eyebrow}>Intake</div>
          <div style={pageTitle}>Mission Requests</div>
        </div>
        <Button icon={<Icon name="plus" size={14} />}>New Request</Button>
      </div>
      <Tabs tabs={REQ_TABS} active={tab} onChange={setTab} />
      <div style={rowStack}>
        {(requests || []).map((r) => (
          <div
            key={r.code}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '100px 1fr 200px 120px 80px',
              alignItems: 'center',
              padding: '14px 18px',
              gap: 12,
            }}
          >
            <div style={mono('var(--text-muted)')}>{r.code}</div>
            <div style={bodyCell}>{r.org}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>{r.type}</div>
            <Badge status={r.status}>{r.statusLabel}</Badge>
            <div style={{ ...mono('var(--text-muted)'), fontSize: 11 }}>{r.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Reports() {
  const { data: reports } = useApi('/reports');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Archive</div>
        <div style={pageTitle}>Reports</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
        {(reports || []).map((r) => (
          <div
            key={r.title}
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 18,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Icon name="clock" size={16} style={MUTED_ICON_STYLE} />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 15,
                fontWeight: 700,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              {r.title}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>{r.desc}</div>
            <div style={{ ...mono('var(--text-muted)'), fontSize: 11 }}>{r.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Personnel() {
  const { data: personnel } = useApi('/personnel');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32, flex: 1, overflow: 'auto' }}>
      <div>
        <div style={eyebrow}>Roster</div>
        <div style={pageTitle}>Personnel</div>
      </div>
      <div style={rowStack}>
        {(personnel || []).map((p) => (
          <div
            key={p.callsign}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '100px 1fr 160px 140px 100px',
              alignItems: 'center',
              padding: '14px 18px',
              gap: 12,
            }}
          >
            <div style={mono('var(--text-muted)')}>{p.callsign}</div>
            <div style={bodyCell}>{p.name}</div>
            <div style={mono('var(--text-secondary)')}>{p.role}</div>
            <div style={mono('var(--text-secondary)')}>{p.sector}</div>
            <Badge status={p.status}>{p.statusLabel}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

const SCREENS = { dashboard: Dashboard, missions: Missions, reports: Reports, personnel: Personnel };

export default function ManagementPortal() {
  const [screen, setScreen] = useState('dashboard');
  const Screen = SCREENS[screen];
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
            <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 'var(--tracking-widest)' }}>OPS PORTAL</div>
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
      <Screen />
    </div>
  );
}
