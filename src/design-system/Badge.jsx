const MAP = {
  success: { bg: 'rgba(76,122,58,.18)', fg: 'var(--status-success)', border: 'rgba(76,122,58,.4)' },
  warning: { bg: 'rgba(217,166,43,.18)', fg: 'var(--status-warning)', border: 'rgba(217,166,43,.4)' },
  danger: { bg: 'rgba(193,39,45,.18)', fg: 'var(--status-danger)', border: 'rgba(193,39,45,.4)' },
  info: { bg: 'rgba(63,110,140,.18)', fg: 'var(--status-info)', border: 'rgba(63,110,140,.4)' },
  neutral: { bg: 'var(--surface-raised)', fg: 'var(--text-secondary)', border: 'var(--border-subtle)' },
};

export default function Badge({ status = 'neutral', children, style }) {
  const c = MAP[status] || MAP.neutral;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        fontFamily: 'var(--font-heading)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.border}`,
        borderRadius: 'var(--radius-sm)',
        ...style,
      }}
    >
      <span
        style={{ width: 6, height: 6, borderRadius: '50%', background: c.fg, display: 'inline-block' }}
      />
      {children}
    </span>
  );
}
