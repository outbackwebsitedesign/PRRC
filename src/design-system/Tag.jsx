import Icon from './Icon.jsx';

export default function Tag({ children, onRemove, style }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 8px 4px 10px',
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-secondary)',
        ...style,
      }}
    >
      {children}
      {onRemove ? (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            padding: 0,
          }}
        >
          <Icon name="xMark" size={12} />
        </button>
      ) : null}
    </span>
  );
}
