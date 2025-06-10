import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase";
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
  companyImage: string;
  type: ExperienceType;
  location: string;
  startDate: string; // ISO string only
  endDate?: string; // ISO string only
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

export default function usePortofolioData() {
  const [portofolioData, setPortofolioData] = useState<PortofolioData>({
    header: "",
    selfIntro: "",
    skills: [],
    subHeader: "",
    experiences: [],
    tools: [],
  });
  const [profileImage, setProfileImage] = useState<string>("");

  
  function updateField(fieldName: string, value: string){
    setPortofolioData((prev) => ({
      ...prev,
      [fieldName]: value
    }))
  }

  
  // Fetch Portofolio data from firebase
  useEffect(() => {
    const portoRef = ref(database, "portofolio/");
    const unsub = onValue(portoRef, (snapshot) => {
      const data = snapshot.val() as PortofolioData;
      setPortofolioData((prev) => ({ ...prev, ...data }));
    });

    return () => unsub();
  }, []);

  // Fetch image from firebase
  useEffect(() => {
    const portoImageRef = ref(database, "portofolioImage");
    const unsub = onValue(portoImageRef, (snapshot) => {
      const data = snapshot.val() as string;
      setProfileImage(`${data}`);
    });

    return () => unsub();
  }, []);
  return { portofolioData, profileImage, setPortofolioData, setProfileImage, updateField };
}
