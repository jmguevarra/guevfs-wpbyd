"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";

const LastestCars = () => {
  const { cars, page } = useWPContext();
  const lastestCars = cars?.slice(
    0,
    page.acf?.page_settings.no_of_lastest_cars ?? 1
  );

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section latest-section">
      <div className="container mx-auto">
        <h2 className="mb-6">Latest Cars</h2>
        <div className="latest-cars grid grid-cols-3 gap-4">
          {lastestCars.map((car: CarPostType, index: number) => (
            <div key={car.id} className="latest-car">
              <img
                className="w-full mb-3 h-60 object-cover object-center"
                src={car.featured_image_url}
                alt={car.title.rendered}
              />
              <div className="latest-contet">
                <h3>{car.title.rendered}</h3>
                <p>{car.excerpt}</p>
                <a href={car.link} className={`wp-btn latest-btn-${index}`}>
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
