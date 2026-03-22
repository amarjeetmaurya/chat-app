import { Link } from "react-router-dom";
import { Gamepad2, ArrowLeft } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-indigo-500" />
            <span className="text-xl font-bold tracking-tight text-white">WePlay Legal</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/register" className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors hidden sm:block">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-6 overflow-hidden flex flex-col items-center text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white relative z-10 mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl relative z-10">
          Last updated: October 24, 2026. Please read these terms carefully before joining the WePlay community.
        </p>
      </header>

      {/* Content Layout */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar TOC */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contents</h3>
            <ul className="space-y-3 text-sm text-slate-400 font-medium">
              <li><a href="#introduction" className="hover:text-indigo-400 transition-colors">1. Introduction</a></li>
              <li><a href="#conduct" className="hover:text-indigo-400 transition-colors">2. Community Conduct</a></li>
              <li><a href="#accounts" className="hover:text-indigo-400 transition-colors">3. Account Security</a></li>
              <li><a href="#voice-chat" className="hover:text-indigo-400 transition-colors">4. Voice & Chat Guidelines</a></li>
              <li><a href="#moderation" className="hover:text-indigo-400 transition-colors">5. Moderation & Bans</a></li>
              <li><a href="#privacy" className="hover:text-indigo-400 transition-colors">6. Privacy & Data</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Terms Document */}
        <article className="flex-1 prose prose-invert prose-indigo max-w-none">
          <section id="introduction" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              Welcome to WePlay! These Terms of Service ("Terms") govern your access to and use of the WePlay app, website, and services. By creating an account or using our services, you agree to be bound by these Terms and our Community Guidelines.
            </p>
            <p className="leading-relaxed">
              WePlay is designed to be a safe, welcoming place where communities can thrive. Whether you are hanging out in a voice channel with friends or coordinating a large gaming event, these rules ensure a positive experience for everyone.
            </p>
          </section>

          <section id="conduct" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">2. Community Conduct</h2>
            <p className="mb-4 leading-relaxed">
              As a member of WePlay, you agree to treat others with respect. You may not use the service to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Harass, threaten, or intimidate other users.</li>
              <li>Organize, promote, or participate in hate speech or hateful conduct.</li>
              <li>Share illegal, non-consensual, or highly graphic content.</li>
              <li>Spam servers, direct messages, or exploit our infrastructure.</li>
            </ul>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 mt-4">
              <strong className="text-indigo-400 block mb-1">Zero Tolerance Policy</strong>
              <p className="text-sm m-0">We have a zero-tolerance policy for harassment and doxing. Violations will result in immediate and permanent account suspension.</p>
            </div>
          </section>

          <section id="accounts" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Security</h2>
            <p className="mb-4 leading-relaxed">
              You are responsible for safely securing your account. Do not share your password or authentication tokens with anyone. WePlay staff will <strong>never</strong> ask for your password. If you believe your account has been compromised, contact our support team immediately.
            </p>
            <p className="leading-relaxed">
              You must be at least 13 years old (or older depending on your country of residence) to use WePlay. Providing false age information is a violation of these terms.
            </p>
          </section>

          <section id="voice-chat" className="mb-12 scroll-mt-24">
             <h2 className="text-2xl font-bold text-white mb-4">4. Voice & Chat Guidelines</h2>
             <p className="mb-4 leading-relaxed">
               Voice and video channels are the core of the WePlay experience. When using these features:
             </p>
             <ul className="list-disc pl-6 space-y-2 mb-4">
               <li>Do not use voice channels to broadcast excessively loud, disruptive, or harmful audio (e.g., ear-rape, screamer links).</li>
               <li>Respect server-specific rules configured by server administrators.</li>
               <li>Do not record voice channels without the explicit consent of all participants in the channel.</li>
             </ul>
          </section>

          <section id="moderation" className="mb-12 scroll-mt-24">
             <h2 className="text-2xl font-bold text-white mb-4">5. Moderation & Bans</h2>
             <p className="mb-4 leading-relaxed">
               We empower server owners and administrators to manage their own communities. However, the Trust & Safety team monitors global rule violations. WePlay reserves the right to remove any content or suspend any account that violates these Terms or our Community Guidelines at our sole discretion.
             </p>
             <p className="leading-relaxed">
               If your account is suspended, you may appeal the decision through our official support portal within 30 days of the action.
             </p>
          </section>

          <section id="privacy" className="mb-12 scroll-mt-24">
             <h2 className="text-2xl font-bold text-white mb-4">6. Privacy & Data</h2>
             <p className="mb-4 leading-relaxed">
               Your privacy is important to us. By using WePlay, you agree to our Privacy Policy, which explains how we collect, use, and protect your data. We do not sell your personal data to third parties. We use your data securely to provide low-latency communications, optimize our infrastructure, and keep the platform safe.
             </p>
          </section>

          <hr className="border-white/10 my-8" />
          
          <p className="text-slate-500 text-sm">
            For questions regarding these Terms, please contact legal@weplay.com.
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-6 border-t border-white/5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} WePlay Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsPage;
