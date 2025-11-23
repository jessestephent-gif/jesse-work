import React from 'react';
import Card from '../components/Card';
import { Counselor, Testimony } from '../types';

const counselors: Counselor[] = [
    { name: 'Dr. Evelyn Reed', title: 'Lead Counselor', bio: 'With over 15 years of experience in Christian counseling, Dr. Reed specializes in grief, trauma, and relationship recovery. Her compassionate approach is rooted in scripture and a deep understanding of the healing process.', image: 'https://picsum.photos/id/1027/400/400' },
    { name: 'Marcus Thorne', title: 'Community Pastor', bio: 'Pastor Marcus is dedicated to building a supportive and uplifting community. He facilitates group discussions and provides spiritual guidance to help members grow in their faith.', image: 'https://picsum.photos/id/1005/400/400' },
    { name: 'Jessica Chen', title: 'Mental Wellness Coach', bio: 'Jessica combines her expertise in mental health with Christian principles to offer practical tools for managing anxiety and depression, helping individuals find peace and resilience.', image: 'https://picsum.photos/id/1025/400/400' },
];

const testimonies: Testimony[] = [
    { name: 'Maria G.', story: 'After my divorce, I felt like my world had ended. Singles Council gave me a family. Through counseling and the prayer wall, I found the strength to forgive and heal. The friendships I\'ve built here are a true gift, and I\'m excited for my new chapter with God at the center.', image: 'https://picsum.photos/id/237/100/100' },
    { name: 'Kevin P.', story: 'I struggled silently with depression for years. Joining a men\'s support group here was life-changing. Sharing my story with others who understood, without judgment, was the first step toward true healing. I learned that vulnerability is a strength and found brotherhood.', image: 'https://picsum.photos/id/238/100/100' },
];


const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold text-brand-purple-900">About Singles Council</h1>
                    <p className="mt-4 text-xl text-gray-600">Our journey, our mission, our faith.</p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-brand-purple-800">Our Mission & Vision</h2>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                            Our mission is to be a beacon of hope for singles navigating heartbreak, loneliness, and emotional distress. We provide a Christ-centered community where individuals find support, counseling, and resources to foster spiritual growth, personal wholeness, and meaningful connections.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                           Our vision is a world where every single person feels seen, valued, and empowered by their faith to overcome adversity. We strive to be a place where trials are transformed into testimonies, and where lasting, Christ-centered relationships are built for a better future.
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=1976&auto=format&fit=crop" alt="Group of friends supporting each other" className="rounded-lg shadow-xl"/>
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-serif font-bold text-brand-purple-900 text-center">Meet Our Leadership</h2>
                    <p className="mt-4 text-xl text-gray-600 text-center">Compassionate hearts dedicated to your healing journey.</p>
                    <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {counselors.map(counselor => (
                            <Card key={counselor.name} className="text-center">
                                <img className="w-32 h-32 rounded-full mx-auto -mt-16 border-4 border-white shadow-lg" src={counselor.image} alt={counselor.name} />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-brand-purple-800">{counselor.name}</h3>
                                    <p className="text-brand-purple-600 font-medium">{counselor.title}</p>
                                    <p className="mt-4 text-gray-600 text-sm">{counselor.bio}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                    <h2 className="text-3xl font-serif font-bold text-brand-purple-900 text-center">Testimonies of Healing</h2>
                     <p className="mt-4 text-xl text-gray-600 text-center">Real stories from our community.</p>
                    <div className="mt-12 max-w-4xl mx-auto space-y-12">
                        {testimonies.map(testimony => (
                             <Card key={testimony.name} className="p-8">
                                <div className="flex items-start space-x-6">
                                    <img className="w-16 h-16 rounded-full" src={testimony.image} alt={testimony.name} />
                                    <div>
                                        <blockquote className="text-lg text-gray-700">"{testimony.story}"</blockquote>
                                        <p className="mt-4 font-bold text-brand-purple-800">- {testimony.name}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;