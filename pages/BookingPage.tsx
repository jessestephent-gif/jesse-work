
import React, { useState } from 'react';

const BookingPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
    
    const today = new Date();
    const currentMonth = selectedDate?.getMonth() ?? today.getMonth();
    const currentYear = selectedDate?.getFullYear() ?? today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                 <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-xl">
                    <h1 className="text-3xl font-serif font-bold text-brand-purple-900">Booking Request Sent!</h1>
                    <p className="mt-4 text-lg text-gray-600">Thank you for reaching out. A counselor will contact you shortly to confirm your session. You will receive an email with the details.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 px-8 py-3 bg-brand-purple-600 text-white font-semibold rounded-lg hover:bg-brand-purple-700">
                        Book Another Session
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-brand-purple-50/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-purple-900">Book a Counseling Session</h1>
                    <p className="mt-4 text-xl text-gray-600">Take a courageous step towards healing. We are here for you.</p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 bg-white p-8 rounded-xl shadow-2xl">
                    {/* Step 1: Your Details */}
                    <div className="lg:col-span-1 space-y-6">
                         <h2 className="text-2xl font-bold font-serif text-brand-purple-800 border-b-2 border-brand-purple-200 pb-2">1. Your Details</h2>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-2" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm p-2" />
                        </div>
                         <div>
                            <label htmlFor="counseling-type" className="block text-sm font-medium text-gray-700">Counseling Type</label>
                            <select id="counseling-type" name="counseling-type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-purple-500 focus:border-brand-purple-500 sm:text-sm rounded-md">
                                <option>Video Session</option>
                                <option>Audio Session</option>
                                <option>In-person Session</option>
                            </select>
                        </div>
                    </div>

                    {/* Step 2: Choose Date & Time */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold font-serif text-brand-purple-800 border-b-2 border-brand-purple-200 pb-2">2. Choose Date & Time</h2>
                        <div className="p-4 bg-brand-purple-50 rounded-lg">
                             <div className="flex justify-between items-center mb-4">
                                <button type="button" onClick={() => setSelectedDate(new Date(currentYear, currentMonth - 1, 1))} className="p-2 rounded-full hover:bg-brand-purple-200">&lt;</button>
                                <h3 className="font-semibold text-lg">{new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(selectedDate)}</h3>
                                <button type="button" onClick={() => setSelectedDate(new Date(currentYear, currentMonth + 1, 1))} className="p-2 rounded-full hover:bg-brand-purple-200">&gt;</button>
                             </div>
                             <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="font-bold text-gray-500">{day}</div>)}
                                {emptyDays.map(i => <div key={`empty-${i}`}></div>)}
                                {days.map(day => {
                                    const date = new Date(currentYear, currentMonth, day);
                                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                                    return (
                                        <button type="button" key={day} onClick={() => setSelectedDate(date)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-brand-purple-600 text-white' : 'hover:bg-brand-purple-200'}`}>
                                            {day}
                                        </button>
                                    );
                                })}
                             </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {timeSlots.map(time => (
                                <button type="button" key={time} onClick={() => setSelectedTime(time)} className={`p-3 rounded-lg border-2 text-center font-medium transition-colors ${selectedTime === time ? 'bg-brand-purple-600 text-white border-brand-purple-600' : 'border-gray-300 hover:border-brand-purple-500'}`}>
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                     {/* Step 3: Confirmation */}
                    <div className="lg:col-span-3 text-center pt-6 border-t border-gray-200">
                        <p className="text-lg font-semibold text-gray-700 mb-4">
                            You've selected: <span className="text-brand-purple-700">{selectedDate?.toLocaleDateString()} at {selectedTime}</span>
                        </p>
                        <button type="submit" disabled={!selectedDate || !selectedTime} className="w-full max-w-md px-8 py-4 bg-brand-purple-600 text-white font-bold rounded-lg hover:bg-brand-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors">
                            Request Session
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingPage;
