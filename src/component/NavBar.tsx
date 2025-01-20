import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      console.log(window.scrollY);
    });
  }, []);
  return (
    <nav className="w-full flex justify-center sticky top-3 z-50">
      <ul className="flex gap-10 p-5 px-10 rounded-full text-2xl bg-gray-200/30 backdrop-blur-md">
        <li>
          <button type="button">Home</button>
        </li>
        <li>
          <button type="button">About</button>
        </li>
        <li>
          <button type="button">Projects</button>
        </li>
        <li>
          <button type="button">Contacts</button>
        </li>
      </ul>
    </nav>
  );
}
