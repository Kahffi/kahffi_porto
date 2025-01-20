import { useEffect, useState } from "react";
import { AdminContext } from "./AdminContext";

export default function AdminContextProvider() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState(null);

  useEffect(() => {}, []);

  return (
    <AdminContext.Provider value={uid ? { uid: uid } : null}>
      AdminContextProvider
    </AdminContext.Provider>
  );
}
