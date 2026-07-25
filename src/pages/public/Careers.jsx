import { useNavigate } from 'react-router-dom';
import { Button } from '../../design-system/index.js';
import { useApi } from '../../api/client.js';

export default function Careers() {
  const navigate = useNavigate();
  const { data: jobs } = useApi('/jobs');
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
          Careers
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
          Join the corps
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          We recruit volunteers who perform under pressure and hold the line when it counts. Training, equipment, and
          command support are provided at no cost to you — discipline, availability, and readiness are what you bring.
        </p>
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
        {(jobs || []).map((j) => (
          <div
            key={j.code}
            style={{
              background: 'var(--surface-card)',
              display: 'grid',
              gridTemplateColumns: '120px 1fr 160px 120px auto',
              alignItems: 'center',
              padding: '20px 24px',
              gap: 16,
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{j.code}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
              {j.title}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{j.location}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              {j.type}
            </div>
            <Button onClick={() => navigate('/contact')} variant="secondary" size="sm">
              Volunteer
            </Button>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--surface-panel)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '24px 32px',
        }}
      >
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)' }}>
          Don't see your role? We're always assessing qualified volunteers.
        </div>
        <Button onClick={() => navigate('/contact')} size="md">
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
