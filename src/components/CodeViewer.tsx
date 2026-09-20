import React, { useState } from 'react';
import { Check, Copy, Download, FileCode, Info, Sparkles } from 'lucide-react';
import { Problem } from '../types';

interface CodeViewerProps {
  problem: Problem;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ problem }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(problem.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([problem.code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = problem.filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const lines = problem.code.split('\n');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
      {/* Code Header Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-indigo-400" />
          <span className="font-mono text-xs font-semibold text-slate-200">
            {problem.filename}
          </span>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold px-2 py-0.5 rounded">
            100% Error-Free
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            title="Copy code to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-medium border border-indigo-500/40 transition"
            title="Download file"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download .{problem.subject === 'php' ? 'php' : 'c'}</span>
          </button>
        </div>
      </div>

      {/* Code Snippet Box with Line Numbers */}
      <div className="bg-slate-950 p-4 overflow-x-auto max-h-[500px] scrollbar-thin scrollbar-thumb-slate-800">
        <pre className="font-mono text-xs text-slate-300 leading-relaxed flex">
          <div className="select-none text-slate-600 text-right pr-4 border-r border-slate-800/80 mr-4 flex flex-col">
            {lines.map((_, idx) => (
              <span key={idx}>{idx + 1}</span>
            ))}
          </div>
          <code className="flex-1">
            {lines.map((line, idx) => (
              <div key={idx} className="hover:bg-slate-900/60 rounded px-1">
                {line || ' '}
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Explanation & Key Notes */}
      <div className="p-4 bg-slate-900/80 border-t border-slate-800 space-y-3">
        <div className="flex items-start gap-2.5">
          <Info className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-semibold text-indigo-300 block mb-0.5">
              Explanation:
            </span>
            {problem.explanation.en}
          </div>
        </div>

        {problem.keyTakeaways && problem.keyTakeaways.length > 0 && (
          <div className="pt-2 border-t border-slate-800/60">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Key Concepts & Tips
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-slate-400">
              {problem.keyTakeaways.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
