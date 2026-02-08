import React from 'react';
import { Job } from '../types';
import { BadgeDollarSign, Clock, BookOpen, Activity, ShieldCheck, TrendingUp, BrainCircuit } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-800 leading-tight">{job.title}</h3>
          <span className="inline-block mt-2 px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-md">
            Tier {job.tier} - Elite
          </span>
        </div>
        <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg flex flex-col items-center min-w-[80px]">
          <BadgeDollarSign size={20} />
          <span className="text-xs font-bold mt-1">Top 1%</span>
          <span className="text-xs font-bold">{job.incomeRange.top}</span>
        </div>
      </div>

      <p className="text-slate-600 text-sm mb-6 flex-grow">{job.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="flex items-center text-slate-600">
          <Clock size={16} className="mr-2 text-slate-400" />
          <span>Entry: <span className="font-medium text-slate-800">{job.timeToFirstDollar}</span></span>
        </div>
        <div className="flex items-center text-slate-600">
            <Activity size={16} className="mr-2 text-slate-400" />
            <span>Longevity: <span className="font-medium text-slate-800">{job.metrics.longevity}/10</span></span>
        </div>
         <div className="flex items-center text-slate-600">
            <ShieldCheck size={16} className="mr-2 text-slate-400" />
            <span>AI Risk: <span className="font-medium text-slate-800">{job.metrics.aiRisk}/5</span></span>
        </div>
        <div className="flex items-center text-slate-600">
            <BrainCircuit size={16} className="mr-2 text-slate-400" />
            <span>Entry Ease: <span className="font-medium text-slate-800">{job.metrics.easeOfEntry}/10</span></span>
        </div>
      </div>

      <div className="mt-auto">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Skills</h4>
        <div className="flex flex-wrap gap-2">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200">
              {skill}
            </span>
          ))}
          {job.skills.length > 3 && (
            <span className="px-2 py-1 bg-slate-50 text-slate-400 text-xs rounded-md">+{job.skills.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
