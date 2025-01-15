"use client";

import { CarPostType } from "@/types/car-post-type";
import { calcDiscoutInCurrency } from "@/utils/discounts";
import { priceFormat } from "@/utils/formatter";
import { GiCarSeat } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";

interface props {
  car: CarPostType;
}

const CarDetails: React.FC<props> = ({ car }) => {
  //return if no car
  if (!car)
    return (
      <>
        <div className="text-sm">No data show</div>
      </>
    );

  const { promos } = car.acf;

  return (
    <>
      <div className={`car-details ${promos.on_sale ? "on-sale" : ""}`}>
        <div className="heading">
          <h3 className="mb-0 text-black">{car.title.rendered}</h3>
        </div>
        <div className="car-other-details">
          <div className="specs-engine flex items-center mb-3">
            <div className="specs--model flex items-center text-xs">
              <MdElectricBolt className="text-black me-2" />
              <span className="model--text text-black">
                {car.acf.specifications.model}
              </span>
            </div>
            <span className="inline-block mx-3"> | </span>
            <div className="specs--model flex items-center text-xs">
              <PiEngineFill className="text-black me-2" />
              <span className="model--text text-black">
                {car.acf.specifications.engine_size}
              </span>
            </div>
          </div>
          <div className="specs--pricing">
            {car.acf.promos.on_sale ? (
              <>
                <span className="old-price text-xs line-through">
                  {priceFormat(car.acf.specifications.price)}
                </span>
                <h4 className="price--text m-0 text-2xl font-black text-blue-700">
                  {calcDiscoutInCurrency(
                    car.acf.specifications.price,
                    car.acf.promos.discount
                  )}
                </h4>
              </>
            ) : (
              <>
                <h4 className="price--text m-0 text-3xl font-black text-blue-700">
                  {priceFormat(car.acf.specifications.price)}
                </h4>
              </>
            )}
          </div>
          <hr className="my-2"></hr>
          <div className="specs-seats">
            <label className="text-black text-xs mt-2">No. of Seats:</label>
            <div className="flex-ycenter text-black">
              <GiCarSeat className="me-2 " />
              <span className="seat-no--value">
                {car.acf.specifications.no_of_seats}
              </span>
            </div>
          </div>
          <div className="specs-year">
            <label className="text-black text-xs mt-2">Year:</label>
            <div className="flex-ycenter text-black">
              <span className="seat-no--value">
                {car.acf.specifications.year_of_manufacture}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
