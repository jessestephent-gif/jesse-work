
import React, { useState } from 'react';
import { PrayerRequest } from '../types';
import Card from '../components/Card';

const initialRequests: PrayerRequest[] = [
    { id: 1, name: 'Anonymous', request: 'Please pray for my family as we go through a difficult time. I need strength and wisdom.', timestamp: '2 hours ago' },
    { id: 2, name: 'John D.', request: 'Praying for a new job opportunity. I have an interview next week and I am trusting God for favor.', timestamp: '8 hours ago' },
    { id: 3, name: 'Anonymous', request: 'For healing from a broken heart. It hurts so much right now, and I need to feel God\'s comfort.', timestamp: '1 day ago' },
];

const PrayerWallPage: React.FC = () => {
    const [requests, setRequests] = useState<PrayerRequest[]>(initialRequests);
    const [newRequest, setNewRequest] = useState('');
    const [name, setName] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newRequest.trim() === '') return;

        const prayerRequest: PrayerRequest = {
            id: requests.length + 1,
            name: isAnonymous ? 'Anonymous' : name || 'Anonymous',
            request: newRequest,
            timestamp: 'Just now',
        };

        setRequests([prayerRequest, ...requests]);
        setNewRequest('');
        setName('');
        setIsAnonymous(false);
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-purple-900">Community Prayer Wall</h1>
                    <p className="mt-4 text-xl text-gray-600">Share your requests and lift up one another in prayer. "For where two or three gather in my name, there am I with them." - Matthew 18:20</p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <Card className="p-8 bg-brand-purple-50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-2xl font-bold font-serif text-brand-purple-800">Post a Prayer Request</h2>
                            <div>
                                <label htmlFor="request" className="sr-only">Your Prayer Request</label>
                                <textarea
                                    id="request"
                                    rows={4}
                                    value={newRequest}
                                    onChange={(e) => setNewRequest(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple-500 focus:outline-none"
                                    placeholder="Share what's on your heart..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="w-full">
                                    <label htmlFor="name" className="sr-only">Your Name (Optional)</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={isAnonymous}
                                        placeholder="Your Name (Optional)"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple-500 focus:outline-none disabled:bg-gray-200"
                                    />
                                </div>
                                <div className="flex items-center self-start sm:self-center">
                                    <input
                                        id="anonymous"
                                        type="checkbox"
                                        checked={isAnonymous}
                                        onChange={(e) => setIsAnonymous(e.target.checked)}
                                        className="h-4 w-4 text-brand-purple-600 border-gray-300 rounded focus:ring-brand-purple-500"
                                    />
                                    <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                                        Post Anonymously
                                    </label>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full px-8 py-3 bg-brand-purple-600 text-white font-semibold rounded-lg hover:bg-brand-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-purple-500">
                                    Submit Prayer
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {requests.map(req => (
                        <Card key={req.id} className="p-6 bg-brand-purple-50/50">
                            <p className="text-gray-700">{req.request}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <p className="font-bold text-brand-purple-800">- {req.name}</p>
                                <p className="text-sm text-gray-500">{req.timestamp}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrayerWallPage;
