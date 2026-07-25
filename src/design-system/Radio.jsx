export default function Radio({ label, name, checked, onChange, style }) {
  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-primary)',
        ...style,
      }}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
        }}
      >
        {checked ? (
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--accent-primary)' }} />
        ) : null}
      </span>
      {label}
    </label>
  );
}
