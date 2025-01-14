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

  //get Page settings
  useEffect(() => {
    const fetchPageSettings = async () => {
      try {
        const response = await fetch(
          `http://localhost/byd/wp-json/wp/v2/pages/47`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setPage(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Page settings in the http://localhost/byd/wp-json/wp/v2/pages/47`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      }
    };

    fetchPageSettings();
  }, []);

  //get all the cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(
          `http://localhost/byd/wp-json/wp/v2/cars`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Cars in the http://localhost/byd/wp-json/wp/v2/cars`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      }
    };

    fetchCars();
  }, []);

  //get WP Menus
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(
          `http://localhost/byd/wp-json/guevfs-api/v1/menus`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setMenus(data);
        console.log(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Menus in the hhttp://localhost/byd/wp-json/guevfs-api/v1/menus`,
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
