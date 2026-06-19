import SocialItem from "../SocialItem";
import ProfilePictureFrame from "./ProfilePictureFrame";
import { Icon } from "@iconify/react";

type IntroContent = {
  header: string;
  body: string;
  experienceSnippet: string;
  location: string;
  profilePicture: string;
  socials: string[];
  fullName: string;
};

export default function IntroSection() {
  const content: IntroContent = {
    header: "Muhammad Daffa Al Kahffi",
    body: "Something in the way, mmmmhhmmmmm..... something in the wayy.... nmggggghhh",
    experienceSnippet: "Backend Engineer Intern @ Amartha",
    location: "Jakarta, Indonesia",
    profilePicture: "/img/profile-pict.webp",
    socials: [],
    fullName: "Muhammad Daffa\nAl Kahffi",
  };
  return (
    <div className="border w-full max-w-300 flex justify-between">
      {/* profile picture, location, socials,  snippet*/}
      <div className="border border-yellow-500 flex flex-col items-center">
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
        <div className="border">
          {content.socials.map((s) => (
            <SocialItem key={`intro-social-${s}`} />
          ))}
        </div>
      </div>

      {/* Header and content body */}
      <div className="border border-blue">
        <h1 className="text-xl font-semibold">{content.header}</h1>
        <p>{content.body}</p>
        <button>CTA Button</button>
      </div>
    </div>
  );
}
