"use client";

import WPContext from "@/context/wp-context";
import { MESSAGE_STATUSES } from "@/enums/statuses.enum";
import { CarPostType } from "@/types/car-post-type";
import { IMenu } from "@/types/imenus";
import { Notifier } from "@/types/notifier";
import { PagePostType } from "@/types/page-post-type";
import React, { useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [cars, setCars] = useState<CarPostType[]>([]);
  const [page, setPage] = useState<PagePostType>({} as PagePostType);
  const [notifier, setNotifier] = useState<Notifier>({} as Notifier);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [menus, setMenus] = useState<IMenu[]>([]);

  //get Page settings - It could be optimize in future
  useEffect(() => {
    //switching different enviro
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "staging"
        ? process.env.NEXT_PUBLIC_WORDPRESS_API_URL
        : process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const fetchPageSettings = async () => {
      try {
        const response = await fetch(`${apiUrl}/v2/pages/47`, {
          //right now its static to save time -- Note change it and create auth
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setPage(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Page settings in the ${apiUrl}/wp-json/wp/v2/pages/47`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      }
    };

    fetchPageSettings();
  }, []);

  //get all the cars - It could be optimized
  useEffect(() => {
    //switching different enviro
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "staging"
        ? process.env.NEXT_PUBLIC_WORDPRESS_API_URL
        : process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const fetchCars = async () => {
      try {
        const response = await fetch(`${apiUrl}/wp/v2/cars`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Cars in the ${apiUrl}/byd/wp-json/wp/v2/cars`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      }
    };

    fetchCars();
  }, []);

  //get WP Menus - It could be optimize in future
  useEffect(() => {
    //switching different enviro
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "staging"
        ? process.env.NEXT_PUBLIC_WORDPRESS_API_URL
        : process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

    const fetchMenus = async () => {
      try {
        const response = await fetch(`${apiUrl}/guevfs-api/v1/menus`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setMenus(data);
        console.log(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Menus in the ${apiUrl}/wp-json/guevfs-api/v1/menus`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return (
    <WPContext.Provider
      value={{
        loading,
        setLoading,
        page,
        setPage,
        cars,
        setCars,
        notifier,
        setNotifier,
        isModalOpen,
        setIsModalOpen,
        modalContent,
        setModalContent,
        menus,
        setMenus,
      }}
    >
      {children}
    </WPContext.Provider>
  );
};

export default AppProvider;
