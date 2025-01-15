"use client";

import { CarPostType } from "@/types/car-post-type";
import CarDetails from "../components/car-post-type/car-details";
import useWPContext from "@/hooks/usewpcontext";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const CarListings = () => {
  const { cars, setIsModalOpen, setModalContent } = useWPContext();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section bg-secondary sec-py listing-section">
      <div className="container mx-auto px-4 md:px-5">
        <h2
          className="mb-10 text-center"
          data-aos="fade-down"
          data-aos-delay={200}
        >
          Car Listings
        </h2>
        <div className="listing-cars grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
          {cars.map((car: CarPostType, index: number) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 50}
              className={` group listing-car  mb-6 md:mb-0 rounded-xl overflow-hidden`}
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

              <div className="listing-contet bg-white px-4 pt-5 pb-7 text-secondary">
                <h3 className="text-black mb-2">{car.title.rendered}</h3>
                <p className="text-black lg:min-h-[112px] md:min-h-[84px]">
                  {car.excerpt}
                </p>
                <a
                  href="#"
                  className={`wp-btn btn-primary`}
                  id={`listing-btn-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setModalContent(<CarDetails car={car} />);
                    setIsModalOpen(true);
                  }}
                >
                  See Specs
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListings;
