import React, { useState } from 'react';
import { ViewState } from './types';
import { JOBS, BLUEPRINTS } from './data';
import JobCard from './components/JobCard';
import DecisionWizard from './components/DecisionWizard';
import Dashboard from './components/Dashboard';
import AICareerCoach from './components/AICareerCoach';
import { 
  LayoutDashboard, 
  List, 
  Wand2, 
  MessageSquareText, 
  Map, 
  Menu, 
  X,
  Briefcase
} from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'directory', label: 'Job Directory', icon: List },
    { id: 'wizard', label: 'Decision Engine', icon: Wand2 },
    { id: 'advisor', label: 'AI Coach', icon: MessageSquareText },
    { id: 'blueprints', label: 'Blueprints', icon: Map },
  ];

  const renderContent = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />;
      case 'directory':
        return (
          <div className="space-y-6">
             <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Job Directory</h2>
                <span className="text-slate-500 text-sm">{JOBS.length} Elite Roles</span>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {JOBS.map(job => <JobCard key={job.id} job={job} />)}
             </div>
          </div>
        );
      case 'wizard':
        return <DecisionWizard />;
      case 'advisor':
        return (
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">AI Career Coach</h2>
                    <p className="text-slate-600">Ask questions about income, skills, or specific career paths defined in the guide.</p>
                </div>
                <AICareerCoach />
            </div>
        );
      case 'blueprints':
        return (
            <div className="space-y-8 max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900">Career Blueprints</h2>
                <div className="grid gap-8">
                    {BLUEPRINTS.map((bp, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-100">
                                <h3 className="font-bold text-lg text-slate-800">{bp.title}</h3>
                            </div>
                            <div className="p-6">
                                <div className="relative border-l-2 border-indigo-200 pl-8 space-y-8">
                                    {bp.steps.map((step, sIdx) => (
                                        <div key={sIdx} className="relative">
                                            <div className="absolute -left-[39px] bg-indigo-600 h-5 w-5 rounded-full border-4 border-white shadow-sm"></div>
                                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">{step.time}</p>
                                            <p className="text-slate-700 font-medium">{step.action}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white fixed h-full z-10">
        <div className="p-6 flex items-center space-x-3">
          <div className="bg-indigo-500 p-2 rounded-lg">
             <Briefcase size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">CareerNav</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
             const Icon = item.icon;
             const isActive = view === item.id;
             return (
               <button
                 key={item.id}
                 onClick={() => setView(item.id as ViewState)}
                 className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                   isActive 
                     ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                     : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                 }`}
               >
                 <Icon size={20} />
                 <span className="font-medium">{item.label}</span>
               </button>
             );
          })}
        </nav>

        <div className="p-6 border-t border-slate-800">
            <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-2">Powered by</p>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-sm">Gemini 2.5 Flash</span>
                </div>
            </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full bg-slate-900 text-white z-20 flex justify-between items-center p-4">
         <div className="flex items-center space-x-2">
            <Briefcase size={20} className="text-indigo-400" />
            <span className="font-bold">CareerNav</span>
         </div>
         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900 z-10 pt-20 px-4">
            <nav className="space-y-4">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                    <button
                        key={item.id}
                        onClick={() => {
                            setView(item.id as ViewState);
                            setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-4 p-4 rounded-xl ${
                            view === item.id ? 'bg-indigo-600 text-white' : 'text-slate-400'
                        }`}
                    >
                        <Icon size={24} />
                        <span className="text-lg font-medium">{item.label}</span>
                    </button>
                    );
                })}
            </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-6 md:p-10 pt-20 md:pt-10 transition-all">
        {renderContent()}
      </main>

    </div>
  );
};

export default App;
