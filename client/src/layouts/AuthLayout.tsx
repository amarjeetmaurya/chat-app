// src/layouts/AuthLayout.tsx
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Illustration / branding */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-500 text-white p-8">
          <div className="text-4xl font-extrabold mb-4">YourApp</div>
          <p className="text-sm opacity-90 max-w-xs text-center">
            Connect with communities, chat in real time, and manage servers effortlessly.
          </p>
          <div className="mt-6 w-full">
            <img
              src="/auth-illustration.svg"
              alt="illustration"
              className="w-full h-auto opacity-95"
            />
          </div>
        </div>

        {/* Card */}
        <div className="p-8">
          <header className="mb-6">
            <Link to="/" className="inline-block text-indigo-600 font-semibold">
              ← Back to Home
            </Link>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Welcome back</h2>
            <p className="text-sm text-gray-500 mt-1">Sign in to continue to YourApp</p>
          </header>

          <main>
            <Outlet />
          </main>

          <footer className="mt-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} YourApp. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
