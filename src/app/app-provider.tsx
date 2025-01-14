"use client";

import WPContext from "@/context/wp-context";
import { MESSAGE_STATUSES } from "@/enums/statuses.enum";
import { CarPostType } from "@/types/car-post-type";
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

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${WPData.apiUrl}/cars`, {
          headers: {
            "Content-Type": "application/json",
            "X-WP-Nonce": WPData.nonce,
          },
        });
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setNotifier({
          message: `Error on getting Cars in the ${WPData.apiUrl}/cars`,
          status: MESSAGE_STATUSES.WARNING,
          data: err,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
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
      }}
    >
      {children}
    </WPContext.Provider>
  );
};

export default AppProvider;
