"use client";

import { CarPostType } from "@/types/car-post-type";
import useWPContext from "@/hooks/usewpcontext";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiMenuSearchLine } from "react-icons/ri";
import CarCard from "../components/car/car-card";

const CarListings = () => {
  const { cars } = useWPContext();
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
    <div className="wp-section bg-secondary sec-py listing-section min-h-svh">
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
                <CarCard
                  key={index}
                  car={car}
                  index={index}
                  ctaText="See Specs"
                ></CarCard>
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
