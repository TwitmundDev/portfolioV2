'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Parlons de votre projet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Intéressé par une collaboration ? N&apos;hésitez pas à me contacter pour discuter
              de vos idées et voir comment nous pouvons travailler ensemble.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">📧</span>
                <span className="text-gray-600 dark:text-gray-300">contact@twitmund.fr</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">📍</span>
                <span className="text-gray-600 dark:text-gray-300">Lyon, France</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://www.linkedin.com/in/ellwane-romdhame/" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                LinkedIn
              </a>
              <a href="https://github.com/TwitmundDev" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                GitHub
              </a>
              <a href="mailto:contact@twitmund.fr" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                Email
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
            <form className="space-y-6" onSubmit={handleForm}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${status && !form.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Votre prénom"
                  required
                  minLength={2}
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${status && !form.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Votre nom"
                  required
                  minLength={2}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${status && !validateEmail(form.email) ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="votre.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Catégorie
                </label>
                <select
                  id="category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${status && !form.category ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  required
                >
                  <option value="" disabled hidden>Choisissez une catégorie</option>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Question">Question</option>
                  <option value="Support">Support</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${status && !form.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                  placeholder="Votre message..."
                  required
                  minLength={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
            {status && <div className="mt-4 text-center text-gray-600 dark:text-gray-300">{status}</div>}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}