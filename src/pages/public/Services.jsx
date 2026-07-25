import { Icon } from '../../design-system/index.js';
import { serviceDetails, ICON_STYLE, CHECK_STYLE } from './data.js';

export default function Services() {
  return (
    <section style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 1100 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
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
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 44,
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}
        >
          Our services
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          PRRC fields trained, equipped personnel across four core mission types. Every deployment is scoped, briefed,
          and executed to a single standard: precision under pressure.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {serviceDetails.map((sd) => (
          <div
            key={sd.title}
            style={{
              display: 'grid',
              gridTemplateColumns: '64px 1fr 1fr',
              gap: 32,
              padding: '32px 0',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <Icon name={sd.icon} size={32} style={ICON_STYLE} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 22,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                {sd.title}
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                {sd.desc}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sd.points.map((pt) => (
                <div
                  key={pt}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon name="check" size={14} style={CHECK_STYLE} />
                  {pt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
