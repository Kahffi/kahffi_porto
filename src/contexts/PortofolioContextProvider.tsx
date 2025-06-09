import { ReactNode, useEffect, useState } from "react";
import PortofolioContext, { PortofolioData } from "./PortofolioContext";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";

export default function PortofolioContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [portofolioData, setPortofolioData] = useState<PortofolioData>({
    header: "",
    selfIntro: "",
    skills: [],
    subHeader: "",
    experiences: [],
    tools: [],
  });
  const [profileImage, setProfileImage] = useState<string>("");

  function updateField(fieldName: string, value: unknown) {
    setPortofolioData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
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
  return (
    <PortofolioContext.Provider
      value={{
        portofolioData: portofolioData,
        setPortofolioData: setPortofolioData,
        profileImage: profileImage,
        setProfileImage: setProfileImage,
        updateField: updateField,
      }}
    >
      {children}
    </PortofolioContext.Provider>
  );
}
