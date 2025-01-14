"use client";

import { CarPostType } from "@/types/car-post-type";
import CarDetails from "../components/car-post-type/car-details";
import useWPContext from "@/hooks/usewpcontext";

const CarListings = () => {
  const { cars, setIsModalOpen, setModalContent } = useWPContext();

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section listing-section">
      <div className="container mx-auto">
        <h2 className="mb-6">Car Listing</h2>
        <div className="listing-cars grid grid-cols-3 gap-4">
          {cars.map((car: CarPostType, index: number) => (
            <div
              key={car.id}
              className="listing-car"
              onClick={() => {
                setModalContent(<CarDetails car={car} />);
                setIsModalOpen(true);
              }}
            >
              <img
                className="w-full mb-3 h-60 object-cover object-center"
                src={car.featured_image_url}
                alt={car.title.rendered}
              />
              <div className="listing-contet">
                <h3>{car.title.rendered}</h3>
                <p>{car.excerpt}</p>
                <a href={car.link} className={`wp-btn listing-btn-${index}`}>
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

export default CarListings;
