import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '../../design-system/index.js';
import { services, stats, ICON_STYLE } from './data.js';

export default function Home() {
  const navigate = useNavigate();
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          position: 'relative',
          padding: '120px 48px 96px',
          background: 'var(--color-ink-900)',
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(242,102,10,0.04) 0px, rgba(242,102,10,0.04) 1px, transparent 1px, transparent 48px)',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 12,
            letterSpacing: 'var(--tracking-widest)',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Courage in Crisis
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}
        >
          Tactical response when it matters most
        </h1>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-body)',
            fontSize: 20,
            lineHeight: 1.5,
            color: 'var(--text-secondary)',
            maxWidth: 640,
          }}
        >
          PRRC mobilizes specialized personnel for disaster response, security, and every discipline of search and
          rescue — swift water, vertical, and wilderness — for governments, organisations, and civilians alike. One
          command structure, ready for any scenario.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <Button onClick={() => navigate('/contact')} size="lg">
            Request Deployment
          </Button>
          <Button onClick={() => navigate('/services')} variant="secondary" size="lg">
            View Capabilities
          </Button>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: 1,
          background: 'var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: 'var(--surface-panel)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 700, color: 'var(--text-primary)' }}>
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

      <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 640 }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              letterSpacing: 'var(--tracking-widest)',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Capabilities
          </div>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 36,
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            What we do
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {services.map((svc) => (
            <div
              key={svc.title}
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <Icon name={svc.icon} size={24} style={ICON_STYLE} />
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 16,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                {svc.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)', flex: 1 }}>
                {svc.desc}
              </div>
              <button
                onClick={() => navigate('/services')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 'var(--tracking-wider)',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                Learn More <Icon name="arrowRight" size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: 'var(--color-olive-900)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '64px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <div>
          <h2
            style={{
              margin: '0 0 8px',
              fontFamily: 'var(--font-heading)',
              fontSize: 30,
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            Ready to deploy?
          </h2>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-secondary)' }}>
            Standby teams are ready across all sectors, around the clock.
          </div>
        </div>
        <Button onClick={() => navigate('/contact')} size="lg">
          Contact Command
        </Button>
      </div>
    </section>
  );
}
