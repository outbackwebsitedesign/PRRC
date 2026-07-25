export default function Tabs({ tabs = [], active, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {tabs.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => onChange && onChange(t.id)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
