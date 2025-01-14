"use client";

import useWPContext from "@/hooks/usewpcontext";
import { IMenuItem } from "@/types/imenus";
import Image from "next/image";
import { Fragment } from "react";

const Header = () => {
  const { menus } = useWPContext();

  if (!menus) return null;

  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <header className="main-header py-3 md:py-7">
      <div className="container mx-auto px-4 md:px-5">
        <div className="header-wrap flex justify-between items-center">
          <div className="logo-wrap">
            <a href="#" className="no-prose">
              <Image
                className="not-prose"
                src={"/images/byd-logo.png"}
                width={186}
                height={36}
                alt="Logo"
              ></Image>
            </a>
          </div>
          <div className="header-memu flex justify-end items-center space-x-4">
            {menus.length > 0
              ? menus[0].items.map((item: IMenuItem, index: number) => {
                  return (
                    <Fragment key={index}>
                      <div className="menu-item">
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
