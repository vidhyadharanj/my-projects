import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow-sm px-6 py-4 flex flex-col gap-4">
        {/* Simplified Header */}
        <nav className="flex gap-6 text-sm font-semibold text-gray-700 mt-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Contact Us</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Contact Info */}
          <div className="bg-blue-900 text-white p-10 md:w-1/3 flex flex-col gap-8">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0" />
              <div className="text-sm text-blue-100 leading-relaxed">
                <p className="font-semibold text-white mb-1">Bharat Electronics Limited[cite: 1]</p>
                <p>Jalahalli Post, Bengaluru - 560013[cite: 1]</p>
                <p>Karnataka, India[cite: 1]</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <div className="text-sm text-blue-100">
                <p>080 - 2291 2844 / 2291 2948[cite: 1]</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
              <div className="text-sm text-blue-100">
                <p>info@bel-india.in[cite: 1]</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-10 md:w-2/3">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Send Message[cite: 1]</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Your Name[cite: 1]</label>
                <input type="text" className="border border-gray-300 rounded p-2 text-sm focus:outline-blue-500" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Email Address[cite: 1]</label>
                <input type="email" className="border border-gray-300 rounded p-2 text-sm focus:outline-blue-500" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase">Subject[cite: 1]</label>
                <input type="text" className="border border-gray-300 rounded p-2 text-sm focus:outline-blue-500" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-semibold text-gray-500 uppercase">Your Message[cite: 1]</label>
                <textarea rows="4" className="border border-gray-300 rounded p-2 text-sm focus:outline-blue-500"></textarea>
              </div>
              
              <div className="md:col-span-2 mt-2">
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded text-sm font-semibold flex items-center gap-2 transition-colors">
                  Send Message <Send className="w-4 h-4" />[cite: 1]
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Contact;