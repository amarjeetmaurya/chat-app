import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "./apis/loginWithGoogle";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: call register API
      await new Promise((r) => setTimeout(r, 800));
      navigate("/app/explore");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">
        Create your account
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm text-gray-700">Username</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="yourname"
          />
          3
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Password</span>
            <span className="text-xs text-gray-400">min 8 characters</span>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            minLength={8}
            className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Create a password"
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-emerald-600 text-white rounded-md font-medium hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);
          const idToken = credentialResponse.credential;

          if (!idToken) {
            console.error("No credential received");
            return;
          }
          const data = await loginWithGoogle(idToken);
          if (data.error) {
            console.log(data);
            return;
          }
          navigate("/");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
      ;
      <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
