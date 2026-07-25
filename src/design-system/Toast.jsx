import Icon from './Icon.jsx';

const ICONS = { success: 'check', warning: 'alertTriangle', danger: 'alertTriangle', info: 'bell' };
const COLORS = {
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  danger: 'var(--status-danger)',
  info: 'var(--status-info)',
};

export default function Toast({ variant = 'info', title, message, onClose, style }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        background: 'var(--surface-panel)',
        border: '1px solid var(--border-subtle)',
        borderLeft: `3px solid ${COLORS[variant]}`,
        borderRadius: 'var(--radius-sm)',
        padding: '14px 16px',
        boxShadow: 'var(--shadow-md)',
        width: 320,
        ...style,
      }}
    >
      <Icon name={ICONS[variant]} size={18} style={{ color: COLORS[variant], flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        {title ? (
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: 'var(--tracking-wide)',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </div>
        ) : null}
        {message ? (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--text-secondary)',
              marginTop: 4,
            }}
          >
            {message}
          </div>
        ) : null}
      </div>
      {onClose ? (
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
        >
          <Icon name="xMark" size={14} />
        </button>
      ) : null}
    </div>
  );
}
