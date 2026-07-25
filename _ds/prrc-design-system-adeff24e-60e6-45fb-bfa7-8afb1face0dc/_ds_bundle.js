/* @ds-bundle: {"format":4,"namespace":"PRRCDesignSystem_adeff2","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f6dc1d091034","components/core/Button.jsx":"e2b6b6d24d3e","components/core/Card.jsx":"6df7a2c13bbf","components/core/Icon.jsx":"3012a0a286ae","components/core/IconButton.jsx":"593699cd4458","components/core/Tag.jsx":"f9ab34d51c10","components/feedback/Toast.jsx":"1de5295ee3c1","components/feedback/Tooltip.jsx":"45c49069b637","components/forms/Checkbox.jsx":"0858d9fc17ae","components/forms/Input.jsx":"ae656d1d9a98","components/forms/Radio.jsx":"6dc83790186f","components/forms/Select.jsx":"c8963270ccc8","components/forms/Switch.jsx":"84523180f055","components/navigation/Tabs.jsx":"bae8d09deafc","components/overlay/Dialog.jsx":"561f02d01ce0","ui_kits/field-app/CheckInScreen.jsx":"32486d0cb69b","ui_kits/field-app/LoginScreen.jsx":"1cc51fba95cf","ui_kits/field-app/MissionDetailScreen.jsx":"be262908e68c","ui_kits/field-app/MissionListScreen.jsx":"63bba7c6f606","ui_kits/ops-portal/DashboardScreen.jsx":"9ab96a8d05dc","ui_kits/ops-portal/MissionsScreen.jsx":"a80cd1a3743c","ui_kits/ops-portal/ReportsScreen.jsx":"d2cca45447e0","ui_kits/ops-portal/Sidebar.jsx":"fa5f4f6eae8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PRRCDesignSystem_adeff2 = window.PRRCDesignSystem_adeff2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const MAP = {
  success: {
    bg: 'rgba(76,122,58,.18)',
    fg: 'var(--status-success)',
    border: 'rgba(76,122,58,.4)'
  },
  warning: {
    bg: 'rgba(217,166,43,.18)',
    fg: 'var(--status-warning)',
    border: 'rgba(217,166,43,.4)'
  },
  danger: {
    bg: 'rgba(193,39,45,.18)',
    fg: 'var(--status-danger)',
    border: 'rgba(193,39,45,.4)'
  },
  info: {
    bg: 'rgba(63,110,140,.18)',
    fg: 'var(--status-info)',
    border: 'rgba(63,110,140,.4)'
  },
  neutral: {
    bg: 'var(--surface-raised)',
    fg: 'var(--text-secondary)',
    border: 'var(--border-subtle)'
  }
};
function Badge({
  status = 'neutral',
  children,
  style
}) {
  const c = MAP[status] || MAP.neutral;
  return React.createElement('span', {
    style: {
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
      ...style
    }
  }, React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c.fg,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '8px 14px',
    font: 12
  },
  md: {
    padding: '11px 20px',
    font: 13
  },
  lg: {
    padding: '14px 26px',
    font: 14
  }
};
function variantStyle(variant, disabled) {
  if (disabled) return {
    background: 'var(--color-ink-600)',
    color: 'var(--color-ink-400)',
    border: '1px solid var(--color-ink-600)'
  };
  switch (variant) {
    case 'secondary':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid transparent'
      };
    case 'danger':
      return {
        background: 'var(--status-danger)',
        color: 'var(--color-paper)',
        border: '1px solid var(--status-danger)'
      };
    default:
      return {
        background: 'var(--accent-primary)',
        color: 'var(--text-on-accent)',
        border: '1px solid var(--accent-primary)'
      };
  }
}
function Button({
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
  const [hover, setHover] = React.useState(false);
  const base = variantStyle(variant, disabled);
  const hoverBg = !disabled && variant === 'primary' ? 'var(--accent-primary-hover)' : !disabled && variant === 'secondary' ? 'var(--surface-raised)' : !disabled && variant === 'ghost' ? 'var(--surface-panel)' : base.background;
  return React.createElement('button', {
    onClick: disabled ? undefined : onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
      ...base,
      background: hover ? hoverBg : base.background,
      ...style
    },
    ...rest
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  eyebrow,
  title,
  children,
  footer,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)',
      fontWeight: 600
    }
  }, eyebrow) : null, title ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-primary)',
      textTransform: 'uppercase'
    }
  }, title) : null, children ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children) : null, footer ? React.createElement('div', {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const PATHS = {
  chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
  check: 'M4.5 12.75l6 6 9-13.5',
  xMark: 'M6 18L18 6M6 6l12 12',
  alertTriangle: 'M12 9v3.75m0 3.75h.008v.008H12v-.008zM9.401 3.003c1.155-2 4.043-2 5.198 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003z',
  shieldCheck: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z',
  mapPin: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  radio: 'M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a7.5 7.5 0 010-10.607m9.546 0a7.5 7.5 0 010 10.607M12 12h.008v.008H12V12z',
  bell: 'M14.857 17.082a23.85 23.85 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  arrowRight: 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3',
  plus: 'M12 4.5v15m7.5-7.5h-15'
};
function Icon({
  name = 'check',
  size = 20,
  strokeWidth = 1.8,
  style,
  ...rest
}) {
  const d = PATHS[name] || PATHS.check;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style,
    ...rest
  }, React.createElement('path', {
    d
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  name = 'check',
  size = 'md',
  variant = 'ghost',
  'aria-label': ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const [hover, setHover] = React.useState(false);
  const isGhost = variant === 'ghost';
  return React.createElement('button', {
    onClick,
    'aria-label': ariaLabel,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isGhost ? hover ? 'var(--surface-panel)' : 'transparent' : hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)',
      color: isGhost ? 'var(--text-secondary)' : 'var(--text-on-accent)',
      border: isGhost ? '1px solid var(--border-subtle)' : 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name,
    size: dims * 0.5
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return React.createElement('span', {
    style: {
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
      ...style
    }
  }, children, onRemove ? React.createElement('button', {
    onClick: onRemove,
    'aria-label': 'Remove',
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'xMark',
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  success: 'check',
  warning: 'alertTriangle',
  danger: 'alertTriangle',
  info: 'bell'
};
const COLORS = {
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  danger: 'var(--status-danger)',
  info: 'var(--status-info)'
};
function Toast({
  variant = 'info',
  title,
  message,
  onClose,
  style
}) {
  return React.createElement('div', {
    style: {
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
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: ICONS[variant],
    size: 18,
    style: {
      color: COLORS[variant],
      flexShrink: 0,
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      flex: 1
    }
  }, title ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-primary)'
    }
  }, title) : null, message ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, message) : null), onClose ? React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'xMark',
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 6,
      background: 'var(--color-black)',
      color: 'var(--color-paper)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      border: '1px solid var(--border-subtle)',
      zIndex: 10
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--accent-primary)' : 'transparent',
      border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)'
    }
  }, checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 12,
    style: {
      color: 'var(--text-on-accent)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? React.createElement('label', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label) : null, React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      background: 'var(--surface-panel)',
      border: `1px solid ${error ? 'var(--status-danger)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      outline: 'none'
    }
  }), error ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--status-danger)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  onChange,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`
    }
  }, checked ? React.createElement('span', {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? React.createElement('label', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, label) : null, React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    onChange,
    style: {
      appearance: 'none',
      width: '100%',
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 36px 10px 12px',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))), React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--accent-primary)' : 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      position: 'relative',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--color-paper)',
      transition: 'left var(--duration-fast) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.id === active;
    return React.createElement('button', {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        background: 'none',
        border: 'none',
        borderBottom: `2px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        padding: '10px 16px',
        cursor: 'pointer'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-overlay)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      width: 420,
      boxShadow: 'var(--shadow-lg)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 16,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement(__ds_scope.IconButton, {
    name: 'xMark',
    'aria-label': 'Close',
    size: 'sm',
    onClick: onClose
  })), React.createElement('div', {
    style: {
      padding: 20,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer ? React.createElement('div', {
    style: {
      padding: '14px 20px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/CheckInScreen.jsx
try { (() => {
const {
  Icon,
  Button
} = window.PRRCDesignSystem_adeff2;
function CheckInScreen({
  onDone
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      flex: 1,
      padding: 24,
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'rgba(76,122,58,.18)',
      border: '1px solid var(--status-success)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement(Icon, {
    name: 'check',
    size: 32,
    style: {
      color: 'var(--status-success)'
    }
  })), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, 'Checked In'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, 'Location and status sent to command · 04:12:03'), React.createElement(Button, {
    variant: 'secondary',
    onClick: onDone
  }, 'Return to Mission'));
}
window.CheckInScreen = CheckInScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/CheckInScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/LoginScreen.jsx
try { (() => {
const {
  Button,
  Input
} = window.PRRCDesignSystem_adeff2;
function LoginScreen({
  onLogin
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: '60px 24px 24px',
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 56,
      filter: 'brightness(0) invert(1)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-primary)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      textAlign: 'center'
    }
  }, 'Paramilitary Response', React.createElement('br'), 'and Rescue Corps'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--accent-primary)',
      letterSpacing: 'var(--tracking-widest)'
    }
  }, 'FIELD APP')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement(Input, {
    label: 'Callsign',
    placeholder: 'ALPHA-1'
  }), React.createElement(Input, {
    label: 'Access Code',
    type: 'password',
    placeholder: '••••••••'
  }), React.createElement(Button, {
    onClick: onLogin,
    style: {
      marginTop: 8
    }
  }, 'Authenticate')));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/MissionDetailScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  Icon,
  Tag
} = window.PRRCDesignSystem_adeff2;
function MissionDetailScreen({
  mission,
  onBack,
  onCheckIn
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      padding: '20px 20px 0'
    }
  }, React.createElement('button', {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, '← Back')), React.createElement('div', {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      overflow: 'auto',
      flex: 1
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, mission.id), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 20,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, mission.name), React.createElement(Badge, {
    status: mission.status,
    style: {
      marginTop: 8
    }
  }, mission.statusLabel)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement(Tag, null, mission.sector), React.createElement(Tag, null, 'TEAM ALPHA'), React.createElement(Tag, null, 'K9-UNIT')), React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, React.createElement(Icon, {
    name: 'mapPin',
    size: 14,
    style: {
      color: 'var(--accent-primary)'
    }
  }), '34.0522° N, 118.2437° W'), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, React.createElement(Icon, {
    name: 'clock',
    size: 14,
    style: {
      color: 'var(--accent-primary)'
    }
  }), 'ETA 00:42:18')), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, 'Assist local fire units with evacuation of residential zone. Establish perimeter and coordinate with incident command.')), React.createElement('div', {
    style: {
      padding: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, React.createElement(Button, {
    onClick: onCheckIn,
    style: {
      width: '100%'
    }
  }, 'Check In')));
}
window.MissionDetailScreen = MissionDetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/MissionDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field-app/MissionListScreen.jsx
try { (() => {
const {
  Badge,
  Icon
} = window.PRRCDesignSystem_adeff2;
const MISSIONS = [{
  id: 'PRRC-2291',
  name: 'Wildfire Evacuation Support',
  sector: 'Sector 7',
  status: 'danger',
  statusLabel: 'Critical'
}, {
  id: 'PRRC-2288',
  name: 'Coastal Flood Search & Rescue',
  sector: 'Sector 3',
  status: 'warning',
  statusLabel: 'Active'
}, {
  id: 'PRRC-2281',
  name: 'Perimeter Security Detail',
  sector: 'Sector 12',
  status: 'success',
  statusLabel: 'Stable'
}];
function MissionListScreen({
  onSelect
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      padding: '20px 20px 12px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 22,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, 'My Missions')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 16,
      overflow: 'auto',
      flex: 1
    }
  }, MISSIONS.map(m => React.createElement('button', {
    key: m.id,
    onClick: () => onSelect(m),
    style: {
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      cursor: 'pointer'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, m.id), React.createElement(Badge, {
    status: m.status
  }, m.statusLabel)), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, m.name), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11
    }
  }, React.createElement(Icon, {
    name: 'mapPin',
    size: 12
  }), m.sector)))));
}
window.MissionListScreen = MissionListScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field-app/MissionListScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops-portal/DashboardScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Icon
} = window.PRRCDesignSystem_adeff2;
const STATS = [{
  label: 'Active Missions',
  value: '12',
  icon: 'mapPin'
}, {
  label: 'Teams Deployed',
  value: '7',
  icon: 'radio'
}, {
  label: 'Open Alerts',
  value: '3',
  icon: 'alertTriangle'
}, {
  label: 'Personnel Ready',
  value: '48',
  icon: 'shieldCheck'
}];
const MISSIONS = [{
  id: 'PRRC-2291',
  name: 'Wildfire Evacuation Support',
  sector: 'Sector 7',
  status: 'danger',
  statusLabel: 'Critical'
}, {
  id: 'PRRC-2288',
  name: 'Coastal Flood Search & Rescue',
  sector: 'Sector 3',
  status: 'warning',
  statusLabel: 'Active'
}, {
  id: 'PRRC-2281',
  name: 'Perimeter Security Detail',
  sector: 'Sector 12',
  status: 'success',
  statusLabel: 'Stable'
}, {
  id: 'PRRC-2276',
  name: 'Survival Training Deployment',
  sector: 'Sector 5',
  status: 'info',
  statusLabel: 'Briefing'
}];
function DashboardScreen() {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 32,
      flex: 1,
      overflow: 'auto'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)',
      fontWeight: 600
    }
  }, 'Operations Overview'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 28,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, 'Command Dashboard')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, STATS.map(s => React.createElement('div', {
    key: s.label,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement(Icon, {
    name: s.icon,
    size: 18,
    style: {
      color: 'var(--accent-primary)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 32,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, s.value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, s.label)))), React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-primary)',
      textTransform: 'uppercase',
      marginBottom: 12,
      letterSpacing: 'var(--tracking-wide)'
    }
  }, 'Active Missions'), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, MISSIONS.map(m => React.createElement('div', {
    key: m.id,
    style: {
      background: 'var(--surface-card)',
      display: 'grid',
      gridTemplateColumns: '120px 1fr 120px 100px',
      alignItems: 'center',
      padding: '14px 18px',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, m.id), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, m.name), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, m.sector), React.createElement(Badge, {
    status: m.status
  }, m.statusLabel))))));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops-portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops-portal/MissionsScreen.jsx
try { (() => {
const {
  Badge,
  Button,
  Tabs,
  Icon
} = window.PRRCDesignSystem_adeff2;
const REQUESTS = [{
  id: 'REQ-441',
  org: 'Coastal County Emergency Mgmt',
  type: 'Flood Response',
  status: 'warning',
  statusLabel: 'Pending Review',
  time: '2h ago'
}, {
  id: 'REQ-440',
  org: 'Highland Fire District',
  type: 'Wildfire Evacuation',
  status: 'danger',
  statusLabel: 'Urgent',
  time: '4h ago'
}, {
  id: 'REQ-438',
  org: 'Private Security Client',
  type: 'VIP Protection Detail',
  status: 'success',
  statusLabel: 'Approved',
  time: '1d ago'
}, {
  id: 'REQ-435',
  org: 'Regional Red Cross',
  type: 'Search & Rescue Support',
  status: 'info',
  statusLabel: 'In Review',
  time: '2d ago'
}];
function MissionsScreen() {
  const [tab, setTab] = React.useState('all');
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 32,
      flex: 1,
      overflow: 'auto'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)',
      fontWeight: 600
    }
  }, 'Intake'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 28,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, 'Mission Requests')), React.createElement(Button, {
    icon: React.createElement(Icon, {
      name: 'plus',
      size: 14
    })
  }, 'New Request')), React.createElement(Tabs, {
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'urgent',
      label: 'Urgent'
    }, {
      id: 'pending',
      label: 'Pending'
    }, {
      id: 'approved',
      label: 'Approved'
    }],
    active: tab,
    onChange: setTab
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      background: 'var(--border-subtle)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, REQUESTS.map(r => React.createElement('div', {
    key: r.id,
    style: {
      background: 'var(--surface-card)',
      display: 'grid',
      gridTemplateColumns: '100px 1fr 200px 120px 80px',
      alignItems: 'center',
      padding: '14px 18px',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, r.id), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, r.org), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, r.type), React.createElement(Badge, {
    status: r.status
  }, r.statusLabel), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, r.time)))));
}
window.MissionsScreen = MissionsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops-portal/MissionsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops-portal/ReportsScreen.jsx
try { (() => {
const {
  Icon
} = window.PRRCDesignSystem_adeff2;
const REPORTS = [{
  title: 'Q2 Deployment Summary',
  desc: '18 missions completed across 6 sectors.',
  date: 'Jul 1, 2026'
}, {
  title: 'Wildfire Evacuation After-Action Report',
  desc: 'Sector 7 — full personnel and timeline breakdown.',
  date: 'Jun 22, 2026'
}, {
  title: 'Training Readiness Audit',
  desc: 'Survival & tactical certification status by unit.',
  date: 'Jun 14, 2026'
}, {
  title: 'Equipment Inventory Report',
  desc: 'Fleet, comms gear, and medical supply levels.',
  date: 'Jun 3, 2026'
}];
function ReportsScreen() {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 32,
      flex: 1,
      overflow: 'auto'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)',
      fontWeight: 600
    }
  }, 'Archive'), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 28,
      fontWeight: 700,
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, 'Reports')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }
  }, REPORTS.map(r => React.createElement('div', {
    key: r.title,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement(Icon, {
    name: 'clock',
    size: 16,
    style: {
      color: 'var(--text-muted)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--text-primary)',
      textTransform: 'uppercase'
    }
  }, r.title), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, r.desc), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, r.date)))));
}
window.ReportsScreen = ReportsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops-portal/ReportsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ops-portal/Sidebar.jsx
try { (() => {
const {
  Icon
} = window.PRRCDesignSystem_adeff2;
const ITEMS = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'shieldCheck'
}, {
  id: 'missions',
  label: 'Missions',
  icon: 'mapPin'
}, {
  id: 'teams',
  label: 'Teams',
  icon: 'radio'
}, {
  id: 'reports',
  label: 'Reports',
  icon: 'clock'
}];
function Sidebar({
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      width: 220,
      background: 'var(--color-black)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '20px 18px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('img', {
    src: '../../assets/logo.png',
    style: {
      height: 28,
      width: 'auto',
      filter: 'brightness(0) invert(1)'
    }
  }), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-wide)',
      lineHeight: 1.15
    }
  }, 'PRRC', React.createElement('div', {
    style: {
      fontSize: 9,
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-widest)'
    }
  }, 'OPS PORTAL'))), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 12,
      gap: 2
    }
  }, ITEMS.map(it => {
    const isActive = it.id === active;
    return React.createElement('button', {
      key: it.id,
      onClick: () => onChange(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        background: isActive ? 'var(--surface-panel)' : 'transparent',
        border: 'none',
        borderLeft: `2px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
        color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
        fontFamily: 'var(--font-heading)',
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        textAlign: 'left',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)'
      }
    }, React.createElement(Icon, {
      name: it.icon,
      size: 16
    }), it.label);
  })));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ops-portal/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
