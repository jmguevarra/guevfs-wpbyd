"use client";

import useWPContext from "@/hooks/usewpcontext";
import { CarPostType } from "@/types/car-post-type";
import Image from "next/image";

const FeaturedCars = () => {
  const { cars } = useWPContext();
  const featuredCars =
    cars?.filter((car: CarPostType) => car.acf.car_post_options.is_featured) ||
    [];

  if (cars.length < 1) {
    return null;
  }

  return (
    <div className="wp-section sec-py featured-section">
      <div className="container mx-auto">
        <h2 className="mb-6">Featured Cars</h2>
        <div className="featured-cars grid grid-cols-3 gap-4">
          {featuredCars.map((car: CarPostType, index: number) => (
            <div key={car.id} className="featured-car">
              <div className="next-image-wrapper mb-3 w-full h-60 relative">
                <Image
                  className="object-cover object-center"
                  width={0}
                  height={0}
                  layout="fill"
                  src={car.featured_image_url}
                  alt={car.title.rendered}
                  unoptimized
                ></Image>
              </div>

              <div className="featured-contet">
                <h3>{car.title.rendered}</h3>
                <p>{car.excerpt}</p>
                <a href={car.link} className={`wp-btn featured-btn-${index}`}>
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

export default FeaturedCars;
