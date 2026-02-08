import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ScatterChart, Scatter, ZAxis } from 'recharts';
import { JOBS } from '../data';
import JobCard from './JobCard';

const Dashboard: React.FC = () => {
    // Prepare data for charts
    const riskVsLongevityData = JOBS.map(job => ({
        name: job.title.split(' ')[0], // Short name
        risk: job.metrics.aiRisk,
        longevity: job.metrics.longevity,
        tier: job.tier
    }));

    const incomeData = JOBS.map(job => {
        // Parse "$30K" to 30 for charting
        const topString = job.incomeRange.top.replace(/[^0-9]/g, '');
        const topVal = parseInt(topString.substring(0, 2)); // rough estimate
        return {
            name: job.id,
            shortName: job.title.split(' ')[0] + '...',
            income: topVal,
            fullTitle: job.title
        };
    }).sort((a, b) => b.income - a.income);

  return (
    <div className="space-y-8">
      {/* Introduction Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-indigo-100 text-sm font-medium mb-1">Top Tier Jobs</h3>
            <p className="text-4xl font-bold">{JOBS.length}</p>
            <p className="text-xs text-indigo-200 mt-2">Curated Elite Paths</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium mb-1">Avg. Top Income</h3>
            <p className="text-4xl font-bold text-slate-800">$35k<span className="text-lg text-slate-400">/mo</span></p>
            <p className="text-xs text-green-600 mt-2 flex items-center">
                Top 1% Potential
            </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-slate-500 text-sm font-medium mb-1">Avg. Time to Entry</h3>
            <p className="text-4xl font-bold text-slate-800">3-6<span className="text-lg text-slate-400">mo</span></p>
            <p className="text-xs text-slate-500 mt-2">For specialized roles</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Income Potential (Monthly Top 1%)</h3>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={incomeData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <XAxis type="number" hide />
                        <YAxis dataKey="shortName" type="category" width={100} tick={{fontSize: 12}} />
                        <Tooltip 
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                            formatter={(value: any) => [`$${value}k / mo`, 'Income']}
                        />
                        <Bar dataKey="income" fill="#4f46e5" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-2">AI Risk vs. Longevity</h3>
            <p className="text-xs text-slate-500 mb-6">Top right is best (High Longevity, Low Risk)</p>
            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <XAxis type="number" dataKey="risk" name="AI Risk (1-5)" domain={[0, 6]} label={{ value: 'AI Risk (Lower is better)', position: 'insideBottom', offset: -10, fontSize: 12 }} />
                        <YAxis type="number" dataKey="longevity" name="Longevity" domain={[0, 12]} label={{ value: 'Longevity Score', angle: -90, position: 'insideLeft', fontSize: 12 }} />
                        <ZAxis type="category" dataKey="name" name="Job" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{borderRadius: '8px'}} />
                        <Scatter name="Jobs" data={riskVsLongevityData} fill="#10b981" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Top 3 Intelligent Paths for 2026</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOBS.slice(0, 3).map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
