import { createContext } from "react";

type TAdminContext = {
  admin: AdminAccount | null,
  setAdmin: React.Dispatch<React.SetStateAction<AdminAccount | null>>
  isLoading: boolean,

};

export type AdminAccount = {
  uid: string,
  email: string,
  username: string,
}

export const AdminContext = createContext<TAdminContext>({ admin: null, setAdmin: () => { }, isLoading: true });
