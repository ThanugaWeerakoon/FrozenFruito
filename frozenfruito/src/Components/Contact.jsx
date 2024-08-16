import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lhpy25o', 'template_hkcg0fp', form.current, {
        publicKey: 'h5nv_sQcrzoOJ8ngD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED', error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
        ></textarea>
      </div>

      <div className="text-center">
        <input
          type="submit"
          value="Send"
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
        />
      </div>
    </form>
  );
};
