import React from 'react';
import { AlertTriangle, CheckCircle2, Folder, HelpCircle, Server, Terminal, ShieldAlert, Sparkles, Cpu } from 'lucide-react';

interface XamppGuideProps {
  showMarathi: boolean;
}

export const XamppGuide: React.FC<XamppGuideProps> = ({ showMarathi }) => {
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
              {showMarathi 
                ? 'PHP आउटपुट का दिसत नाही? (Run hot nahi / Output show nhi hot error fix)' 
                : 'Why PHP Output is Not Showing on Double-Click? (Troubleshooting Guide)'}
            </h2>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {showMarathi
                ? 'PHP फाइलवर डायरेक्ट डबल-क्लिक केल्यास ब्राऊझरमध्ये फक्त कोड दिसतो किंवा आउटपुट येत नाही. PHP कोड चालवण्यासाठी local server (XAMPP / WAMP) आवश्यक असतो.'
                : 'PHP is a server-side language. Double-clicking a .php file opens it as a static file (file:///) instead of processing PHP code. You MUST run it through Apache web server via http://localhost.'}
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
              {showMarathi ? 'XAMPP इंस्टॉल व स्टार्ट करा' : 'Install & Start XAMPP Server'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            {showMarathi
              ? 'XAMPP Control Panel उघडा आणि "Apache" च्या समोरील "Start" बटणावर क्लिक करा.'
              : 'Open XAMPP Control Panel and click "Start" next to Apache service.'}
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
              {showMarathi ? 'फाइल htdocs फोल्डरमध्ये ठेवा' : 'Copy File into `htdocs` Folder'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            {showMarathi
              ? 'तुमची .php फाईल नक्की C:\\xampp\\htdocs\\ या फोल्डरमध्येच सेव्ह करा.'
              : 'Save your .php files inside C:\\xampp\\htdocs\\myfolder\\'}
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
              {showMarathi ? 'ब्राऊझरमध्ये localhost नाव टाका' : 'Access via http://localhost URL'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            {showMarathi
              ? 'ब्राऊझर उघडा आणि अॅड्रेस बारमध्ये हे URL टाईप करा (डबल क्लिक करू नका!):'
              : 'Open Chrome or Firefox and type this URL (Do NOT double-click file!):'}
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
              {showMarathi ? 'फॉर्म सबमिट झाल्यावर एरर घालवणे' : 'Form Submission & isset() Check'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            {showMarathi
              ? 'फॉर्म भरण्याआधी "Undefined index" चा एरर येऊ नये म्हणून `isset($_POST[\'submit\'])` चे चेकिंग सर्व कोडमध्ये वापरले आहे.'
              : 'Our codes wrap PHP calculations inside `if (isset($_POST[\'submit\']))` to prevent "Undefined array key" warnings on page load.'}
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
          <span>
            {showMarathi ? 'कॉमन एरर आणि त्यांचे उपाय (Common Mistakes & Solutions)' : 'Common PHP Errors & Solutions'}
          </span>
        </h3>

        <div className="space-y-3">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <p className="text-xs font-semibold text-rose-400 mb-1">
              ❌ Problem: Warning: Undefined array key "num1" / Undefined index "submit"
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>कारण:</strong> पेज लोड होताच PHP लगेच `$_POST['num1']` शोधायचा प्रयत्न करतो. जर युजरने फॉर्म सबमिट केला नसेल, तर हे व्हॅल्यू अस्तित्वात नसते.<br/>
              <strong>उपाय:</strong> फॉर्म इनपुट घेण्यापूर्वी `if ($_SERVER["REQUEST_METHOD"] == "POST")` किंवा `if (isset($_POST['submit']))` वापरणे mandatory आहे.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <p className="text-xs font-semibold text-rose-400 mb-1">
              ❌ Problem: Form action does not redirect or reloads blank page
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>उपाय:</strong> फॉर्म त्याच फाइलवर सबमिट करण्यासाठी `action=""` ठेवा. जर PHP आणि HTML एकाच फाइलमध्ये असतील तर हा सर्वात सोपा आणि एरर-फ्री मार्ग आहे.
            </p>
          </div>
        </div>
      </div>

      {/* How to Run C Programs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          <span>
            {showMarathi ? 'C डेटा स्ट्रक्चर्स कोड कसे रन करावेत? (How to Run C Code)' : 'How to Compile and Run C Programs'}
          </span>
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
