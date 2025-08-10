import { createContext,useContext } from "react";
import { Config } from "../src/App";


export const ConfigContext = createContext<Config|undefined>(undefined);

export const useConfig = ()=>{
    const config = useContext(ConfigContext);

    if (config === undefined) throw new Error("useConfig must be used within a ConfigProvider");
    return config;
}