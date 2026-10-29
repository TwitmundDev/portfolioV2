'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EMAIL = 'contact@twitmund.fr';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    firstName: '',
    email: '',
    category: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  function validateEmail(email: string) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    if (!form.name || !form.firstName || !form.email || !form.category || !form.message) {
      const msg = 'Veuillez remplir tous les champs.';
      setStatus(msg);
      toast.error(msg, { position: 'top-center' });
      return;
    }
    if (!validateEmail(form.email)) {
      const msg = "L'email n'est pas valide.";
      setStatus(msg);
      toast.error(msg, { position: 'top-center' });
      return;
    }
    const data = new FormData();
    data.append('Nom', form.name);
    data.append('Prénom', form.firstName);
    data.append('Email', form.email);
    data.append('Catégorie', form.category);
    data.append('Message', form.message);
    try {
      const response = await fetch('https://formspree.io/f/xrbaebvn', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        const msg = 'Message envoyé ! Merci pour votre contact.';
        setStatus(msg);
        toast.success(msg, { position: 'top-center' });
        setForm({ name: '', firstName: '', email: '', category: '', message: '' });
      } else {
        const msg = "Une erreur est survenue. Veuillez réessayer.";
        setStatus(msg);
        toast.error(msg, { position: 'top-center' });
      }
    } catch {
      const msg = "Une erreur est survenue. Veuillez réessayer.";
      setStatus(msg);
      toast.error(msg, { position: 'top-center' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const invalid = (bad: boolean) => (status && bad ? 'invalid' : '');

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="rows">
        <h2 id="contact-title" data-reveal>Contact</h2>
        <a href={`mailto:${EMAIL}`} data-reveal>{EMAIL}</a>
        <a href="https://www.linkedin.com/in/ellwane-romdhame-aa1a88238/" target="_blank" rel="noopener noreferrer" data-reveal>LinkedIn</a>
        <a href="https://github.com/TwitmundDev" target="_blank" rel="noopener noreferrer" data-reveal>GitHub · TwitmundDev</a>
        <p data-reveal>Lyon, France</p>
        <a
          href={`mailto:${EMAIL}?subject=${encodeURIComponent('Proposition de poste ou de mission')}&body=${encodeURIComponent("Bonjour Ellwane,\n\nJe vous écris au sujet de ")}`}
          className="greet"
          data-reveal
        >
          Bonjour
          <span className="round" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>

      <div className="contact-form">
        <div className="intro">
          <h3>Ou laissez un message</h3>
          <p>Pour un poste, une mission ou une question, je réponds sous 48 heures.</p>
        </div>
        <form onSubmit={handleForm} noValidate>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input type="text" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} className={invalid(!form.firstName)} required minLength={2} autoComplete="given-name" />
          </div>
          <div>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className={invalid(!form.name)} required minLength={2} autoComplete="family-name" />
          </div>
          <div className="full">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={invalid(!validateEmail(form.email))} required autoComplete="email" />
          </div>
          <div className="full">
            <label htmlFor="category">Sujet</label>
            <select id="category" name="category" value={form.category} onChange={handleChange} className={invalid(!form.category)} required>
              <option value="" disabled hidden>Choisissez un sujet</option>
              <option value="Offre d'emploi">Offre d&apos;emploi</option>
              <option value="Demande de devis">Mission freelance ou devis</option>
              <option value="Question">Question</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} className={invalid(!form.message)} required minLength={5}></textarea>
          </div>
          <div className="full">
            <button type="submit" className="btn">
              Envoyer le message <span className="arrow" aria-hidden="true">→</span>
            </button>
            {status && <p className="status" role="status">{status}</p>}
          </div>
        </form>
      </div>
      <ToastContainer theme="dark" />
    </section>
  );
}
