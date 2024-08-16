import React from "react";
import Footer from "../Components/Footer";
import { Contact } from "../Components/Contact";

export default function ProductsPage() {
  return (
    <div className="bg-white text-gray-900">
      <header className="bg-yellow-400 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold tracking-wide">Contact Us</h1>
      </header>
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto leading-relaxed">
          We're here to assist you. Feel free to reach out to us through any of the methods below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          <div className="p-6 shadow-lg rounded-lg bg-yellow-50 hover:bg-yellow-100 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700">0094767072207</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-yellow-50 hover:bg-yellow-100 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700">greatfrozenn@gmail.com</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg bg-yellow-50 hover:bg-yellow-100 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-700">No 659, Mahawaththa Road, Horagolla, Marawila</p>
          </div>
        </div>
      </section>
        <Contact/>
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-medium">What are your operating hours?</h3>
            <p className="mt-2 text-gray-600">
              We operate from 9 AM to 5 PM, Monday to Friday.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-medium">How can I book an appointment?</h3>
            <p className="mt-2 text-gray-600">
              You can book an appointment through our website or by calling our office.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-lg transition transform hover:scale-105">
            <h3 className="text-xl font-medium">What do you offer?</h3>
            <p className="mt-2 text-gray-600">
              We offer fresh frozen pulp products.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
