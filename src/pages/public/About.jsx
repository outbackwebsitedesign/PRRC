import { Icon } from '../../design-system/index.js';
import { useApi } from '../../api/client.js';
import { ICON_STYLE } from './data.js';

export default function About() {
  const { data: values } = useApi('/values');
  return (
    <section style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', gap: 56, maxWidth: 1100 }}>
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
          Mission
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
          Who we are
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          PRRC is a specialized response and rescue unit organised under a military command structure — hence
          "Paramilitary." We answer the call for governments, organisations, and individuals alike: disaster zones,
          volatile territories, floodwater, cliff faces, and open wilderness. Every operator, every discipline, one
          chain of command. We operate with precision, efficiency, and a focus on safety in every deployment.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {(values || []).map((v) => (
          <div
            key={v.title}
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
            <Icon name={v.icon} size={22} style={ICON_STYLE} />
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 15,
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
              }}
            >
              {v.title}
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)' }}>
              {v.desc}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          borderLeft: '2px solid var(--accent-primary)',
          padding: '8px 0 8px 24px',
          fontFamily: 'var(--font-heading)',
          fontSize: 22,
          fontWeight: 600,
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          lineHeight: 1.4,
          maxWidth: 760,
        }}
      >
        "Standby is not idle. It is readiness held in reserve."
      </div>
    </section>
  );
}
