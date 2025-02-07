import profilePict from "../assets/images/Muhammad Daffa_Al_Kahffi_noBG.png";

export default function ProfileDisplay() {
  return (
    <div className="relative lg:ml-20">
      <div className="animate-profile_animate  bg-gradient-to-b to-blue-950 from-purple-950 overflow-hidden px-5 pt-5  shadow-lg shadow-purple-500/50 max-w-[350px]">
        <img src={profilePict} alt="Kahffi's Picture" className="w-full" />
      </div>
    </div>
  );
}
