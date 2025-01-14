import { IWPContext } from "@/types/iwp-context";
import React from "react";

//create context and export it
const WPContext = React.createContext<IWPContext | undefined>(undefined);

export default WPContext;

