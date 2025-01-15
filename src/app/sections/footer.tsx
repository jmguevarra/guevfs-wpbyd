"use client";

const Footer = () => {
  return (
    <>
      <footer className="main-foote py-6 dark:text-gray-300">
        <div className="text-center">
          <p className="m-0 text-sm">
            &copy; {new Date().getFullYear()} Guevfs-WPBYD. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
