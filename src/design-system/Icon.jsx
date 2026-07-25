const PATHS = {
  chevronDown: 'M19.5 8.25l-7.5 7.5-7.5-7.5',
  check: 'M4.5 12.75l6 6 9-13.5',
  xMark: 'M6 18L18 6M6 6l12 12',
  alertTriangle:
    'M12 9v3.75m0 3.75h.008v.008H12v-.008zM9.401 3.003c1.155-2 4.043-2 5.198 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003z',
  shieldCheck:
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z',
  mapPin:
    'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  radio:
    'M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a7.5 7.5 0 010-10.607m9.546 0a7.5 7.5 0 010 10.607M12 12h.008v.008H12V12z',
  bell: 'M14.857 17.082a23.85 23.85 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0',
  clock: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  arrowRight: 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3',
  plus: 'M12 4.5v15m7.5-7.5h-15',
};

export default function Icon({ name = 'check', size = 20, strokeWidth = 1.8, style, ...rest }) {
  const d = PATHS[name] || PATHS.check;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      {...rest}
    >
      <path d={d} />
    </svg>
  );
}
