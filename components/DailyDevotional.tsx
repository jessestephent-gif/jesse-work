
import React, { useState, useEffect } from 'react';
import { Devotional } from '../types';
import { getDailyDevotional } from '../services/geminiService';
import { SparklesIcon } from './icons';

const DailyDevotional: React.FC = () => {
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevotional = async () => {
      setLoading(true);
      const data = await getDailyDevotional();
      setDevotional(data);
      setLoading(false);
    };
    fetchDevotional();
  }, []);

  return (
    <div className="bg-gradient-to-br from-brand-purple-700 to-brand-purple-900 text-white rounded-xl shadow-2xl p-8 my-8">
      <h3 className="text-2xl font-bold font-serif flex items-center gap-2 mb-4">
        <SparklesIcon className="w-6 h-6 text-yellow-300" />
        A Moment of Hope
      </h3>
      {loading ? (
        <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-white/20 rounded w-1/3"></div>
            <div className="h-4 bg-white/20 rounded w-full"></div>
            <div className="h-12 bg-white/20 rounded w-full mt-4"></div>
        </div>
      ) : devotional ? (
        <>
          <p className="text-lg font-semibold text-brand-purple-200">{devotional.verseReference}</p>
          <blockquote className="text-xl italic border-l-4 border-brand-purple-400 pl-4 my-4">
            "{devotional.verseText}"
          </blockquote>
          <p className="text-brand-purple-100 leading-relaxed">{devotional.devotionalText}</p>
        </>
      ) : (
        <p>Could not load devotional at this time.</p>
      )}
    </div>
  );
};

export default DailyDevotional;
