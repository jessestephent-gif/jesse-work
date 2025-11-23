import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';

const initialMessages: ChatMessage[] = [
    { id: 1, name: 'Admin', message: 'Welcome to the community chat! This is a safe space for encouragement and support. Please be kind and respectful.', timestamp: '9:00 AM' },
    { id: 2, name: 'Sarah J.', message: 'Hi everyone, glad to be here.', timestamp: '9:02 AM' },
    { id: 3, name: 'David L.', message: 'Feeling a bit down today, praying for strength.', timestamp: '9:05 AM' },
];

const CommunityPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [newMessage, setNewMessage] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const message: ChatMessage = {
            id: messages.length + 1,
            name: 'You',
            message: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-serif font-bold text-brand-purple-900">Community Chat</h1>
                <p className="mt-4 text-xl text-gray-600">Connect, share, and support one another in faith. This is a place to build lasting friendships and grow together on your journey.</p>
                <p className="mt-2 text-sm text-red-600 font-semibold">Note: This is a demonstration and messages are not sent to a live server.</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-xl flex flex-col h-[70vh]">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-brand-purple-800">#general-support</h2>
                    </div>
                    <div className="flex-grow p-6 overflow-y-auto bg-brand-purple-50/50">
                        <div className="space-y-6">
                            {messages.map((msg, index) => (
                                <div key={msg.id} className={`flex items-start gap-3 ${msg.name === 'You' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-brand-purple-200 text-brand-purple-700 font-bold`}>
                                        {msg.name.charAt(0)}
                                    </div>
                                    <div className={`p-4 rounded-lg max-w-md ${msg.name === 'You' ? 'bg-brand-purple-600 text-white' : 'bg-white shadow-sm'}`}>
                                        <div className="flex items-baseline gap-3">
                                            <p className="font-bold">{msg.name}</p>
                                            <p className="text-xs text-gray-400">{msg.timestamp}</p>
                                        </div>
                                        <p className="mt-1">{msg.message}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>
                    </div>
                    <div className="p-4 bg-white border-t border-gray-200">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-4">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple-500 focus:outline-none"
                            />
                            <button type="submit" className="px-6 py-3 bg-brand-purple-600 text-white font-semibold rounded-lg hover:bg-brand-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-500">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;