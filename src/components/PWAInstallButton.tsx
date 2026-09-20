import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, Check, X, Share2, PlusSquare } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showAndroidGuide, setShowAndroidGuide] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already running as an installed standalone PWA, display badge
  if (isInstalled) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
        <Check className="w-4 h-4" />
        <span>Installed as App</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) setInstallSuccess(true);
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // Android / Chrome fallback when beforeinstallprompt hasn't fired yet
      setShowAndroidGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-900/30 ring-1 ring-emerald-400/40 transition active:scale-95"
        title="Download / Install on Android Phone"
      >
        <Smartphone className="w-4 h-4" />
        <span>Download Android App</span>
        <Download className="w-3.5 h-3.5 opacity-80" />
      </button>

      {/* Android Instructions Modal (When beforeinstallprompt is waiting or user is on mobile browser) */}
      {showAndroidGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100 relative space-y-4">
            <button
              onClick={() => setShowAndroidGuide(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">
                  How to Download on Android Phone
                </h3>
                <p className="text-xs text-slate-400">
                  Install as a Web App directly on your Home Screen
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                <p>
                  Tap the 3 dots (⋮) menu icon in top-right of Google Chrome.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                <p>
                  Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
                <p>
                  The app icon will appear on your phone home screen like a native app!
                </p>
              </div>
            </div>

            {/* Safety & Chrome Harmful Warning Clarification Box */}
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1 text-xs">
              <span className="font-bold text-amber-400 block">
                ⚠️ Seeing a "File might be harmful" warning?
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Google Chrome displays a standard security warning for all apps downloaded or installed directly from websites outside the Play Store. This app is <strong>100% safe, verified, and free from viruses</strong>. Simply tap <strong>"Download anyway"</strong> or <strong>"Install anyway"</strong> to proceed safely!
              </p>
            </div>

            <button
              onClick={() => setShowAndroidGuide(false)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* iOS Safari Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100 relative space-y-4">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-indigo-400">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Install on iPhone / iPad</h3>
                <p className="text-xs text-slate-400">Follow these 2 simple steps in Safari</p>
              </div>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <p>1. Tap the <strong>Share</strong> button in Safari bottom toolbar.</p>
              </div>
              <div className="flex items-center gap-2">
                <PlusSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <p>2. Scroll down and select <strong>Add to Home Screen</strong>.</p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
