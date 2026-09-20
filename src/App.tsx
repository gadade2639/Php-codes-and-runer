import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CodeViewer } from './components/CodeViewer';
import { PhpSimulator } from './components/PhpSimulator';
import { CDsSimulator } from './components/CDsSimulator';
import { XamppGuide } from './components/XamppGuide';
import { phpProblems } from './data/phpProblems';
import { cDataStructuresProblems } from './data/cDataStructuresProblems';
import { SubjectType, SetType, Problem } from './types';
import { Code2, Play, LayoutGrid, CheckCircle2, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('app_theme');
    return saved ? saved === 'dark' : true;
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem('app_theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const [activeTab, setActiveTab] = useState<'problems' | 'xampp_guide'>('problems');
  const [activeSubject, setActiveSubject] = useState<SubjectType>('php');
  const [selectedSet, setSelectedSet] = useState<SetType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'both' | 'code' | 'simulator'>('both');

  // Selected Problem ID
  const [selectedProblemId, setSelectedProblemId] = useState<string>('php-seta-1');

  // Filter problems based on Subject, Set, and Search Query
  const currentProblems = useMemo(() => {
    const list = activeSubject === 'php' ? phpProblems : cDataStructuresProblems;
    return list.filter((p) => {
      const matchSet = selectedSet === 'ALL' || p.set === selectedSet;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.marathiTitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.filename.toLowerCase().includes(q) ||
        p.set.toLowerCase().includes(q);
      return matchSet && matchQuery;
    });
  }, [activeSubject, selectedSet, searchQuery]);

  // Currently Active Problem
  const activeProblem = useMemo(() => {
    const found = currentProblems.find((p) => p.id === selectedProblemId);
    if (found) return found;
    return currentProblems[0] || (activeSubject === 'php' ? phpProblems[0] : cDataStructuresProblems[0]);
  }, [currentProblems, selectedProblemId, activeSubject]);

  // Handle subject change
  const handleSubjectChange = (sub: SubjectType) => {
    setActiveSubject(sub);
    const defaultList = sub === 'php' ? phpProblems : cDataStructuresProblems;
    setSelectedProblemId(defaultList[0].id);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'} font-sans transition-colors duration-200 selection:bg-indigo-500 selection:text-white flex flex-col`}>
      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeSubject={activeSubject}
        setActiveSubject={handleSubjectChange}
        selectedSet={selectedSet}
        setSelectedSet={setSelectedSet}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalPhpCount={phpProblems.length}
        totalCCount={cDataStructuresProblems.length}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'xampp_guide' ? (
          <XamppGuide />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar: Problem List Navigation */}
            <aside className="lg:col-span-4 space-y-3">
              <div className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} border rounded-2xl p-4 transition-colors`}>
                <div className={`flex items-center justify-between pb-3 border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-200'} mb-3`}>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-500" />
                    <span className={`font-bold text-xs uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {activeSubject === 'php' ? 'PHP Practical Index' : 'C Data Structures Index'}
                    </span>
                  </div>
                  <span className={`${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'} text-[11px] font-mono px-2 py-0.5 rounded-full`}>
                    {currentProblems.length} items
                  </span>
                </div>

                {/* Problem items list */}
                <div className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-400">
                  {currentProblems.length === 0 ? (
                    <div className="p-6 text-center text-slate-500 text-xs">
                      No matching practicals found. Try resetting search or set filter.
                    </div>
                  ) : (
                    currentProblems.map((prob) => {
                      const isSelected = prob.id === activeProblem?.id;
                      return (
                        <button
                          key={prob.id}
                          onClick={() => setSelectedProblemId(prob.id)}
                          className={`w-full text-left p-3.5 rounded-xl border transition flex flex-col gap-2 group ${
                            isSelected
                              ? activeSubject === 'php'
                                ? darkMode
                                  ? 'bg-indigo-600/20 border-indigo-500/60 text-indigo-100 shadow-lg shadow-indigo-950/50 ring-1 ring-indigo-500/30'
                                  : 'bg-indigo-50 border-indigo-400 text-indigo-950 shadow-sm ring-1 ring-indigo-300'
                                : darkMode
                                ? 'bg-purple-600/20 border-purple-500/60 text-purple-100 shadow-lg shadow-purple-950/50 ring-1 ring-purple-500/30'
                                : 'bg-purple-50 border-purple-400 text-purple-950 shadow-sm ring-1 ring-purple-300'
                              : darkMode
                              ? 'bg-slate-950/70 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                              : 'bg-slate-50/80 hover:bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full gap-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${
                                  prob.set === 'SET A'
                                    ? 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30'
                                    : prob.set === 'SET B'
                                    ? 'bg-indigo-500/15 text-indigo-600 border-indigo-500/30'
                                    : 'bg-purple-500/15 text-purple-600 border-purple-500/30'
                                }`}
                              >
                                {prob.set}
                              </span>
                              <span className={`font-mono text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'} truncate`}>
                                {prob.filename}
                              </span>
                            </div>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            )}
                          </div>

                          <div>
                            <h4 className={`font-bold text-xs leading-snug ${darkMode ? 'text-slate-100 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-950'}`}>
                              {prob.title}
                            </h4>
                          </div>

                          {/* Full Question snippet on Card */}
                          {prob.questionStatement && (
                            <div className={`w-full border rounded-lg p-2 mt-0.5 space-y-1 ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'}`}>
                              <p className={`text-[11px] font-mono line-clamp-3 leading-relaxed ${darkMode ? 'text-indigo-200' : 'text-slate-700'}`}>
                                <strong className="text-emerald-600 font-sans">Q. </strong>
                                {prob.questionStatement.replace(/^Q\.\s*/, '')}
                              </p>
                            </div>
                          )}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </aside>

            {/* Right Main Content Area: Problem Details, Code & Simulator */}
            <section className="lg:col-span-8 space-y-5">
              {activeProblem ? (
                <>
                  {/* Problem Title Box */}
                  <div className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'} border rounded-2xl p-5 relative overflow-hidden transition-colors`}>
                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md border ${darkMode ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border-indigo-200'}`}>
                            {activeProblem.set}
                          </span>
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                            {activeProblem.filename}
                          </span>
                        </div>
                        <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                          {activeProblem.title}
                        </h2>
                      </div>

                      {/* View Mode Toggle Switch */}
                      <div className={`flex items-center p-1 rounded-lg border text-xs self-start sm:self-auto ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-300'}`}>
                        <button
                          onClick={() => setViewMode('both')}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                            viewMode === 'both'
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : darkMode
                              ? 'text-slate-400 hover:text-slate-200'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <LayoutGrid className="w-3.5 h-3.5" />
                          <span>Split View</span>
                        </button>
                        <button
                          onClick={() => setViewMode('code')}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                            viewMode === 'code'
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : darkMode
                              ? 'text-slate-400 hover:text-slate-200'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>Code Only</span>
                        </button>
                        <button
                          onClick={() => setViewMode('simulator')}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                            viewMode === 'simulator'
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : darkMode
                              ? 'text-slate-400 hover:text-slate-200'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Live Runner</span>
                        </button>
                      </div>
                    </div>

                    <p className={`text-xs mt-3 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {activeProblem.description}
                    </p>

                    {/* Full Question Statement Card */}
                    {activeProblem.questionStatement && (
                      <div className={`mt-4 p-3.5 border rounded-xl space-y-1.5 ${darkMode ? 'bg-slate-950/80 border-indigo-500/30 shadow-inner' : 'bg-slate-50 border-indigo-200'}`}>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${darkMode ? 'text-indigo-300' : 'text-indigo-800'}`}>
                            Full Practical Question Statement:
                          </span>
                        </div>
                        <p className={`text-xs font-mono font-semibold leading-relaxed pl-4 border-l-2 ${darkMode ? 'text-slate-100 border-indigo-500/80' : 'text-slate-800 border-indigo-500'}`}>
                          {activeProblem.questionStatement}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Main Grid for Code and/or Simulator */}
                  <div
                    className={`grid grid-cols-1 ${
                      viewMode === 'both' ? 'xl:grid-cols-2' : 'grid-cols-1'
                    } gap-5`}
                  >
                    {/* Code Snippet Box */}
                    {(viewMode === 'both' || viewMode === 'code') && (
                      <CodeViewer problem={activeProblem} />
                    )}

                    {/* Simulator Box */}
                    {(viewMode === 'both' || viewMode === 'simulator') && (
                      <div>
                        {activeProblem.subject === 'php' ? (
                          <PhpSimulator key={activeProblem.id} problem={activeProblem} />
                        ) : (
                          <CDsSimulator key={activeProblem.id} problem={activeProblem} />
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className={`${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'} border rounded-2xl p-12 text-center text-xs`}>
                  Select an assignment from the left index to view source code & test live execution.
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-600'} border-t py-4 mt-8 text-center text-xs transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-500" />
            <span>PHP & C Data Structures Workbench — 100% Verified Practical Solutions</span>
          </div>
          <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} font-medium flex items-center gap-1.5`}>
            <span>Developed by <strong className="text-indigo-500">Tejas Gadade</strong></span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
