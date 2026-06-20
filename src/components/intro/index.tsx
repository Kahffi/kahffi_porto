import SocialItem from "../SocialItem";
import ProfilePictureFrame from "./ProfilePictureFrame";
import { Icon } from "@iconify/react";

type IntroContent = {
  header: string;
  body: string;
  experienceSnippet: string;
  location: string;
  profilePicture: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  socials: any[];
  fullName: string;
  resumeLink: string;
};

export default function IntroSection() {
  const content: IntroContent = {
    header: "Shaping Digital Technology Brick by Brick",
    body: "Junior Software Engineer specializing in end-to-end web development. With professional experience at SMART Tbk, Amartha Financial, and Ferbos Kreasi Digital, I bring a strong foundation in backend architecture and frontend development to deliver reliable, efficient, and scalable software.",
    experienceSnippet: "Backend Engineer Intern @ Amartha",
    location: "Jakarta, Indonesia",
    profilePicture: "/img/profile-pict.webp",
    socials: [
      {
        label: "email",
        icon: "mdi:email",
        link: "mailto:daffaalkahffi24@gmail.com",
      },
      {
        label: "linkedin",
        icon: "mdi:linkedin",
        link: "https://linkedin.com/in/kahffi",
      },
      {
        label: "github",
        icon: "mdi:github",
        link: "https://github.com/kahffi",
      },
    ],
    fullName: "Muhammad Daffa\nAl Kahffi",
    resumeLink: "https://drive.google.com",
  };
  return (
    <div className="w-full max-w-300 flex lg:gap-32 justify-between">
      {/* profile picture, location, socials,  snippet*/}
      <div className=" flex flex-col items-center">
        <div className="w-80 aspect-square mb-7">
          <ProfilePictureFrame image={content.profilePicture} />
        </div>
        <p className="text-center text-3xl font-semibold tracking-tight leading-8">
          <span>{content.fullName.split("\n")[0]}</span>
          <br />
          <span>{content.fullName.split("\n")[1]}</span>
        </p>
        {/* snippet */}
        <div className="border mt-4 py-1 px-2 rounded-sm text-sm">
          <p className="flex items-center gap-1">
            <Icon icon="mdi:location" className="inline h-full" />
            {content.location}
          </p>
        </div>

        {/* socials */}
        <div className="flex flex-col items-center mt-4 gap-3 w-full">
          <div className="flex w-full items-center gap-3">
            <div className="border-t flex-1 max-h-0.5" />
            <p>Reach me out!</p>
            <div className="border-t flex-1 max-h-0.5" />
          </div>
          <div className="flex gap-5">
            {content.socials.map((s) => (
              <SocialItem
                className="text-3xl"
                key={`intro-social-${s.icon}`}
                icon={s.icon}
                href={s.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header and content body */}
      <div className="">
        <h1 className="italic text-4xl font-bold lg:mt-32 mb-3">
          {content.header}
        </h1>
        <p>{content.body}</p>
        {/* CTAs */}
        <div className="flex gap-5 lg:mt-5">
          <a
            href={content.resumeLink}
            target="_blank"
            className="font-bold bg-gray-100 shadow flex items-center gap-2 w-fit px-5 py-2 rounded-full"
          >
            Download Resume{" "}
            <Icon
              icon={"lets-icons:out"}
              strokeWidth={"2"}
              transform="rotate(90)"
            />
          </a>
          <a
            href=""
            target="_blank"
            className="font-bold bg-gray-900 text-white shadow shadow-gray-600 flex items-center gap-2 w-fit px-5 py-2 rounded-full"
          >
            Checkout my works <Icon icon={"lets-icons:in"} />
          </a>
        </div>
      </div>
    </div>
  );
}
