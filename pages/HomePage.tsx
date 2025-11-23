import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, UsersIcon, BookOpenIcon, ChatBubbleLeftRightIcon } from '../components/icons';
import DailyDevotional from '../components/DailyDevotional';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Two women having a supportive conversation" />
            <div className="absolute inset-0 bg-brand-purple-800/70 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-serif font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A Sanctuary for Healing & Hope
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-purple-100">
                You are not alone. Connect with a faith-centered community, find healing resources, and build a brighter future with others who understand.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/community" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-purple-700 bg-white hover:bg-purple-50 transition-transform hover:scale-105">
                    Join Community
                </Link>
                <Link to="/booking" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-purple-600 hover:bg-brand-purple-700 transition-transform hover:scale-105">
                    Find a Counselor
                </Link>
                 <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-purple-200 text-base font-medium rounded-md text-white hover:bg-white hover:text-brand-purple-700 transition-transform hover:scale-105">
                    WhatsApp Channel
                </a>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-serif font-bold text-brand-purple-900">How We Help</h2>
                <p className="mt-4 text-lg text-gray-600">Our mission is to provide a path to spiritual and emotional wholeness.</p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-lg mx-auto mb-4">
                         <HeartIcon className="h-8 w-8 text-brand-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-purple-900">Healing Centered</h3>
                    <p className="mt-2 text-gray-600">A safe space to process heartbreak, depression, and anxiety with faith-based guidance.</p>
                </div>
                 <div className="text-center p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-lg mx-auto mb-4">
                         <UsersIcon className="h-8 w-8 text-brand-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-purple-900">Supportive Community</h3>
                    <p className="mt-2 text-gray-600">Connect with others who understand your journey in our moderated groups and forums.</p>
                </div>
                 <div className="text-center p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-lg mx-auto mb-4">
                         <BookOpenIcon className="h-8 w-8 text-brand-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-purple-900">Empowering Resources</h3>
                    <p className="mt-2 text-gray-600">Access devotionals, articles, and counseling to strengthen your faith and spirit.</p>
                </div>
                <div className="text-center p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-lg mx-auto mb-4">
                         <ChatBubbleLeftRightIcon className="h-8 w-8 text-brand-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-purple-900">Meaningful Connections</h3>
                    <p className="mt-2 text-gray-600">Move beyond healing to build genuine, supportive friendships with fellow singles who share your values.</p>
                </div>
            </div>
          </div>
      </section>

      {/* Daily Devotional Section */}
       <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <DailyDevotional />
          </div>
       </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-brand-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-serif font-bold text-brand-purple-900">Stories of Transformation</h2>
                <p className="mt-4 text-lg text-gray-600">Hear from those who have found healing and hope through our community.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <Card className="p-8">
                    <blockquote className="text-gray-600">"I felt so lost after my breakup, but the Singles Council community showed me I wasn't alone. The daily devotionals were a lifeline."</blockquote>
                    <p className="mt-4 font-semibold text-brand-purple-800">- Sarah J.</p>
                </Card>
                <Card className="p-8">
                    <blockquote className="text-gray-600">"Counseling helped me work through years of anxiety. I'm so grateful for the compassionate, faith-based approach."</blockquote>
                    <p className="mt-4 font-semibold text-brand-purple-800">- David L.</p>
                </Card>
                 <Card className="p-8">
                    <blockquote className="text-gray-600">"Being able to share my struggles on the prayer wall was a huge step, but the friendships I've made here have been life-changing."</blockquote>
                    <p className="mt-4 font-semibold text-brand-purple-800">- Emily R.</p>
                </Card>
                 <Card className="p-8">
                    <blockquote className="text-gray-600">"I came here looking for healing, but I found so much more. I've made incredible friends who I can laugh, pray, and grow with. This council is truly a blessing."</blockquote>
                    <p className="mt-4 font-semibold text-brand-purple-800">- Michael B.</p>
                </Card>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;