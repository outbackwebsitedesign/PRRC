import Icon from './Icon.jsx';

export default function Checkbox({ label, checked, onChange, style }) {
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
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span
        style={{
          width: 18,
          height: 18,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: checked ? 'var(--accent-primary)' : 'transparent',
          border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
          borderRadius: 'var(--radius-sm)',
        }}
      >
        {checked ? <Icon name="check" size={12} style={{ color: 'var(--text-on-accent)' }} /> : null}
      </span>
      {label}
    </label>
  );
}
