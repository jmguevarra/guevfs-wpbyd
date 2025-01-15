import { PiEngineFill } from "react-icons/pi";
import { MdDiscount, MdElectricBolt } from "react-icons/md";
import { priceFormat } from "@/utils/formatter";
import { calcDiscoutInCurrency } from "@/utils/discounts";
import Image from "next/image";
import { CarPostType } from "@/types/car-post-type";
import useWPContext from "@/hooks/usewpcontext";
import CarDetails from "./car-details";
import { CTA_TEXT } from "@/constants/common-label";

interface props {
  index?: number;
  car: CarPostType;
  ctaText?: string;
}
const CarCard: React.FC<props> = ({ index, car, ctaText }) => {
  const { setIsModalOpen, setModalContent } = useWPContext();

  return (
    <>
      {" "}
      <div
        key={car.id}
        data-aos="fade-up"
        data-aos-delay={index ? (index + 1) * 50 : 100}
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
          {car.acf.promos.on_sale ? (
            <div className="discounted-banner">
              <MdDiscount className="text-white me-2 text-lg" />
              <p className="m-0 text-sm">{`Sale with ${car.acf.promos.discount}% off!`}</p>
            </div>
          ) : null}
        </div>

        <div className="listing-contet bg-white px-4 pt-5 pb-7 text-secondary">
          <h3 className="text-black mb-0">{car.title.rendered}</h3>
          <div className="sub-specs flex items-center mb-3">
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
                <span className="old-price opacity-0">
                  {priceFormat(car.acf.specifications.price)}
                </span>
                <h4 className="price--text m-0 text-2xl font-black text-blue-700">
                  {priceFormat(car.acf.specifications.price)}
                </h4>
              </>
            )}
          </div>
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
            {ctaText ?? CTA_TEXT}
          </a>
        </div>
      </div>
    </>
  );
};

export default CarCard;
