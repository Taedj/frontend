import { createContext,useContext } from "react";
import { Skill } from "../src/App";

export const SkillsContext = createContext<Skill[]|undefined>(undefined);

export const useSkillsContext = () => {
    const skills = useContext(SkillsContext);
    if (!skills) new Error('No skills provided');
    return skills 
}