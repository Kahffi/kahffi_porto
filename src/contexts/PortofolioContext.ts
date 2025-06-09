import { createContext, useContext} from "react";


export type PortofolioData = {
  header: string;
  subHeader: string;
  selfIntro: string;
  skills: Skill[];
  tools: Tool[];
  experiences: Experience[];
};

export enum ExperienceType {
  internship = "internship",
  fullTime = "full-time",
  partTime = "part-time",
}

export type Experience = {
  id: string;
  companyName: string;
  role: string;
  summary: string;
  companyLink: string;
  type: ExperienceType;
  location: string;
  startDate: Date;
  endDate?: Date;
  currentlyWorkHere: boolean;
};

export type Skill = {
  id: string;
  skillName: string;
  icon: string;
};

export type Tool = {
  id: string;
  toolName: string;
  icon: string;
};

type TPortofolioContext = {
    portofolioData: PortofolioData,
    profileImage: string,
    setPortofolioData: React.Dispatch<React.SetStateAction<PortofolioData>>
    setProfileImage: React.Dispatch<React.SetStateAction<string>>
    updateField: (fieldName: string, value: unknown) => void
}

const PortofolioContext = createContext<TPortofolioContext | null>(null)

export function usePortofofolioContext(){
    const ctx = useContext(PortofolioContext)
    if (!ctx) console.error("Only use portofolioContext inside PortofolioContextProvider")

    return ctx
}



export default PortofolioContext;
