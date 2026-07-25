import { useEffect, useState } from 'react';
import { Badge, Button, Icon, Tag } from '../design-system/index.js';
import logoIcon from '../assets/logo-icon.png';

const ICON_STYLE = { color: 'var(--accent-primary)' };
const MUTED_ICON_STYLE = { color: 'var(--text-muted)' };
const SUCCESS_ICON_STYLE = { color: 'var(--status-success)' };

const NAV_DEFS = [
  { id: 'missions', label: 'Missions', icon: 'mapPin' },
  { id: 'alerts', label: 'Alerts', icon: 'bell' },
];

const MISSIONS = [
  { id: 'PRRC-2291', name: 'Wildfire Evacuation Support', sector: 'Sector 7', status: 'danger', statusLabel: 'Critical', brief: 'Assist local fire units with evacuation of residential zone. Establish perimeter and coordinate with incident command.' },
  { id: 'PRRC-2288', name: 'Coastal Flood Search & Rescue', sector: 'Sector 3', status: 'warning', statusLabel: 'Active', brief: 'Conduct door-to-door search of flooded coastal blocks. Extract stranded residents to staging area.' },
  { id: 'PRRC-2281', name: 'Perimeter Security Detail', sector: 'Sector 12', status: 'success', statusLabel: 'Stable', brief: 'Maintain perimeter security at client facility. Log all entries and report anomalies to command.' },
];

const ALERTS = [
  { time: '14:02', text: 'Sector 7 upgraded to Critical — all units acknowledge.', status: 'danger', statusLabel: 'Urgent' },
  { time: '13:41', text: 'Weather advisory: high winds expected in Sector 3 after 16:00.', status: 'warning', statusLabel: 'Advisory' },
  { time: '12:55', text: 'Checkpoint Bravo relocated 400m north of original grid.', status: 'info', statusLabel: 'Update' },
  { time: '11:30', text: 'Shift handover complete — Team Alpha on station.', status: 'neutral', statusLabel: 'Log' },
];

function fmtClock(d) {
  return d.toTimeString().slice(0, 5);
}

function Missions({ onSelect }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24, gap: 16, overflow: 'auto' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, textTransform: 'uppercase' }}>
        Assigned Missions
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {MISSIONS.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
            style={{
              textAlign: 'left',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '20px 24px',
              display: 'grid',
              gridTemplateColumns: '140px 1fr 180px 140px',
              alignItems: 'center',
              gap: 16,
              cursor: 'pointer',
              minHeight: 76,
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{m.id}</div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
            >
              {m.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              <Icon name="mapPin" size={14} />
              {m.sector}
            </div>
            <Badge status={m.status}>{m.statusLabel}</Badge>
          </button>
        ))}
      </div>
    </div>
  );
}

function Detail({ selected, onBack, onCheckIn }) {
  return (
    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24, gap: 16, overflow: 'auto' }}>
        <button
          onClick={onBack}
          style={{
            alignSelf: 'flex-start',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            cursor: 'pointer',
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          ← Back to Missions
        </button>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
            {selected.id}
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 700, textTransform: 'uppercase' }}>
            {selected.name}
          </div>
          <Badge status={selected.status} style={{ marginTop: 8 }}>
            {selected.statusLabel}
          </Badge>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Tag>{selected.sector}</Tag>
          <Tag>TEAM ALPHA</Tag>
          <Tag>K9-UNIT</Tag>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {selected.brief}
        </div>
        <Button onClick={onCheckIn} size="lg" style={{ width: 240 }}>
          Check In
        </Button>
      </div>
      <div
        style={{
          width: 340,
          minWidth: 280,
          borderLeft: '1px solid var(--border-subtle)',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: 24,
          gap: 14,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 12,
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 700,
          }}
        >
          Location
        </div>
        <div
          style={{
            background: 'var(--color-black)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
          }}
        >
          <Icon name="mapPin" size={40} style={MUTED_ICON_STYLE} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>
          <Icon name="mapPin" size={14} style={ICON_STYLE} />
          34.0522° S, 138.6011° E
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>
          <Icon name="clock" size={14} style={ICON_STYLE} />
          ETA 00:42:18
        </div>
      </div>
    </div>
  );
}

function CheckIn({ clock, onDone }) {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: '50%',
          background: 'rgba(76,122,58,.18)',
          border: '1px solid var(--status-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="check" size={40} style={SUCCESS_ICON_STYLE} />
      </div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 700, textTransform: 'uppercase' }}>
        Checked In
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>
        Location and status sent to command · {clock}
      </div>
      <Button variant="secondary" onClick={onDone} size="lg" style={{ width: 240 }}>
        Return to Mission
      </Button>
    </div>
  );
}

function Alerts() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24, gap: 16, overflow: 'auto' }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, textTransform: 'uppercase' }}>
        Command Alerts
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
        {ALERTS.map((a) => (
          <div
            key={a.time}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '120px 1fr 100px',
              alignItems: 'center',
              padding: '16px 20px',
              gap: 14,
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{a.time}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' }}>{a.text}</div>
            <Badge status={a.status}>{a.statusLabel}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FieldApp() {
  const [screen, setScreen] = useState('missions');
  const [selectedId, setSelectedId] = useState(null);
  const [clock, setClock] = useState(fmtClock(new Date()));

  useEffect(() => {
    const t = setInterval(() => setClock(fmtClock(new Date())), 15000);
    return () => clearInterval(t);
  }, []);

  const selected = MISSIONS.find((m) => m.id === selectedId) || MISSIONS[0];

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: 'var(--surface-app)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
          background: 'var(--color-black)',
          borderBottom: '1px solid var(--border-subtle)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={logoIcon} style={{ height: 30, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="PRRC" />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>
              MDT-7 · UNIT ALPHA-1
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 'var(--tracking-wide)' }}>
              VEHICLE TERMINAL · FIELD OPS
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-secondary)' }}>
            <Icon name="mapPin" size={16} style={ICON_STYLE} />
            34.9285° S, 138.6007° E
          </div>
          <Badge status="success">Comms: Online</Badge>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--text-primary)', minWidth: 72, textAlign: 'right' }}>
            {clock}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <div
          style={{
            width: 120,
            background: 'var(--color-black)',
            borderRight: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 10px',
            gap: 8,
            flexShrink: 0,
          }}
        >
          {NAV_DEFS.map((it) => {
            const active =
              it.id === screen || (it.id === 'missions' && (screen === 'detail' || screen === 'checkin'));
            return (
              <button
                key={it.id}
                onClick={() => setScreen(it.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  padding: '14px 4px',
                  background: active ? 'var(--surface-panel)' : 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${active ? 'var(--accent-primary)' : 'transparent'}`,
                  borderRadius: 'var(--radius-sm)',
                  color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  minHeight: 72,
                }}
              >
                <Icon name={it.icon} size={24} />
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 10, fontWeight: 700, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', textAlign: 'center' }}>
                  {it.label}
                </div>
              </button>
            );
          })}
          <div style={{ flex: 1 }} />
          <button
            onClick={() => setScreen('alerts')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              padding: '16px 4px',
              background: 'var(--status-danger)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-paper)',
              cursor: 'pointer',
              minHeight: 76,
            }}
          >
            <Icon name="alertTriangle" size={26} />
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-wide)' }}>SOS</div>
          </button>
        </div>

        {screen === 'missions' && <Missions onSelect={(id) => { setSelectedId(id); setScreen('detail'); }} />}
        {screen === 'detail' && (
          <Detail selected={selected} onBack={() => setScreen('missions')} onCheckIn={() => setScreen('checkin')} />
        )}
        {screen === 'checkin' && <CheckIn clock={clock} onDone={() => setScreen('detail')} />}
        {screen === 'alerts' && <Alerts />}
      </div>
    </div>
  );
}
