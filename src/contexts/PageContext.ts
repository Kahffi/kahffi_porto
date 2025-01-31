import { createContext, Dispatch, SetStateAction } from "react";
import { type ActiveId } from "./PageContextProvider";

type TPageContext = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;

  activeId: ActiveId;
  setActiveId: Dispatch<SetStateAction<ActiveId>>;
  SECTIONS: string[];
};

export const PageContext = createContext<TPageContext | null>(null);
