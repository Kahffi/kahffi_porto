export default function ProfilePictureFrame({ image }: { image: string }) {
  return (
    <div className="w-full h-full animate-profile_animate bg-gradient-to-b to-blue-950 from-purple-950 overflow-hidden px-5 pt-5  shadow-lg shadow-purple-500/50 max-w-[350px]">
      <img src={image} alt="Kahffi's Picture" className="w-full" />
    </div>
  );
}
