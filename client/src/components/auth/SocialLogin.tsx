import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogle } from "../../apis/loginWithGoogle";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Mail, Apple } from "lucide-react";

interface SocialLoginProps {
  setLoginMethod?: React.Dispatch<React.SetStateAction<"google" | "email">>;
}

const SocialLogin = ({ setLoginMethod }: SocialLoginProps) => {
  const [width, setWidth] = useState(300);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      setWidth(newWidth);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-5 w5full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Real Google Login */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center bg-white rounded-sm border-gray-300 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      >
        <div className="pb-1 bg-black">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const idToken = credentialResponse.credential;
              if (!idToken) {
                console.error("No credential received");
                return;
              }
              const data = await loginWithGoogle(idToken);
              if (data.error) return;
              navigate("/app/explore");
            }}
            onError={() => console.log("Login Failed")}
            useOneTap
            theme="filled_black"
            shape="rectangular"
            text="continue_with"
            size="large"
            width={width}
          />
        </div>
      </div>
      {/* Dummy Apple Login */}
      <button
        type="button"
        className="w-full h-[40px] flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-[4px] font-medium transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
        onClick={() => console.log("Apple login clicked")}
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <Apple className="w-[18px] h-[18px] fill-current relative z-10 mb-1" />
        <span className="text-[14px] tracking-wide relative z-10">
          Continue with Apple
        </span>
      </button>
      {/* Dummy Facebook Login */}
      <button
        type="button"
        className="w-full h-[40px] flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-[4px] font-medium transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
        onClick={() => console.log("Facebook login clicked")}
      >
        <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <Facebook className="w-[18px] h-[18px] fill-current relative z-10" />
        <span className="text-[14px] tracking-wide relative z-10">
          Continue with Facebook
        </span>
      </button>
      {/* Divider */}
      <div className="flex items-center gap-3 my-2">
        <div className="h-px bg-gray-200 flex-1" />
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          or
        </span>
        <div className="h-px bg-gray-200 flex-1" />
      </div>
      {/* Login with Email */}
      <button
        type="button"
        className="w-full h-[40px] flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-[4px] font-medium transition-all shadow-sm hover:shadow-md relative overflow-hidden group"
        onClick={() => setLoginMethod && setLoginMethod("email")}
      >
        <div className="absolute inset-0 bg-black/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <Mail className="w-[18px] h-[18px] text-gray-500 relative z-10" />
        <span className="text-[14px] tracking-wide relative z-10">
          Continue with Email
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
