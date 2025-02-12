"use client";

// import { CarPostType } from "@/types/car-post-type";
// import SlickBasicSlider from "./components/sliders/slick-basic";
// import useWPContext from "@/hooks/usewpcontext";
import CarListings from "./sections/car-listings";
import FeaturedCars from "./sections/featured-cars";
import LastestCars from "./sections/lastest-cars";

const Home = () => {
  // const { cars, page } = useWPContext();

  // if (!cars || !page) return null;

  // const { no_of_cars_in_hero_carousel } = page.acf?.page_settings ?? [];

  // //get the first 4 Car images
  // const contents: {
  //   title: string;
  //   model: string;
  //   imageLink: string;
  //   pageUrl: string;
  // }[] = cars.slice(0, no_of_cars_in_hero_carousel).map((car: CarPostType) => {
  //   return {
  //     title: car.title.rendered,
  //     model: car.acf.specifications.model,
  //     imageLink: car.featured_image_url.replace(/\\/g, ""),
  //     pageUrl: car.link,
  //   };
  // });

  return (
    <>
      {/* <SlickBasicSlider contents={contents}></SlickBasicSlider> */}
      <FeaturedCars></FeaturedCars>
      <LastestCars></LastestCars>
      <CarListings></CarListings>
    </>
  );
};

export default Home;
