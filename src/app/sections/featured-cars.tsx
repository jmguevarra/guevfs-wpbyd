"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";
import { priceFormat } from "@/utils/formatter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { PiEngineFill } from "react-icons/pi";

const FeaturedCars = () => {
  const { cars } = useWPContext();
  const featuredCars =
    cars?.filter((car: CarPostType) => car.acf.car_post_options.is_featured) ||
    [];

  const car = featuredCars[0];

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  //return if no cars
  if (cars.length < 1) {
    return null;
  }

  return (
    <div
      className="wp-section bg-secondary sec-py h-svh bg-no-repeat relative bg-cover bg-center bg-fixed featured-section"
      style={{
        backgroundImage: `url(${car.featured_image_url})`,
      }}
    >
      <div className="featured-overlay bg-black bg-gradient-to-b  from-transparent to-black opacity-80  w-full h-full absolute left-0 top-0"></div>
      <div className="container mx-auto h-full px-4 md:px-5 relative z-50">
        <div className="featured-content flex h-full justify-end flex-col">
          <div
            className="featured-heading"
            data-aos="fade-down"
            data-aos-delay={200}
          >
            <h2 className="not-prose mb-0 text-white text-5xl lg:text-7xl font-black self-center">
              {car.title.rendered}
            </h2>
            <div className="icon-list mb-7">
              <div className="icon-list flex items-center mt-2">
                <PiEngineFill className="text-primary text-xl lg:text-2xl me-3" />
                <span className="engine-size--text text-white text-sm lg:text-lg ">
                  {car.acf.specifications.engine_size}
                </span>
              </div>
              <div className="icon-list flex items-center mt-2">
                <BiSolidDollarCircle className="text-primary text-xl lg:text-2xl me-3" />
                <span className="price--text text-white text-sm lg:text-lg ">
                  {priceFormat(car.acf.specifications.price)}
                </span>
              </div>
            </div>
            <a
              href={car.link}
              className={`wp-btn btn-primary hover:drop-shadow-2xl`}
            >
              View Details
            </a>
          </div>
          <div className="featured-specs"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
