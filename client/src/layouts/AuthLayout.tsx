// src/layouts/AuthLayout.tsx

import { Outlet } from "react-router-dom";

// export default AuthLayout;
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";

const AuthLayout = () => {
  return (
    <div className="h-screen xl:place-items-center grid">
      <div className="grid overflow-hidden bg-white items-center xl:grid-cols-[512px_312px] xl:gap-20 xl:w-247.5 xl:h-148.5 xl:bg-body xl:shadow-[0_0_24px_rgba(0,0,0,0.15)]  xl:rounded-[3rem]">
        {/* Swiper Section */}
        <div className="hidden xl:block overflow-hidden h-full relative ">
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
          >
            <SwiperSlide>
              <img src={img1} alt="image1" className="w-lg object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="image2" className="w-lg object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="image3" className="w-lg object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* right side options  */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
