import { useState } from 'react';
import Icon from './Icon.jsx';

export default function IconButton({
  name = 'check',
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 48 }[size] || 40;
  const [hover, setHover] = useState(false);
  const isGhost = variant === 'ghost';
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dims,
        height: dims,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isGhost
          ? hover
            ? 'var(--surface-panel)'
            : 'transparent'
          : hover
            ? 'var(--accent-primary-hover)'
            : 'var(--accent-primary)',
        color: isGhost ? 'var(--text-secondary)' : 'var(--text-on-accent)',
        border: isGhost ? '1px solid var(--border-subtle)' : 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={name} size={dims * 0.5} />
    </button>
  );
}
