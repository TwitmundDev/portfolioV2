'use client';

import { useState } from 'react';
import { EMAIL, links } from '../data';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'invalid'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    const data = new FormData();
    data.append('Email', email);
    data.append('Message', 'Demande de contact depuis le portfolio');
    try {
      const response = await fetch('https://formspree.io/f/xrbaebvn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(response.ok ? 'sent' : 'error');
      if (response.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  };

  const note = {
    idle: 'Je reçois votre adresse et je vous écris pour en parler.',
    sending: 'Envoi…',
    sent: 'Bien reçu, je vous écris rapidement.',
    error: `L'envoi a échoué. Écrivez-moi directement à ${EMAIL}.`,
    invalid: 'Cette adresse email ne semble pas valide.',
  }[status];

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact-col">
        <div className="contact-main">
        <h2 id="contact-title" className="contact-prompt" data-reveal>
          <span className="muted">Un poste, une mission ?</span>
          <br />
          Écrivez-moi.
        </h2>
        <form className="one-field" onSubmit={submit} noValidate data-reveal>
          <label htmlFor="contact-email" className="sr-only">Votre email</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="vous@entreprise.fr"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'invalid') setStatus('idle');
            }}
            aria-describedby="contact-note"
            aria-invalid={status === 'invalid'}
          />
          <button type="submit" aria-label="Envoyer mon email" disabled={status === 'sending'}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <p id="contact-note" className="contact-note" role="status">{note}</p>
        </div>

        <dl className="contact-rows" data-reveal>
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a></dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd><a href={links[0].href} target="_blank" rel="noopener noreferrer" className="link">TwitmundDev</a></dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd><a href={links[1].href} target="_blank" rel="noopener noreferrer" className="link">Ellwane Romdhame</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
