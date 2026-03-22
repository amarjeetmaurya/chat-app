import { Link } from "react-router-dom";
import { Gamepad2, MessageSquare, Mic, Users, Zap, Shield, ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight">WePlay</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/app/explore" className="hover:text-white transition-colors">Explore</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Safety</Link>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium hover:text-white transition-colors">Login</Link>
          <Link to="/register" className="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 rounded-full transition-colors hidden sm:block shadow-lg shadow-indigo-500/20">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl relative z-10 leading-tight">
          IMAGINE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">PLACE...</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl relative z-10">
          ...where you can belong to a gaming group, a worldwide art community, or just a handful of friends that want to spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-10">
          <Link to="/register" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group">
            Open in Browser <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/app/explore" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-colors flex items-center justify-center">
            Explore Servers
          </Link>
        </div>
      </header>

      {/* Feature 1 (Zig-zag right) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full" />
          <div className="relative aspect-video bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-4 overflow-hidden group">
             {/* Mock UI */}
             <div className="flex gap-4 items-center border-b border-white/5 pb-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                 <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="flex-1 h-6 bg-slate-800 rounded-md max-w-xs mx-auto" />
             </div>
             <div className="flex-1 flex gap-4 mt-2">
               <div className="w-1/3 bg-slate-800/50 rounded-lg p-3 flex flex-col gap-3">
                 <div className="h-4 bg-slate-700 rounded w-full" />
                 <div className="h-4 bg-slate-700 rounded w-3/4" />
                 <div className="h-4 bg-slate-700 rounded w-5/6" />
                 <div className="h-4 bg-indigo-600/50 rounded w-full mt-4" />
               </div>
               <div className="flex-1 bg-slate-800/30 rounded-lg p-5 flex flex-col gap-5 justify-end group-hover:bg-slate-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="h-3 bg-slate-600 rounded w-1/4" />
                      <div className="h-4 bg-slate-700 rounded w-3/4" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                      <Gamepad2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <div className="h-3 bg-slate-600 rounded w-1/3" />
                      <div className="h-4 bg-slate-700 rounded w-1/2" />
                    </div>
                  </div>
               </div>
             </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Create an invite-only place where you belong</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
          </p>
        </div>
      </section>

      {/* Feature 2 (Zig-zag left) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 bg-slate-900/40 rounded-[3rem] border border-white/5">
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
          <div className="relative aspect-square max-w-md mx-auto bg-slate-800/80 border border-white/10 rounded-full shadow-2xl flex items-center justify-center backdrop-blur-sm group">
            <div className="absolute inset-10 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors" />
            <Mic className="w-32 h-32 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
            
            {/* Fake voice avatars */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-indigo-500 rounded-full shadow-lg border-2 border-slate-800 flex items-center justify-center animate-bounce delay-100">
              <span className="text-xs font-bold">J</span>
            </div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-500 rounded-full shadow-lg border-2 border-slate-800 flex items-center justify-center animate-bounce delay-300">
              <span className="text-sm font-bold">A</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Where hanging out is easy</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.
          </p>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Reliable tech for staying close</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { icon: <Zap className="w-8 h-8 text-amber-400" />, title: "Lightning Fast", desc: "Optimized global infrastructure ensures your messages and voice drops reach instantly." },
            { icon: <Shield className="w-8 h-8 text-emerald-400" />, title: "Secure & Safe", desc: "Built-in moderation tools and secure encryption keep your communities safe." },
            { icon: <MessageSquare className="w-8 h-8 text-cyan-400" />, title: "Crystal Clear", desc: "Experience high-definition voice and video with AI-powered noise cancellation." }
          ].map((feature, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-slate-800 transition-colors group">
              <div className="w-16 h-16 bg-slate-800 border border-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:rotate-6 transition-transform shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-[100%] translate-y-1/2 scale-150 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20 p-12 md:p-20 rounded-[3rem] backdrop-blur-md shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to start your journey?</h2>
          <Link to="/register" className="inline-block px-10 py-5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-full transition-all shadow-xl shadow-indigo-500/25 text-lg hover:scale-105 active:scale-95">
            Download for Windows
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 px-6 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Gamepad2 className="w-8 h-8 text-indigo-500" />
              <span className="text-2xl font-bold tracking-tight">WePlay</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              The ultimate place to talk, hang out, and stay close with your friends and communities.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-indigo-400 mb-6 uppercase text-sm tracking-wider">Product</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/download" className="hover:text-white transition-colors">Download</Link></li>
              <li><Link to="/nitro" className="hover:text-white transition-colors">Nitro</Link></li>
              <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
              <li><Link to="/app/explore" className="hover:text-white transition-colors">App Directory</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-400 mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/jobs" className="hover:text-white transition-colors">Jobs</Link></li>
              <li><Link to="/branding" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link to="/newsroom" className="hover:text-white transition-colors">Newsroom</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-400 mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/safety" className="hover:text-white transition-colors">Safety</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold text-indigo-400 mb-6 uppercase text-sm tracking-wider">Policies</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/guidelines" className="hover:text-white transition-colors">Guidelines</Link></li>
              <li><Link to="/licenses" className="hover:text-white transition-colors">Licenses</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WePlay. All rights reserved. Let's play together.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/register" className="px-5 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
              Sign Up Let's Go
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
