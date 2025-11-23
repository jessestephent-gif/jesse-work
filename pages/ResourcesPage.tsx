
import React from 'react';
import Card from '../components/Card';
import { Resource } from '../types';

const resources: Resource[] = [
    { title: 'Finding God in the Midst of Pain', type: 'Article', description: 'An insightful article on how to maintain faith during difficult times.', link: '#', image: 'https://picsum.photos/id/1015/400/300' },
    { title: 'Overcoming Anxiety: A Guided Prayer', type: 'Video', description: 'A 10-minute guided prayer session to find peace and calm.', link: '#', image: 'https://picsum.photos/id/1016/400/300' },
    { title: 'Healed and Whole: A Devotional Series', type: 'Devotional', description: 'A 7-day devotional series focusing on spiritual and emotional restoration.', link: '#', image: 'https://picsum.photos/id/1018/400/300' },
    { title: 'The Purpose of Pain by C.S. Lewis', type: 'Book', description: 'Recommended reading on understanding suffering from a Christian perspective.', link: '#', image: 'https://picsum.photos/id/1019/400/300' },
    { title: 'Navigating Loneliness as a Single', type: 'Article', description: 'Practical tips and spiritual encouragement for dealing with loneliness.', link: '#', image: 'https://picsum.photos/id/1021/400/300' },
    { title: 'Podcast: Hope in Hardship', type: 'Video', description: 'Listen to testimonies and discussions on finding hope through faith.', link: '#', image: 'https://picsum.photos/id/1022/400/300' },
];

const ResourcesPage: React.FC = () => {
    return (
        <div className="bg-brand-purple-50/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-purple-900">Media & Resources</h1>
                    <p className="mt-4 text-xl text-gray-600">A library of faith-centered materials to support your healing journey.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                        <Card key={resource.title} className="flex flex-col">
                            <img className="h-48 w-full object-cover" src={resource.image} alt={resource.title} />
                            <div className="p-6 flex flex-col flex-grow">
                                <p className="text-sm font-semibold text-brand-purple-600">{resource.type}</p>
                                <h3 className="mt-2 text-xl font-bold text-brand-purple-900">{resource.title}</h3>
                                <p className="mt-3 text-gray-600 flex-grow">{resource.description}</p>
                                <a href={resource.link} className="mt-6 inline-block text-center bg-brand-purple-100 text-brand-purple-700 font-semibold px-4 py-2 rounded-lg hover:bg-brand-purple-200 transition-colors">
                                    Access Resource
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
