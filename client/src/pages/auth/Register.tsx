import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpForm from "../../components/auth/OtpForm";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "Amarjeet",
    email: "amarjeet@gmail.com",
    password: "1234",
  });

  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const [serverError, setServerError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isSuccess, setIsSuccess] = useState(false);
  const [canResend, setCanResend] = useState(false);

  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const submitCredentials = async (
    e: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setServerError("");

    console.log(formData);

    try {
      const response = await fetch(`${BASE_URL}/auth/otp/request`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setServerError(data.message || "Registration failed");
        return;
      }

      setStep(2);
      setCountdown(60);
      setCanResend(false);
    } catch (error) {
      console.error(error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    console.log({ otp });

    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setServerError("Please enter the complete 6-digit code");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/otp/verify`, {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          otp: otpString,
          purpose: "SIGNUP",
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setServerError(data.message || "Verification failed");
        return;
      }

      const response2 = await fetch(`${BASE_URL}/auth/signup/complete`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.otpSessionToken}`,
        },
        credentials: "include",
      });

      const data2 = await response2.json();

      if (!response2.ok) {
        setServerError(data2.message || "Registration failed");
        return;
      }

      setIsSuccess(true);
      setTimeout(() => {
        navigate("/app/explore");
      }, 1500);
    } catch (error) {
      console.error(error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    // const newOtp = [...otp];
    const newOtp = [...otp] as [string, string, string, string, string, string];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // Countdown timer effect
  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, countdown]);

  return (
    <div className="space-y-6 max-w-full">
      {step == 1 ? (
        <div>
          <form onSubmit={submitCredentials} className="grid gap-3 mb-3">
            <div className="grid gap-3 mb-3">
              {/* Username */}
              <label className="block">
                <span className="text-md font-medium text-gray-700">
                  Username
                </span>
                <div className="relative flex items-center bg-white">
                  <input
                    type="text"
                    name="username"
                    required
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    placeholder="yourname"
                    className="w-full border-2 border-border p-2 rounded-md text-title font-semibold focus:border-title transition"
                  />
                  <i className="ri-user-line absolute right-5 text-xl text-title"></i>
                </div>
              </label>

              {/* Email */}
              <label className="block">
                <span className="text-md font-medium text-gray-700">Email</span>
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
                  <span className="text-xs text-gray-400">
                    min 8 characters
                  </span>
                </div>
                <div className="relative flex items-center bg-white">
                  <input
                    type="password"
                    name="password"
                    required
                    minLength={8}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Create a password"
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
              className="w-full p-3 rounded-md font-semibold bg-red-500 text-white hover:bg-red-700 transition disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
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
      ) : (
        <div>
          <OtpForm
            formData={formData}
            otp={otp}
            handleOtpChange={handleOtpChange}
            handleOtpKeyDown={handleOtpKeyDown}
            handleSubmit={handleSubmit}
            serverError={serverError}
            isSuccess={isSuccess}
            canResend={canResend}
            countdown={countdown}
            submitCredentials={submitCredentials}
            setStep={setStep}
            setOtp={setOtp}
            setCountdown={setCountdown}
            setCanResend={setCanResend}
            flowType="registration" // 👈 Important
          />
        </div>
      )}

      {/* <p className="text-sm text-center text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-indigo-600 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p> */}
    </div>
  );
};

export default Register;
