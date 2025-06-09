export default function ProfileDisplay({ image }: { image: string }) {
  return (
    <div className="relative lg:ml-20">
      <div className="animate-profile_animate  bg-gradient-to-b to-blue-950 from-purple-950 overflow-hidden px-5 pt-5  shadow-lg shadow-purple-500/50 max-w-[350px]">
        <img src={image} alt="Kahffi's Picture" className="w-full" />
      </div>
    </div>
  );
}
