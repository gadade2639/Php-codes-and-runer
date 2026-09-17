import React from 'react';
import { Code2, Cpu, HelpCircle, Search, Terminal, BookOpen } from 'lucide-react';
import { SubjectType, SetType } from '../types';

interface HeaderProps {
  activeTab: 'problems' | 'xampp_guide';
  setActiveTab: (tab: 'problems' | 'xampp_guide') => void;
  activeSubject: SubjectType;
  setActiveSubject: (subject: SubjectType) => void;
  selectedSet: SetType | 'ALL';
  setSelectedSet: (set: SetType | 'ALL') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  showMarathi: boolean;
  setShowMarathi: (val: boolean) => void;
  totalPhpCount: number;
  totalCCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  activeSubject,
  setActiveSubject,
  selectedSet,
  setSelectedSet,
  searchQuery,
  setSearchQuery,
  showMarathi,
  setShowMarathi,
  totalPhpCount,
  totalCCount
}) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 shadow-xl text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top bar with title and language toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/30">
              <Terminal className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-purple-200">
                  PHP & C Data Structures
                </h1>
                <span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-indigo-500/30">
                  Lab Workbench
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {showMarathi 
                  ? 'कॉलेज प्रॅक्टिकल प्रश्न, १% अचूक (Error-Free) कोड आणि लाईव्ह सिम्युलेटर' 
                  : 'Complete Lab Practical Codes (Set A, B, C) & Interactive Live Simulator'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Marathi / English Language toggle */}
            <button
              onClick={() => setShowMarathi(!showMarathi)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
              title="Toggle Marathi explanations"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>{showMarathi ? 'मराठी / English' : 'English / मराठी'}</span>
            </button>

            {/* XAMPP Guide Quick Button */}
            <button
              onClick={() => setActiveTab('xampp_guide')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                activeTab === 'xampp_guide'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>{showMarathi ? 'एरर व XAMPP गाइड' : 'Fix Output & XAMPP Guide'}</span>
            </button>
          </div>
        </div>

        {/* Tab Selection & Subject Toggle */}
        <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {/* Main Tabs */}
            <button
              onClick={() => {
                setActiveTab('problems');
                setActiveSubject('php');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'problems' && activeSubject === 'php'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400/40'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              <Code2 className="w-4 h-4 text-purple-300" />
              <span>PHP Web Scripting</span>
              <span className="bg-slate-900/60 text-indigo-300 text-xs px-2 py-0.5 rounded-full font-mono">
                {totalPhpCount}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab('problems');
                setActiveSubject('c_ds');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'problems' && activeSubject === 'c_ds'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-400/40'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              <Cpu className="w-4 h-4 text-indigo-300" />
              <span>C Data Structures & Sorting</span>
              <span className="bg-slate-900/60 text-purple-300 text-xs px-2 py-0.5 rounded-full font-mono">
                {totalCCount}
              </span>
            </button>
          </div>

          {/* Search bar and Set Filters (shown when in problems tab) */}
          {activeTab === 'problems' && (
            <div className="flex flex-wrap items-center gap-2">
              {/* SET Filter Pill */}
              <div className="flex items-center bg-slate-800/90 p-1 rounded-lg border border-slate-700 text-xs">
                {(['ALL', 'SET A', 'SET B', 'SET C'] as const).map((set) => (
                  <button
                    key={set}
                    onClick={() => setSelectedSet(set)}
                    className={`px-2.5 py-1 rounded-md font-semibold transition ${
                      selectedSet === set
                        ? 'bg-indigo-500 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {set}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 md:w-56">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder={showMarathi ? 'प्रश्नाचे नाव शोधा...' : 'Search assignment...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
