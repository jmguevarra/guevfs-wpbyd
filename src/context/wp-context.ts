import { MESSAGE_STATUSES } from "@/enums/statuses.enum";
import { IWPContext } from "@/types/iwp-context";
import { PagePostType } from "@/types/page-post-type";
import React from "react";

//create context and export it
const WPContext = React.createContext<IWPContext>({
    loading: false,
    setLoading: () => {},
    page: {} as PagePostType,
    setPage: ()=> {},
    cars: [],
    setCars: ()=> {},
    notifier: {
        message: "",
        status: MESSAGE_STATUSES.NONE,
        data: []
    },
    setNotifier: ()=> {},
    isModalOpen: false,
    setIsModalOpen: () => {},
    modalContent: null,
    setModalContent: () => {}
});

export default WPContext;

