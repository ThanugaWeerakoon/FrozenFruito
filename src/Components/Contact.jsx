import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lhpy25o', 'template_hkcg0fp', form.current, {
        publicKey: 'h5nv_sQcrzoOJ8ngD',
      })
      .then(
        () => {
          setMessageSent(true);
          form.current.reset(); // Clear the form fields after successful submission
          setTimeout(() => setMessageSent(false), 5000); // Hide the success message after 5 seconds
        },
        (error) => {
          console.log('FAILED', error.text);
        },
      );
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6 lg:px-0">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Contact Us
      </h2>

      {messageSent && (
        <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-400 rounded-lg text-center">
          Your message has been successfully sent. We will get back to you soon!
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            name="message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-40 resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="text-center">
          <input
            type="submit"
            value="Send Message"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer transition duration-200 ease-in-out"
          />
        </div>
      </form>
    </div>
  );
};
