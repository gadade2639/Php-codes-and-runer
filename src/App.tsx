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

  const [activeTab, setActiveTab] = useState<'problems' | 'xampp_guide'>('problems');
  const [activeSubject, setActiveSubject] = useState<SubjectType>('php');
  const [selectedSet, setSelectedSet] = useState<SetType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMarathi, setShowMarathi] = useState<boolean>(true);
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
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
        showMarathi={showMarathi}
        setShowMarathi={setShowMarathi}
        totalPhpCount={phpProblems.length}
        totalCCount={cDataStructuresProblems.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'xampp_guide' ? (
          <XamppGuide showMarathi={showMarathi} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar: Problem List Navigation */}
            <aside className="lg:col-span-4 space-y-3">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-300">
                      {activeSubject === 'php' ? 'PHP Practical Index' : 'C Data Structures Index'}
                    </span>
                  </div>
                  <span className="bg-slate-800 text-slate-400 text-[11px] font-mono px-2 py-0.5 rounded-full">
                    {currentProblems.length} items
                  </span>
                </div>

                {/* Problem items list */}
                <div className="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
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
                          className={`w-full text-left p-3 rounded-xl border transition flex items-start justify-between gap-2 group ${
                            isSelected
                              ? activeSubject === 'php'
                                ? 'bg-indigo-600/15 border-indigo-500/50 text-indigo-200 shadow-md'
                                : 'bg-purple-600/15 border-purple-500/50 text-purple-200 shadow-md'
                              : 'bg-slate-950/60 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                          }`}
                        >
                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[10px] font-bold px-1.5 py-0.2 rounded border uppercase tracking-wider ${
                                  prob.set === 'SET A'
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                    : prob.set === 'SET B'
                                    ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                                    : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                }`}
                              >
                                {prob.set}
                              </span>
                              <span className="font-mono text-[11px] text-slate-400 truncate">
                                {prob.filename}
                              </span>
                            </div>
                            <h4 className="font-medium text-xs text-slate-200 truncate leading-snug group-hover:text-white">
                              {prob.title}
                            </h4>
                            {showMarathi && (
                              <p className="text-[11px] text-slate-400 truncate">
                                {prob.marathiTitle}
                              </p>
                            )}
                          </div>

                          {isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold px-2.5 py-0.5 rounded-md">
                            {activeProblem.set}
                          </span>
                          <span className="bg-slate-800 text-slate-400 text-xs font-mono px-2 py-0.5 rounded">
                            {activeProblem.filename}
                          </span>
                        </div>
                        <h2 className="text-lg font-bold text-white">
                          {activeProblem.title}
                        </h2>
                        {showMarathi && (
                          <h3 className="text-xs font-medium text-indigo-300 mt-0.5 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{activeProblem.marathiTitle}</span>
                          </h3>
                        )}
                      </div>

                      {/* View Mode Toggle Switch */}
                      <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 self-start sm:self-auto text-xs">
                        <button
                          onClick={() => setViewMode('both')}
                          className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-semibold transition ${
                            viewMode === 'both'
                              ? 'bg-indigo-600 text-white shadow-sm'
                              : 'text-slate-400 hover:text-slate-200'
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
                              : 'text-slate-400 hover:text-slate-200'
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
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Live Runner</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      {activeProblem.description}
                    </p>
                  </div>

                  {/* Main Grid for Code and/or Simulator */}
                  <div
                    className={`grid grid-cols-1 ${
                      viewMode === 'both' ? 'xl:grid-cols-2' : 'grid-cols-1'
                    } gap-5`}
                  >
                    {/* Code Snippet Box */}
                    {(viewMode === 'both' || viewMode === 'code') && (
                      <CodeViewer problem={activeProblem} showMarathi={showMarathi} />
                    )}

                    {/* Simulator Box */}
                    {(viewMode === 'both' || viewMode === 'simulator') && (
                      <div>
                        {activeProblem.subject === 'php' ? (
                          <PhpSimulator problem={activeProblem} showMarathi={showMarathi} />
                        ) : (
                          <CDsSimulator problem={activeProblem} showMarathi={showMarathi} />
                        )}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400 text-xs">
                  Select an assignment from the left index to view source code & test live execution.
                </div>
              )}
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-4 mt-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>PHP & C Data Structures Workbench — 100% Verified Practical Solutions</span>
          </div>
          <p className="text-slate-400 flex items-center gap-1">
            <span>Built with React & Tailwind</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
