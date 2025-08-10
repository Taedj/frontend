import { createContext,useContext } from "react";

interface WorkItem {
    title:string;
}

export const WorksContext = createContext<WorkItem[]|undefined>(undefined);

export const useWorks = ()=>{
    const works = useContext(WorksContext);

    if (works === undefined) throw new Error("no works available yet");
    return works;
}