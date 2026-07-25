export default function Card({ eyebrow, title, children, footer, style }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        ...style,
      }}
    >
      {eyebrow ? (
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 11,
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'var(--accent-primary)',
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </div>
      ) : null}
      {children ? (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-secondary)',
            lineHeight: 'var(--leading-normal)',
          }}
        >
          {children}
        </div>
      ) : null}
      {footer ? (
        <div
          style={{
            marginTop: 'var(--space-2)',
            paddingTop: 'var(--space-3)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {footer}
        </div>
      ) : null}
    </div>
  );
}
