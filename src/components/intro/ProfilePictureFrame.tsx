export default function ProfilePictureFrame({ image }: { image: string }) {
  return (
    <div className="w-full h-full animate-profile_animate  overflow-hidden px-5 pt-5 bg-linear-to-b from-gray-300 to-gray-100  shadow-lg shadow-gray-300/50 max-w-[350px]">
      <img src={image} alt="Kahffi's Picture" className="w-full" />
    </div>
  );
}
