"use client";

import useWPContext from "@/hooks/usewpcontext";
import { IMenuItem } from "@/types/imenus";
import Image from "next/image";
import { Fragment, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { menus } = useWPContext();
  const [menuIsOpen, setMenuOpen] = useState<boolean>(false);

  if (!menus) return null;

  return (
    <header className={`main-header py-4 md:py-7 ${menuIsOpen ? "!pb-2" : ""}`}>
      <div className="container mx-auto px-4 md:px-5">
        <div className="header-wrap flex justify-between items-center flex-wrap lg:flex-nowrap">
          <div className="logo-wrap">
            <a href="/" className="no-prose">
              <Image
                className="not-prose"
                src={"/images/byd-logo.png"}
                width={186}
                height={36}
                alt="Logo"
              ></Image>
            </a>
          </div>
          <div
            className="hamburger-menu lg:hidden"
            onClick={(e) => {
              setMenuOpen(!menuIsOpen);
            }}
          >
            {menuIsOpen ? (
              <IoCloseOutline className="text-3xl text-white" />
            ) : (
              <RxHamburgerMenu className="text-3xl text-white" />
            )}
          </div>
          <div
            className={`header-memu w-full lg:w-1/2  overflow-hidden lg:flex lg:justify-end lg:tems-center lg:space-x-4 ${
              !menuIsOpen ? "h-0 lg:h-auto" : "h-auto pt-4"
            }`}
          >
            <h4 className={`${menuIsOpen ? "block text-primary" : "hidden"}`}>
              Menu
            </h4>
            {menus.length > 0
              ? menus[0].items.map((item: IMenuItem, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div
                        className={`menu-item ${
                          menuIsOpen ? "sm-active-menu" : ""
                        }`}
                      >
                        <a className="menu-item--link" href={item.url}>
                          {item.title}
                        </a>
                      </div>
                    </Fragment>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
