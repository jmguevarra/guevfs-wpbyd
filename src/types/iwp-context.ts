import { Dispatch, SetStateAction } from "react";
import { PagePostType } from "./page-post-type";
import { CarPostType } from "./car-post-type";
import { Notifier } from "./notifier";
import { IMenu } from "./imenus";


export interface IWPContext {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
    page: PagePostType,
    setPage: Dispatch<SetStateAction<PagePostType>>,
    cars: CarPostType[],
    setCars: Dispatch<SetStateAction<CarPostType[]>>,
    notifier: Notifier,
    setNotifier: Dispatch<SetStateAction<Notifier>>,
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    modalContent: React.ReactNode,
    setModalContent: Dispatch<SetStateAction<React.ReactNode>>
    menus: IMenu[],
    setMenus:  Dispatch<SetStateAction<IMenu[]>>
}
  