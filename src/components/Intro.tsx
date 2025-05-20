import { Icon } from "@iconify/react/dist/iconify.js";
import ProfileDisplay from "./ProfileDisplay";

type IntroContent = {
  header: string,
  subHeader: string,
  image: string
}

type Props = {
  id: string,
  introContent: IntroContent
}

export default function Intro({ id, introContent }: Props) {
  const image = `data:image/png;base64,${introContent.image}`


  return (
    <header
      id={id}
      className="scroll-mt-20 mt-20 min-h-[85vh] max-w-full flex items-center  "
    >
      <section className="flex flex-col-reverse justify-end items-center gap-10 lg:flex-row lg:items-center lg:justify-start  max-w-full">
        {/* text */}
        <section className="flex flex-col max-w-[600px] text-xl gap-3 lg:gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl text-center sm:text-left sm:text-6xl font-bold">
              {introContent.header && introContent.header}
            </h1>
            <p className="text-center sm:text-left">
              {introContent.subHeader && introContent.subHeader}
            </p>
          </div>
          <div className="w-full flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between sm:items-center sm:mt-5">
            <button
              type="button"
              className="text-base py-2 px-4 rounded-full font-semibold bg-gradient-to-r from-blue-800 to-purple-700 hover:opacity-80 text-white transition-colors shadow-sm"
            >
              <a
                href="https://drive.google.com/file/d/1Veop-E8MqT5vWMGrTlu4PgqLTAXlcccq/view?usp=drive_link"
                target="_blank"
              >
                Resume <Icon icon={"mdi:document"} className="inline" />
              </a>
            </button>

            {/* */}
            {/* Social media links */}
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
            {/*  */}
          </div>
        </section>
        <ProfileDisplay image={image} />
      </section>
    </header>
  );
}
