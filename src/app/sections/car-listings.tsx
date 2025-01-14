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
      <div className="container mx-auto">
        <h2 className="mb-4" data-aos="fade-right" data-aos-delay={200}>
          Car Listings
        </h2>
        <p
          className="max-w-[560px] mb-10"
          data-aos="fade-right"
          data-aos-delay={200}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pulvinar ut nunc sed efficitur. Aenean ultrices luctus dui nec
          dignissim. Fusce sed turpis posuere, scelerisque eros quis, varius
          augue
        </p>
        <div className="listing-cars grid grid-cols-4 gap-6">
          {cars.map((car: CarPostType, index: number) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 50}
              className={` group listing-car rounded-xl overflow-hidden`}
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
                <p className="not-prose min-h-[84px]">{car.excerpt}</p>
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
