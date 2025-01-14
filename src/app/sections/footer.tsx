"use client";

const Footer = () => {
  return (
    <>
      <footer className="main-footer bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="m-0 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
