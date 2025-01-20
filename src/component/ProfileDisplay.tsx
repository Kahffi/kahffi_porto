import profilePict from "../assets/images/Muhammad Daffa Al Kahffi_noBG.png";

export default function ProfileDisplay() {
  return (
    <div className="relative">
      <div className="animate-profile_animate  bg-gradient-to-b to-blue-950 from-purple-950 overflow-hidden px-5 pt-5  shadow-lg shadow-purple-500/50 ">
        <img src={profilePict} alt="Kahffi's Picture" className="w-[350px]" />
      </div>
    </div>
  );
}
