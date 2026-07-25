import { useState } from 'react';
import { Badge, Button, Input, Select } from '../../design-system/index.js';
import { useApi } from '../../api/client.js';

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const { data: sectors } = useApi('/sectors');
  const { data: contact } = useApi('/contact-info');
  const sectorOptions = (sectors || []).map((s) => s.label);
  const submit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 1100 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 12,
            letterSpacing: 'var(--tracking-widest)',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Contact
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 44,
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}
        >
          Request deployment
        </h1>
        <p style={{ margin: 0, fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
          Submit mission details and command will respond within one hour for active or urgent requests.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'start' }}>
        <form
          onSubmit={submit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 32,
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Input label="Name" placeholder="Jane Carter" />
            <Input label="Organisation" placeholder="Coastal Shire Emergency Mgmt" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Input label="Email" placeholder="jane@agency.gov.au" />
            <Input label="Phone" placeholder="0412 345 678" />
          </div>
          <Select label="Sector / Region" options={sectorOptions} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 11,
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                fontWeight: 600,
              }}
            >
              Mission Details
            </label>
            <textarea
              placeholder="Describe the situation, location, and timeline."
              rows={4}
              style={{
                background: 'var(--surface-panel)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 12px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>
          <Button size="lg">Submit Request</Button>
          {formSent ? (
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--status-success)' }}>
              Request received — command will respond shortly.
            </div>
          ) : null}
        </form>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: 'var(--surface-panel)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <Badge status="success">Standby Status: Ready</Badge>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={contactLabel}>Command HQ</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' }}>
                {contact?.hqAddress}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={contactLabel}>Ops Line (24/7)</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)' }}>
                {contact?.opsLine}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={contactLabel}>Email</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)' }}>
                {contact?.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contactLabel = {
  fontFamily: 'var(--font-heading)',
  fontSize: 11,
  letterSpacing: 'var(--tracking-wider)',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
};
