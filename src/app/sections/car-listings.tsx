"use client";

import { CarPostType } from "@/types/car-post-type";
import CarDetails from "../components/car-post-type/car-details";
import useWPContext from "@/hooks/usewpcontext";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiMenuSearchLine } from "react-icons/ri";

const CarListings = () => {
  const { cars, setIsModalOpen, setModalContent } = useWPContext();
  const [localCars, setLocalCars] = useState<CarPostType[]>([]); //get a copy of cars to filter locally
  const [searchedText, setSearchedText] = useState("");

  useEffect(() => {
    setLocalCars(cars);
  }, [cars]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //set value
    const value = e.target.value.toLowerCase();
    setSearchedText(value);

    //filtered and passed searched text
    const filteredCars = cars.filter((car: CarPostType) => {
      return car.title.rendered.toLowerCase().includes(value);
    });
    setLocalCars(filteredCars);
  };

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
        <div className="section-header mb-14 flex flex-wrap justify-between items-center">
          <h2
            className="mb-2 md:mb-0"
            data-aos="fade-right"
            data-aos-delay={200}
          >
            Car Listings
          </h2>
          <div className="input-search-field w-full md:w-auto relative">
            <label className="text-white">
              <span className="mb-1 text-xs inline-block">Search:</span>
              <input
                className="block lg:max-w-64 ps-8 pe-2 py-1 rounded-md text-black"
                type="text"
                value={searchedText}
                onChange={handleChange}
                placeholder="Type something..."
              />
              <RiMenuSearchLine className="text-xl text-black absolute left-1 bottom-[7px]" />
            </label>
          </div>
        </div>
        {localCars.length > 0 ? (
          <>
            <div className="listing-cars grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
              {localCars.map((car: CarPostType, index: number) => (
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
          </>
        ) : (
          <div className="w-auto">
            <p className="m-0 w-full text-yellow-400 text-1xl block text-center">
              No cars found. Try another keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarListings;
