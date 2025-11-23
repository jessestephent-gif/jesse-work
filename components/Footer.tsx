
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-serif font-bold">Singles Council</h2>
            <p className="mt-2 text-brand-purple-200">A sanctuary for healing and support.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-base text-brand-purple-200 hover:text-white">About Us</NavLink></li>
              <li><NavLink to="/resources" className="text-base text-brand-purple-200 hover:text-white">Resources</NavLink></li>
              <li><NavLink to="/contact" className="text-base text-brand-purple-200 hover:text-white">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-brand-purple-200 hover:text-white">WhatsApp Channel</a></li>
              <li><a href="#" className="text-base text-brand-purple-200 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-base text-brand-purple-200 hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Get Updates</h3>
            <p className="mt-4 text-brand-purple-200">Subscribe to our newsletter for devotionals, events, and resources.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full bg-brand-purple-600 flex items-center justify-center border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-brand-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-purple-500">
                        Subscribe
                    </button>
                </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-purple-800 pt-8 text-center text-brand-purple-300">
          <p>&copy; {new Date().getFullYear()} Singles Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
