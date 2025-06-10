import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";

export default function Protected() {
  const { admin: user, isLoading } = useContext(AdminContext);

  return (
    <>
      {user ? (
        <Outlet />
      ) : isLoading ? (
        <h1 className="text-3xl font-bold">Loading</h1>
      ) : isLoading === false && !user ? (
        <Navigate to={"/auth"} />
      ) : (
        <h1>Error Occured</h1>
      )}
    </>
  );
}
