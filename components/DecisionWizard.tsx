import React, { useState, useEffect } from 'react';
import { QuizState, Job } from '../types';
import { JOBS } from '../data';
import JobCard from './JobCard';
import { ArrowRight, RotateCcw, CheckCircle } from 'lucide-react';

const DecisionWizard: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizState>({
    urgency: null,
    risk: null,
    learningSpeed: null,
    technical: null,
    capital: null,
  });
  const [recommendations, setRecommendations] = useState<Job[]>([]);

  const handleSelect = (key: keyof QuizState, value: any) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setStep(prev => prev + 1);
  };

  const calculateResults = () => {
    // Basic logic based on Section 7 Decision Tree
    let filtered = [...JOBS];

    // Note: The logic below is a simplification of the text's decision tree
    // adapted to the available structured data.

    if (answers.urgency === 'immediate') {
      // Immediate needs tend to be lower barrier.
      // Since our list is mostly Tier 1 (High barrier), we prioritize lower 'easeOfEntry' (which means harder)
      // wait, logic is inverted in text. Ease 3 is tough. Ease 6 is moderate.
      // Let's sort by Time To First Dollar for immediate.
       filtered = filtered.filter(j => j.timeToFirstDollar.toLowerCase().includes('week'));
    }

    if (answers.risk === 'averse') {
        // Filter for high longevity and low AI risk
        filtered = filtered.filter(j => j.metrics.longevity >= 8 && j.metrics.aiRisk <= 3);
    } else if (answers.risk === 'seeking') {
         // High upside, maybe newer fields
         filtered = filtered.filter(j => j.metrics.longevity < 8 || j.metrics.aiRisk > 3 || j.tags.includes('Crypto'));
    }

    if (answers.technical === 'no') {
        filtered = filtered.filter(j => 
            !j.tags.includes('Coding') && 
            !j.title.includes('Engineer') && 
            !j.title.includes('Developer')
        );
    }

    // Sort by match score (simulated)
    setRecommendations(filtered.slice(0, 3));
  };

  useEffect(() => {
    if (step === 5) {
      calculateResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const reset = () => {
    setStep(0);
    setAnswers({
        urgency: null,
        risk: null,
        learningSpeed: null,
        technical: null,
        capital: null,
    });
  };

  if (step === 5) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Your Career Matches</h2>
          <p className="text-slate-600">Based on your profile, here are the Tier 1 paths that suit you best.</p>
          <button onClick={reset} className="mt-4 flex items-center justify-center mx-auto text-indigo-600 hover:text-indigo-800 font-medium">
            <RotateCcw size={16} className="mr-2" /> Start Over
          </button>
        </div>

        {recommendations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-white rounded-lg border border-slate-200">
            <p className="text-lg text-slate-600">No exact Tier 1 matches found for this specific combination.</p>
            <p className="text-sm text-slate-500 mt-2">Try adjusting your risk tolerance or technical preference.</p>
          </div>
        )}
      </div>
    );
  }

  const questions = [
    {
      key: 'urgency',
      title: 'Income Urgency',
      desc: 'Do you need money now or can you invest time?',
      options: [
        { value: 'immediate', label: 'Immediate (Need cash in 0-3 months)', icon: '⚡' },
        { value: 'patient', label: 'Patient (Can invest 6+ months)', icon: '🌱' },
      ]
    },
    {
        key: 'risk',
        title: 'Risk Tolerance',
        desc: 'Do you prefer stability or high upside?',
        options: [
          { value: 'averse', label: 'Risk-Averse (Steady demand, safe bets)', icon: '🛡️' },
          { value: 'seeking', label: 'Risk-Seeking (High upside, new niches)', icon: '🚀' },
        ]
    },
    {
        key: 'learningSpeed',
        title: 'Learning Style',
        desc: 'How fast can you learn new skills?',
        options: [
          { value: 'quick', label: 'Quick Learner (Intensive study ok)', icon: '🧠' },
          { value: 'slow', label: 'Steady / Pedantic (Prefer structure)', icon: '📚' },
        ]
    },
    {
        key: 'technical',
        title: 'Technical Ability',
        desc: 'Are you code-savvy or willing to learn code?',
        options: [
          { value: 'yes', label: 'Yes (I love/can learn tech)', icon: '💻' },
          { value: 'no', label: 'No (Prefer creative/strategy)', icon: '🎨' },
        ]
    },
    {
        key: 'capital',
        title: 'Available Capital',
        desc: 'How much can you invest to start?',
        options: [
          { value: 'low', label: 'Low ($0 - $100)', icon: '🪙' },
          { value: 'moderate', label: 'Moderate ($100 - $2k)', icon: '💵' },
          { value: 'high', label: 'High ($2k+)', icon: '💰' },
        ]
    }
  ];

  const currentQ = questions[step];

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-slate-400 mb-2">
            <span>Step {step + 1} of 5</span>
            <span>{Math.round(((step) / 5) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((step) / 5) * 100}%` }}></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentQ.title}</h2>
        <p className="text-slate-600 mb-8">{currentQ.desc}</p>

        <div className="space-y-4">
            {currentQ.options.map((opt) => (
                <button
                    key={opt.value}
                    onClick={() => handleSelect(currentQ.key as keyof QuizState, opt.value)}
                    className="w-full flex items-center p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 group text-left"
                >
                    <span className="text-2xl mr-4 bg-white p-2 rounded-lg shadow-sm">{opt.icon}</span>
                    <span className="text-lg font-medium text-slate-700 group-hover:text-indigo-900">{opt.label}</span>
                    <ArrowRight className="ml-auto text-slate-300 group-hover:text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DecisionWizard;
