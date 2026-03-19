import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      navigate("/app/explore");
    } catch (err) {
      console.log(err);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Social login buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-md text-sm bg-white hover:shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21 12.3c0-.7-.1-1.4-.3-2H12v3.8h5.4c-.2 1.1-.9 2-1.9 2.6v2.1h3.1c1.8-1.6 2.8-4 2.8-6.5z" />
            <path d="M12 22c2.7 0 5-0.9 6.7-2.4l-3.1-2.1c-.9.6-2.1 1-3.6 1-2.8 0-5.2-1.9-6.1-4.5H2.6v2.8C4.3 19.9 7.9 22 12 22z" />
            <path d="M5.9 13.9A7.9 7.9 0 0 1 5.6 12c0-.6.1-1.2.3-1.8V7.4H2.6A11 11 0 0 0 1 12c0 1.6.4 3.1 1.1 4.4l3.8-2.5z" />
            <path d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 2.9 14.7 2 12 2 7.9 2 4.3 4.1 2.6 7.4l3.3 2.8C6.8 8 9.2 6.1 12 6.1z" />
          </svg>
          Continue with Google
        </button>

        <button
          type="button"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 border rounded-md text-sm bg-white hover:shadow-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 4.9 3.6 8.9 8.2 9.8v-6.9H8.1v-2.9h2.1V9.4c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9V21.8C18.4 20.9 22 16.9 22 12z" />
          </svg>
          Continue with Facebook
        </button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative text-center text-xs text-gray-500">or</div>
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-sm text-red-600">{error}</div>}

        <label className="block">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <Link to="/forgot" className="text-xs text-indigo-600 hover:underline">
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="text-sm text-center text-gray-500">
        New here?{" "}
        <Link to="/register" className="text-indigo-600 font-medium hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default Login;
