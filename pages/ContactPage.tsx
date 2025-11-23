
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-purple-900">Get In Touch</h1>
                    <p className="mt-4 text-xl text-gray-600">We're here to listen. Reach out with any questions or for support.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-brand-purple-800">Direct Contact</h3>
                            <p className="mt-2 text-gray-600">For immediate support, please use the links below.</p>
                             <ul className="mt-4 space-y-3">
                                <li className="flex items-center">
                                    <a href="mailto:support@singlescouncil.org" className="text-brand-purple-700 hover:underline">support@singlescouncil.org</a>
                                </li>
                                <li className="flex items-center">
                                     <a href="tel:+1234567890" className="text-brand-purple-700 hover:underline">+1 (234) 567-890</a>
                                </li>
                                <li className="flex items-center">
                                     <a href="#" className="text-brand-purple-700 hover:underline">WhatsApp Support</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-brand-purple-800">Office Hours</h3>
                            <p className="mt-2 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="text-gray-600">Saturday: 10am - 2pm</p>
                            <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        {submitted ? (
                            <div className="bg-brand-purple-50 p-12 rounded-lg text-center h-full flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-brand-purple-900">Thank You!</h2>
                                <p className="mt-4 text-gray-700">Your message has been sent. We will get back to you as soon as possible.</p>
                            </div>
                        ) : (
                             <form onSubmit={handleSubmit} className="bg-brand-purple-50 p-8 rounded-lg shadow-lg space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-3" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-3" />
                                </div>
                                 <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" name="subject" id="subject" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-3" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={5} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-3"></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-3 bg-brand-purple-600 text-white font-bold rounded-lg hover:bg-brand-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-500">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
