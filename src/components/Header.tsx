import React from 'react';
import { Code2, Cpu, HelpCircle, Search, Terminal, Sun, Moon } from 'lucide-react';
import { SubjectType, SetType } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  activeTab: 'problems' | 'xampp_guide';
  setActiveTab: (tab: 'problems' | 'xampp_guide') => void;
  activeSubject: SubjectType;
  setActiveSubject: (subject: SubjectType) => void;
  selectedSet: SetType | 'ALL';
  setSelectedSet: (set: SetType | 'ALL') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  totalPhpCount: number;
  totalCCount: number;
  darkMode: boolean;
  toggleTheme: () => void;
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
  totalPhpCount,
  totalCCount,
  darkMode,
  toggleTheme,
}) => {
  return (
    <header className={`${darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'} border-b sticky top-0 z-40 shadow-md transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Top bar with title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20 ring-1 ring-indigo-400/30">
              <Terminal className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-xl font-bold ${darkMode ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-purple-200' : 'text-slate-900'}`}>
                  PHP & C Data Structures
                </h1>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${darkMode ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border-indigo-200'}`}>
                  Lab Workbench
                </span>
              </div>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                Complete Lab Practical Codes (Set A, B, C) & Interactive Live Simulator
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-indigo-900 border-slate-300'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                  <span>Light Theme</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/20" />
                  <span>Dark Theme</span>
                </>
              )}
            </button>

            {/* Download Android App Button */}
            <PWAInstallButton />

            {/* XAMPP Guide Quick Button */}
            <button
              onClick={() => setActiveTab('xampp_guide')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                activeTab === 'xampp_guide'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 border-slate-700'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-300'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Fix Output & XAMPP Guide</span>
            </button>
          </div>
        </div>

        {/* Tab Selection & Subject Toggle */}
        <div className={`mt-5 pt-3 border-t ${darkMode ? 'border-slate-800/80' : 'border-slate-200'} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
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
                  : darkMode
                  ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>PHP Web Scripting</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${darkMode ? 'bg-slate-900/60 text-indigo-300' : 'bg-white text-indigo-700 border border-slate-200'}`}>
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
                  : darkMode
                  ? 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>C Data Structures & Sorting</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${darkMode ? 'bg-slate-900/60 text-purple-300' : 'bg-white text-purple-700 border border-slate-200'}`}>
                {totalCCount}
              </span>
            </button>
          </div>

          {/* Search bar and Set Filters (shown when in problems tab) */}
          {activeTab === 'problems' && (
            <div className="flex flex-wrap items-center gap-2">
              {/* SET Filter Pill */}
              <div className={`flex items-center p-1 rounded-lg border text-xs ${darkMode ? 'bg-slate-800/90 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                {(['ALL', 'SET A', 'SET B', 'SET C'] as const).map((set) => (
                  <button
                    key={set}
                    onClick={() => setSelectedSet(set)}
                    className={`px-2.5 py-1 rounded-md font-semibold transition ${
                      selectedSet === set
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : darkMode
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {set}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 md:w-56">
                <Search className={`w-4 h-4 absolute left-3 top-2.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                <input
                  type="text"
                  placeholder="Search assignment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full rounded-lg pl-9 pr-3 py-1.5 text-xs transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    darkMode
                      ? 'bg-slate-950 border border-slate-700 text-slate-200 placeholder-slate-500'
                      : 'bg-slate-100 border border-slate-300 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
