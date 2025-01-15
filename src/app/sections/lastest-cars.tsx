"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LastestCars = () => {
  const { cars, page } = useWPContext();
  const lastestCars = cars?.slice(
    0,
    page.acf?.page_settings.no_of_lastest_cars ?? 1
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
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              className={` group latest-car overflow-hidden ${
                [0, 2].includes(index) ? "mt-8" : ""
              }`}
            >
              <div
                className={`next-image-wrapper w-full h-60 relative transition-transform duration-700 group-hover:scale-105`}
              >
                <Image
                  className="object-cover object-center m-0"
                  width={0}
                  height={0}
                  layout="fill"
                  src={car.featured_image_url}
                  alt={car.title.rendered}
                  unoptimized
                ></Image>
              </div>

              <div className="latest-contet bg-white px-4 pt-5 pb-7  rounded-b-xl overflow-hidden text-secondary">
                <h3 className="text-black mb-2">{car.title.rendered}</h3>
                <p className="text-black mb-2 lg:mb-3 md:min-h-[104px] lg:min-h-[84px]">
                  {car.excerpt}
                </p>
                <a
                  href={car.link}
                  className={`wp-btn btn-primary`}
                  id={`latest-btn-${index}`}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastestCars;
