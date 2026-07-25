import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../design-system/index.js';
import { useApi } from '../../api/client.js';
import logoIcon from '../../assets/logo-icon.png';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function PublicLayout() {
  const navigate = useNavigate();
  const { data: services } = useApi('/services');
  const { data: contact } = useApi('/contact-info');
  return (
    <div
      style={{
        background: 'var(--surface-app)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ScrollToTop />

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 48px',
          background: 'var(--color-black)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textDecoration: 'none' }}>
          <img src={logoIcon} style={{ height: 32, width: 'auto', filter: 'brightness(0) invert(1)' }} alt="PRRC" />
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 'var(--tracking-wide)',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
            }}
          >
            PRRC
            <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: 'var(--tracking-widest)' }}>
              RESPONSE &amp; RESCUE CORPS
            </div>
          </div>
        </NavLink>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              style={({ isActive }) => ({
                background: 'none',
                border: 'none',
                padding: '8px 16px',
                fontFamily: 'var(--font-heading)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textDecoration: 'none',
                color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
                borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button onClick={() => navigate('/contact')} size="sm">
          Request Deployment
        </Button>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>

      <footer
        style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--color-black)',
          padding: '56px 48px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <img
              src={logoIcon}
              style={{ height: 28, width: 'auto', alignSelf: 'flex-start', filter: 'brightness(0) invert(1)' }}
              alt="PRRC"
            />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', maxWidth: 280 }}>
              Paramilitary Response and Rescue Corps. Tactical solutions for high-risk scenarios.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={footerHeading}>Company</div>
            <NavLink to="/" end style={footerLink}>
              Home
            </NavLink>
            <NavLink to="/about" style={footerLink}>
              About
            </NavLink>
            <NavLink to="/careers" style={footerLink}>
              Careers
            </NavLink>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={footerHeading}>Services</div>
            {(services || []).slice(0, 4).map((fs) => (
              <NavLink key={fs.title} to="/services" style={footerLink}>
                {fs.title}
              </NavLink>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={footerHeading}>Contact</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>
              {contact?.email}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>
              {contact?.opsLine}
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: 20,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--text-muted)',
          }}
        >
          © 2026 PARAMILITARY RESPONSE AND RESCUE CORPS · ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}

const footerHeading = {
  fontFamily: 'var(--font-heading)',
  fontSize: 11,
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase',
  color: 'var(--text-primary)',
  fontWeight: 700,
};

const footerLink = {
  cursor: 'pointer',
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  color: 'var(--text-secondary)',
  textDecoration: 'none',
};
