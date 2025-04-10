import { ReactElement, useEffect, useState } from "react";
import { AdminAccount, AdminContext } from "./AdminContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminContextProvider({ children }: { children: ReactElement }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState<AdminAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Observe for signed in admin
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin({ uid: user.uid, email: user.email!, username: user.displayName! })
      } else {
        alert("user in")
      }
      setIsLoading(false);
    })
    return () => unsubscribe()
  }, [])

  console.log(admin, "THe admin")

  return (
    <AdminContext.Provider value={{ admin, setAdmin, isLoading }}>
      {children}
    </AdminContext.Provider>
  );
}
