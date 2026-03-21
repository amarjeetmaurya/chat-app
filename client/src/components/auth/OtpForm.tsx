import { CheckCircle2 } from "lucide-react";

interface OtpFormProps {
  formData: {
    username?: string;
    email?: string;
    password?: string;
  };
  otp: string[];
  handleOtpChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  handleOtpKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  serverError: string | null;
  isSuccess: boolean;
  canResend: boolean;
  countdown: number;
  submitCredentials: (e: React.FormEvent<HTMLFormElement>) => void;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  setCountdown: React.Dispatch<React.SetStateAction<number>>;
  setCanResend: React.Dispatch<React.SetStateAction<boolean>>;
  flowType: "login" | "registration" | "forgot"; // adjust union type as needed
}

export default function OtpForm({
  formData,
  otp,
  handleOtpChange,
  handleOtpKeyDown,
  handleSubmit,
  serverError,
  isSuccess,
  canResend,
  countdown,
  submitCredentials,
  setStep,
  setOtp,
  setCountdown,
  setCanResend,
  flowType,
}: OtpFormProps) {
  // Decide button text based on flowType
  const buttonText = isSuccess ? (
    flowType === "registration" ? (
      <span className="flex items-center justify-center gap-2">
        <CheckCircle2 className="w-5 h-5" />
        Login Successful
      </span>
    ) : (
      <span className="flex items-center justify-center gap-2">
        <CheckCircle2 className="w-5 h-5" />
        Verified Successfully
      </span>
    )
  ) : flowType === "registration" ? (
    "Verify & Continue"
  ) : (
    "Verify Email"
  );

  return (
    <div className="bg-white rounded-xl  p-8">
      <div className="text-center mb-8">

        {/* <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Mail className="w-7 h-7 text-white" />
        </div> */}

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Verify it&#39;s you
        </h1>
        <p className="text-slate-600 text-sm">
          We sent a verification code to
          <br />
          <span className="font-semibold text-slate-900">{formData.email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3 text-center">
            Enter verification code
          </label>
          <div className="flex gap-2 justify-center">
            {otp.map((digit: string, index: number) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
                className="w-11 h-12 text-center text-lg font-semibold border-2 border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            ))}
          </div>
        </div>

        {serverError && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSuccess}
          className={`w-full py-2.5 rounded-md font-medium transition-colors ${
            isSuccess
              ? "bg-blue-400 text-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {buttonText}
        </button>

        <div className="text-center space-y-3">
          <button
            type="button"
            onClick={() => {
              if (canResend) {
                submitCredentials({ preventDefault: () => {} });
              }
            }}
            disabled={!canResend}
            className={`text-sm font-medium ${
              canResend
                ? "text-blue-600 hover:text-blue-700 cursor-pointer"
                : "text-slate-400 cursor-not-allowed"
            }`}
          >
            {canResend ? "Resend code" : `Resend code in ${countdown}s`}
          </button>
          <div>
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setOtp(["", "", "", "", "", ""]);
                setCountdown(60);
                setCanResend(false);
              }}
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              ← Back to login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
