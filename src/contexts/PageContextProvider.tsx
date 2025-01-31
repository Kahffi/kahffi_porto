import { ReactNode, useState } from "react";
import { PageContext } from "./PageContext";

export type ActiveId = "Home" | "About" | "Projects" | "Contacts";

export default function PageContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const SECTIONS = ["Home", "About", "Projects", "Contacts"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeId, setActiveId] = useState<ActiveId>("Home");
  return (
    <PageContext.Provider
      value={{
        activeIndex: activeIndex,
        SECTIONS: SECTIONS,
        setActiveIndex: setActiveIndex,
        activeId: activeId,
        setActiveId: setActiveId,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
