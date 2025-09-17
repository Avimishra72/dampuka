"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between bg-white text-black fixed w-full top-0 left-0 z-999 shadow-md h-[80px]">
        <div className="container mx-auto flex items-center justify-between h-[80px] px-4">
          <div className="flex items-center gap-10">
            <h1 className="text-2xl font-bold">DAMPUKA</h1>
            <nav>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Buy Now
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <FaUser />
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-[80px]">
        {/* Banner Starts */}
        <section className="relative w-full h-[calc(100vh-80px)]">
          <div className="w-full h-full absolute top-0 left-0">
            <img
              src="../assets/bg.jpeg"
              className="w-full h-full object-cover object-right"
              alt=""
            />
          </div>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="bg-black/10 backdrop-blur-md p-8 max-w-[440px]">
              <h2 className="text-6xl leading-[1.1] font-bold mb-8 drop-shadow-lg text-white">
                Welcome to <br /> DAMPUKA
              </h2>
              <p className="mb-8 text-white text-2xl">
                Discover the best products and services tailored for you.
              </p>
              <button className="bg-white text-black px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold">Discover NEW Arrivals</h2>
            </div>

            <div className="flex gap-x-3 gap-y-10 flex-wrap mb-5">
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
              <div className="w-[calc(25%-12px)]">
                <div className="w-full h-[300px] mb-3">
                  <img
                    src="../assets/product.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Product Title</h3>
                  <p className="text-gray-600">$99.99</p>
                </div>
              </div>
            </div>
            <button className="bg-[#024E82] border border-[#024E82] mx-auto flex text-white px-4 py-2 cursor-pointer hover:bg-white hover:text-[#024E82] transition duration-300">
              Shop Now
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold">About Us</h2>
            </div>
            <div className="flex justify-between items-center gap-10 max-w-5xl mx-auto">
              <div className="relative w-[400px] h-[600px] flex items-center justify-center">
                <div className="w-[400px] h-[400px] relative z-10">
                  <img
                    src="../assets/product-wbg.png"
                    className="w-full h-auto object-contain"
                    alt="About Us"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full aspect-[1/3] rounded-full bg-[#024E82]"></div>
              </div>

              <div className="flex-1 max-w-[600px]">
                <p className="mb-4 text-lg">
                  At Dampuka, we are committed to providing top-quality products
                  that enhance your lifestyle. Our curated selection ensures
                  that you find exactly what you need, whether it's for everyday
                  use or special occasions.
                </p>
                <ul>
                  <li className="mb-2">- High-quality products</li>
                  <li className="mb-2">- Exceptional customer service</li>
                  <li className="mb-2">- Fast and reliable shipping</li>
                  <li className="mb-2">- Satisfaction guaranteed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold">What Our Customers Say</h2>
            </div>
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Footer Starts */}
      </main>
    </>
  );
}
