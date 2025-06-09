import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin.tsx";
import Auth from "./pages/Auth.tsx";
import AdminContextProvider from "./contexts/AdminContextProvider.tsx";
import Protected from "./pages/Protected.tsx";
import PortofolioContextProvider from "./contexts/PortofolioContextProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    element: (
      <AdminContextProvider>
        <Protected />
      </AdminContextProvider>
    ),
    children: [
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <AdminContextProvider>
        <Auth />
      </AdminContextProvider>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <PortofolioContextProvider>
        <RouterProvider router={router} />
      </PortofolioContextProvider>
    </>
  </StrictMode>
);
