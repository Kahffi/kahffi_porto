import SocialItem from "../SocialItem";

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
    experienceSnippet: "Backend Engineer Intern - Amartha",
    location: "Jakarta, Indonesia",
    profilePicture: "",
    socials: [],
    fullName: "Muhammad Daffa\nAl Kahffi",
  };
  return (
    <div className="border w-full max-w-300 flex justify-between">
      {/* profile picture, location, socials,  snippet*/}
      <div className="border border-yellow-500">
        <img src={content.profilePicture} alt="profile photo" />
        <p className="text-center font-semibold">
          <span>{content.fullName.split("\n")[0]}</span>
          <br />
          <span>{content.fullName.split("\n")[1]}</span>
        </p>
        {/* snippet */}
        <div className="border">
          <p>
            * <span>{content.experienceSnippet}</span>
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
