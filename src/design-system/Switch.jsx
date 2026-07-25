export default function Switch({ checked, onChange, label, style }) {
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
          width: 40,
          height: 22,
          borderRadius: 'var(--radius-full)',
          background: checked ? 'var(--accent-primary)' : 'var(--surface-raised)',
          border: '1px solid var(--border-subtle)',
          position: 'relative',
          transition: 'background var(--duration-fast) var(--ease-standard)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 2,
            left: checked ? 20 : 2,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'var(--color-paper)',
            transition: 'left var(--duration-fast) var(--ease-standard)',
          }}
        />
      </span>
      {label}
    </label>
  );
}
