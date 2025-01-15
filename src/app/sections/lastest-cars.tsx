"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CarCard from "../components/car/car-card";

const LastestCars = () => {
  const { cars, page } = useWPContext();
  const lastestCars = cars?.slice(
    0,
    page.acf?.page_settings.no_of_lastest_cars ?? 3
  );

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section bg-black sec-py latest-section">
      <div className="container mx-auto px-4 md:px-5">
        <h2 className="mb-2 md:mb-4" data-aos="fade-right" data-aos-delay={200}>
          Latest Cars
        </h2>
        <p
          className="max-w-[560px]  md:5 lg:mb-10"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar ut nunc sed efficitur. Aenean ultrices luctus dui nec
          dignissim. Fusce sed turpis posuere, scelerisque eros quis, varius
          augue
        </p>
        <div className="latest-cars grid md:grid-cols-3 md:gap-4 lg:gap-8 lg:px-20 ">
          {lastestCars.map((car: CarPostType, index: number) => (
            <CarCard
              key={index}
              car={car}
              index={index}
              containerClass={`group latest-car overflow-hidden ${
                [0, 2].includes(index) ? "mt-8" : ""
              }`}
            ></CarCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastestCars;
