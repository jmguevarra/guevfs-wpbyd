import Image from "next/image";
import LoadingDots from "./loading-dots";

//Entrance Loader
const EntranceLoader = () => {
  return (
    <>
      <div className="w-svw h-svh flex justify-center items-center flex-col">
        <Image
          className="not-prose mb-10"
          src={"/images/byd-logo.png"}
          width={186}
          height={36}
          alt="Logo"
        ></Image>
        <LoadingDots></LoadingDots>
      </div>
    </>
  );
};

export default EntranceLoader;
