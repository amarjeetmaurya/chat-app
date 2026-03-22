import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/auth/SocialLogin";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const location = useLocation();
  const [loginMethod, setLoginMethod] = useState<"google" | "email">("google");

  let headingText = "";
  if (location.pathname === "/login") {
    headingText = "Welcome Back 👋";
  } else if (location.pathname === "/register") {
    headingText = "Create Your Account ✨";
  }

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const observer = new ResizeObserver((entries) => {
  //     const newWidth = entries[0].contentRect.width;
  //     setWidth(newWidth);
  //   });

  //   observer.observe(containerRef.current);

  //   return () => observer.disconnect();
  // }, []);

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
    <div className="grid sm:grid-cols-[340px] p-10 sm:justify-center ">
      <div className="text-center text-title">
        <h1 className="text-xl xl:text-2xl font-unbounded mb-12">
          {headingText}
        </h1>

        <div>
          {loginMethod == "google" ? (
            <SocialLogin setLoginMethod={setLoginMethod} />
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="grid gap-3 mb-3">
                {error && <div className="text-sm text-red-600">{error}</div>}

                <div className="grid gap-3 mb-3">
                  {/* Email */}
                  <label className="block">
                    <span className="text-md font-medium text-gray-700">
                      Email
                    </span>
                    <div className="relative flex items-center bg-white">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full border-2 border-border p-2 rounded-md text-title font-semibold focus:border-title transition"
                      />
                      <i className="ri-mail-line absolute right-5 text-xl text-title"></i>
                    </div>
                  </label>

                  {/* Password */}
                  <label className="block">
                    <div className="flex justify-between items-center">
                      <span className="text-md font-medium text-gray-700">
                        Password
                      </span>
                      <Link
                        to="/forgot"
                        className="text-xs text-indigo-600 hover:underline"
                      >
                        Forgot?
                      </Link>
                    </div>
                    <div className="relative flex items-center bg-white">
                      <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        placeholder="••••••••"
                        className="w-full border-2 border-border p-2 rounded-md text-title font-semibold focus:border-title transition"
                      />
                      <i className="ri-eye-line absolute right-5 text-xl text-title cursor-pointer"></i>
                    </div>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full p-3 rounded-md font-semibold bg-blue-500 text-white hover:shadow-[0_8px_24px_rgba(0,20,205,0.4)] transition disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Log In"}
                </button>
              </form>

              <p className="text-sm text-center text-gray-500">
                New here?{" "}
                <Link
                  to="/register"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          )}
        </div>

        {/* <OtpInp  */}
      </div>
    </div>
  );
};

export default Login;
