import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileDisplay from "./ProfileDisplay";

export default function Intro({ id }: { id: string }) {
  return (
    <header id={id} className="flex items-center sm:gap-28">
      {/* text */}
      <section className="flex flex-col max-w-[600px] text-xl gap-3">
        <h1 className="text-4xl font-bold">Muhammad Daffa Al Kahffi</h1>
        <p>
          Undergraduate Mechatronic and Artificial Intelligence student at
          Universitas Pendidikan Indonesia
        </p>
        <section className="flex justify-between items-center mt-5">
          <button
            type="button"
            className="py-3 px-5 rounded-full text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-80 text-white transition-colors shadow-sm"
          >
            <a
              href="https://drive.google.com/file/d/1Veop-E8MqT5vWMGrTlu4PgqLTAXlcccq/view?usp=drive_link"
              target="_blank"
            >
              Resume <Icon icon={"mdi:document"} className="inline" />
            </a>
          </button>
          <ul className="flex gap-5 text-3xl hover:*:scale-110 *:cursor-pointer">
            <li>
              <Icon icon={"mdi:github"} />
            </li>
            <li>
              <Icon icon={"mdi:linkedin"} />
            </li>
            <li>
              <Icon icon={"mdi:gmail"} />
            </li>
          </ul>
        </section>
      </section>
      <ProfileDisplay />
    </header>
  );
}
