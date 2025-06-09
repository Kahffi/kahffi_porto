import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum Sections {
  home = "Home",
  about = "About",
  project = "Projects",
  experiences = "Experiences",
}

type TPageContext = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;

  activeId: Sections;
  setActiveId: Dispatch<SetStateAction<Sections>>;
  SECTIONS: Sections[];
};
const PageContext = createContext<TPageContext | null>(null);

export function PageContextProvider({ children }: { children: ReactNode }) {
  const SECTIONS = Object.values(Sections).map((section) => section);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeId, setActiveId] = useState<Sections>(Sections.home);
  return (
    <PageContext.Provider
      value={{
        activeIndex: activeIndex,
        setActiveIndex: setActiveIndex,
        activeId: activeId,
        setActiveId: setActiveId,
        SECTIONS: SECTIONS,
      }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function usePageContext() {
  const pageContext = useContext(PageContext);

  if (!pageContext) {
    console.error("Only use pageContext inside PageContextProvider component!");
    return null;
  }
  return pageContext;
}
