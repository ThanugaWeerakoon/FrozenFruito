import React, { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setSending(false);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSending(false);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div>
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && <p className="text-center mt-4 text-lg font-semibold">{status}</p>}
      </section>
    </div>
  );
};
