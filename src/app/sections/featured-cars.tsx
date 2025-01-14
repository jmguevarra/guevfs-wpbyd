"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      <div className="container mx-auto h-full">
        <div className="featured-content flex h-full justify-end flex-col">
          <div className="featured-heading">
            <h2
              className="mb-4 not-prose text-white text-5xl font-black self-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {car.title.rendered}
            </h2>
          </div>
          <div className="featured-specs">
            <p>Hi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
