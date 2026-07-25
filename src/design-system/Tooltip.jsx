import { useState } from 'react';

export default function Tooltip({ content, children }) {
  const [show, setShow] = useState(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show ? (
        <span
          style={{
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
            zIndex: 10,
          }}
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
