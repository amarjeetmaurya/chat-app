// src/layouts/AuthLayout.tsx
import { GoogleLogin } from "@react-oauth/google";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../apis/loginWithGoogle";
import { useEffect, useRef, useState } from "react";

// const AuthLayout = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg sm:rounded-2xl rounded-lg overflow-hidden">
//         {/* Illustration / branding */}
//         <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-violet-500 text-white p-8">
//           <div className="text-4xl font-extrabold mb-4">YourApp</div>
//           <p className="text-sm opacity-90 max-w-xs text-center">
//             Connect with communities, chat in real time, and manage servers effortlessly.
//           </p>
//           <div className="mt-6 ">
//             <img
//               src="/auth-illustration.svg"
//               alt="illustration"
//               className="w-full h-auto opacity-95"
//             />
//           </div>
//         </div>

//         {/* Card */}
//         <div className="p-8">
//           <header className="mb-6">
//             <Link to="/" className="inline-block text-indigo-600 font-semibold">
//               ← Back to Home
//             </Link>
//             <h2 className="mt-4 text-2xl font-bold text-gray-800">Welcome back</h2>
//             <p className="text-sm text-gray-500 mt-1">Sign in to continue to YourApp</p>
//           </header>

//           <main>
//             <Outlet />
//           </main>

//           <footer className="mt-6 text-center text-xs text-gray-400">
//             © {new Date().getFullYear()} YourApp. All rights reserved.
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";

const AuthLayout = () => {
  const [width, setWidth] = useState(300);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  let headingText = "";
  if (location.pathname === "/login") {
    headingText = "Welcome Back 👋";
  } else if (location.pathname === "/register") {
    headingText = "Create Your Account ✨";
  }

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
    <div className="h-screen xl:place-items-center grid">
      <div className="grid bg-white items-center xl:grid-cols-[592px_340px] xl:gap-20 xl:w-277.5 xl:h-162.5 xl:bg-body xl:shadow-[0_0_24px_rgba(0,0,0,0.15)] xl:p-3 xl:rounded-[3rem]">
        {/* Swiper Section */}
        <div className="hidden xl:block overflow-hidden h-full relative rounded-[2.5rem]">
          {/* Top text */}
          <div className="absolute top-22 left-12 text-white z-10">
            <p className="text-sm font-semibold mb-2">Welcome Back</p>
            <h1 className="text-xl xl:text-2xl font-unbounded">
              Hello Developer,
              <br />
              Sign In To Get Started
            </h1>
          </div>

          {/* Bottom social links */}
          <div className="absolute left-12 bottom-16 -e z-10">
            <p className="text-sm font-semibold mb-2">Our Social Media</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/bedimcode/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:-translate-y-1 transition-transform"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>
              <a
                href="https://www.instagram.com/bedimcode/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:-translate-y-1 transition-transform"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://x.com/bedimcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:-translate-y-1 transition-transform"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:-translate-y-1 transition-transform"
              >
                <i className="ri-dribbble-fill"></i>
              </a>
              <a
                href="https://github.com/bedimcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:-translate-y-1 transition-transform"
              >
                <i className="ri-github-line"></i>
              </a>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-[2.5rem]"
          >
            <SwiperSlide>
              <img
                src={img1}
                alt="image1"
                className="w-148 object-cover rounded-[2.5rem]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="image2"
                className="w-148 object-cover rounded-[2.5rem]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="image3"
                className="w-148 object-cover rounded-[2.5rem]"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Login Area */}
        <div className="grid sm:grid-cols-[340px] sm:justify-center ">
          <div className="text-center text-title">
            <h1 className="text-xl xl:text-2xl font-unbounded mb-12">
              {headingText}
            </h1>

            {/* <p className="text-sm mb-4">Please enter your details.</p> */}

            <div ref={containerRef} className="p-1 rounded-md bg-gray-800 ">
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
                width={width}
              />
            </div>
          </div>

          <span className="relative justify-self-center font-semibold text-title my-6 before:content-[''] before:absolute before:w-24 before:h-px before:bg-border before:right-6 after:content-[''] after:absolute after:w-24 after:h-px after:bg-border after:left-6">
            or
          </span>

          {/* <LoginForm /> */}
          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
