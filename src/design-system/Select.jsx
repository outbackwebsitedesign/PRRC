import Icon from './Icon.jsx';

export default function Select({ label, options = [], value, onChange, style }) {
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
      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={onChange}
          style={{
            appearance: 'none',
            width: '100%',
            background: 'var(--surface-panel)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            padding: '10px 36px 10px 12px',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-body)',
            fontSize: 14,
          }}
        >
          {options.map((o, i) => (
            <option key={i} value={o.value ?? o}>
              {o.label ?? o}
            </option>
          ))}
        </select>
        <Icon
          name="chevronDown"
          size={16}
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
