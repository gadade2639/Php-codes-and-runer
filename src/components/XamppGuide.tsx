import React from 'react';
import { AlertTriangle, CheckCircle2, Folder, HelpCircle, Server, Terminal, ShieldAlert, Sparkles, Cpu } from 'lucide-react';

export const XamppGuide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6 text-slate-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-900/40 via-slate-900 to-indigo-900/40 border border-amber-500/30 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-300">
              Why PHP Output is Not Showing on Double-Click? (Troubleshooting Guide)
            </h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              PHP is a server-side language. Double-clicking a .php file opens it as a static file (file:///) instead of processing PHP code. You MUST run it through Apache web server via http://localhost.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Step XAMPP Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Step 1 */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
              1
            </span>
            <h3 className="font-bold text-sm text-indigo-300">
              Install & Start XAMPP Server
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Open XAMPP Control Panel and click "Start" next to Apache service.
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-2">
            <Server className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Apache Status: Running (Port 80, 443)</span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-xs">
              2
            </span>
            <h3 className="font-bold text-sm text-purple-300">
              Copy File into `htdocs` Folder
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Save your .php files inside C:\xampp\htdocs\myfolder\
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <Folder className="w-4 h-4 text-amber-400 shrink-0" />
            <span>C:\xampp\htdocs\php_practicals\lab1.php</span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              3
            </span>
            <h3 className="font-bold text-sm text-emerald-300">
              Access via http://localhost URL
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Open Chrome or Firefox and type this URL (Do NOT double-click file!):
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-indigo-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>http://localhost/php_practicals/lab1.php</span>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-xs">
              4
            </span>
            <h3 className="font-bold text-sm text-amber-300">
              Form Submission & isset() Check
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Our codes wrap PHP calculations inside `if (isset($_POST['submit']))` to prevent "Undefined array key" warnings on page load.
          </p>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>if (isset($_POST['submit'])) &#123; ... &#125;</span>
          </div>
        </div>
      </div>

      {/* Common Errors Table & Fixes */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-400" />
          <span>Common PHP Errors & Solutions</span>
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <p className="text-xs font-semibold text-rose-400 mb-1">
              ❌ Problem: Warning: Undefined array key "num1" / Undefined index "submit"
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Cause:</strong> PHP tries to read `$_POST['num1']` immediately on page load before the user clicks submit.<br/>
              <strong>Solution:</strong> Always wrap form processing inside `if ($_SERVER["REQUEST_METHOD"] == "POST")` or `if (isset($_POST['submit']))`.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <p className="text-xs font-semibold text-rose-400 mb-1">
              ❌ Problem: Form action does not redirect or reloads blank page
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Solution:</strong> Keep `action=""` to submit the form to the same file. Combining HTML and PHP in a single file is the cleanest and most reliable method.
            </p>
          </div>
        </div>
      </div>

      {/* How to Run C Programs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          <span>How to Compile and Run C Programs</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-semibold text-purple-300 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>VS Code / GCC Terminal</span>
            </h4>
            <p className="text-slate-400">
              1. Open terminal in file folder.<br/>
              2. Compile using GCC compiler:<br/>
              <code className="bg-slate-900 text-indigo-300 px-2 py-1 rounded block my-1 font-mono">gcc filename.c -o program</code>
              3. Run executable:<br/>
              <code className="bg-slate-900 text-emerald-300 px-2 py-1 rounded block my-1 font-mono">./program (Windows: program.exe)</code>
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-semibold text-indigo-300 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-indigo-400" />
              <span>Turbo C++ / Code::Blocks</span>
            </h4>
            <p className="text-slate-400">
              1. Open `.c` file in Code::Blocks / Dev-C++ / Turbo C++.<br/>
              2. Press <strong>F9</strong> or click <strong>Build and Run</strong>.<br/>
              3. Ensure file extension is `.c` (not `.cpp`).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
