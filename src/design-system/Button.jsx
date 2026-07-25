import { useState } from 'react';

const SIZES = {
  sm: { padding: '8px 14px', font: 12 },
  md: { padding: '11px 20px', font: 13 },
  lg: { padding: '14px 26px', font: 14 },
};

function variantStyle(variant, disabled) {
  if (disabled)
    return {
      background: 'var(--color-ink-600)',
      color: 'var(--color-ink-400)',
      border: '1px solid var(--color-ink-600)',
    };
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-strong)',
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid transparent',
      };
    case 'danger':
      return {
        background: 'var(--status-danger)',
        color: 'var(--color-paper)',
        border: '1px solid var(--status-danger)',
      };
    default:
      return {
        background: 'var(--accent-primary)',
        color: 'var(--text-on-accent)',
        border: '1px solid var(--accent-primary)',
      };
  }
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  children,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = useState(false);
  const base = variantStyle(variant, disabled);
  const hoverBg =
    !disabled && variant === 'primary'
      ? 'var(--accent-primary-hover)'
      : !disabled && variant === 'secondary'
        ? 'var(--surface-raised)'
        : !disabled && variant === 'ghost'
          ? 'var(--surface-panel)'
          : base.background;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        fontSize: s.font,
        padding: s.padding,
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition:
          'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
        ...base,
        background: hover ? hoverBg : base.background,
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
