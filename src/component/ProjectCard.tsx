import { Cloudinary } from "@cloudinary/url-gen/index";
import { TProject } from "./Projects";
import { AdvancedImage } from "@cloudinary/react";
import { Icon } from "@iconify/react/dist/iconify.js";
type Props = {
  project: TProject;
};

export default function ProjectCard({ project }: Props) {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
  });

  const testImage = cld.image(`cld-sample`);

  return (
    <div className="w-[400px] text-lg border-[3px] shadow-md p-4 flex flex-col gap-3 rounded-[24px]">
      <div className="rounded-lg overflow-hidden">
        <AdvancedImage cldImg={testImage} />
      </div>

      <h2 className="font-bold text-2xl flex justify-between items-center">
        {project.title}{" "}
        <span className="text-3xl">
          <Icon className="inline cursor-pointer" icon={"mdi:github"} />
        </span>{" "}
      </h2>
      <p>{project.description}</p>
      <div className="w-full overflow-auto flex gap-3 pb-3">
        {project.tags.map((tag) => {
          return (
            <div
              key={`${project.title}-${tag}`}
              className="text-blue-600 border py-1 px-2 rounded-xl rounded-bl-sm rounded-tr-sm min-w-fit"
            >
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
