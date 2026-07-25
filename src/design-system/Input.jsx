export default function Input({ label, placeholder, value, onChange, error, type = 'text', style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label ? (
        <label
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 11,
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            fontWeight: 600,
          }}
        >
          {label}
        </label>
      ) : null}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          background: 'var(--surface-panel)',
          border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-subtle)'}`,
          borderRadius: 'var(--radius-sm)',
          padding: '10px 12px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          outline: 'none',
        }}
      />
      {error ? (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--status-danger)' }}>
          {error}
        </div>
      ) : null}
    </div>
  );
}
