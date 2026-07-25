import IconButton from './IconButton.jsx';

export default function Dialog({ open, title, children, onClose, footer }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--surface-overlay)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          width: 420,
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 16,
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
            }}
          >
            {title}
          </div>
          <IconButton name="xMark" aria-label="Close" size="sm" onClick={onClose} />
        </div>
        <div
          style={{
            padding: 20,
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 'var(--leading-normal)',
          }}
        >
          {children}
        </div>
        {footer ? (
          <div
            style={{
              padding: '14px 20px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 10,
            }}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
