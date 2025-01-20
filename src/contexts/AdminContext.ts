import { createContext } from "react";

type TAdminContext = {
  uid: string;
};

export const AdminContext = createContext<null | TAdminContext>(null);
