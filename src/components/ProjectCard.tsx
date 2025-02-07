// import { Cloudinary } from "@cloudinary/url-gen/index";
import { TProject } from "./Projects";
import { Icon } from "@iconify/react/dist/iconify.js";
type Props = {
  project: TProject;
};

export default function ProjectCard({ project }: Props) {
  // // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  //   },
  // });

  // const testImage = cld.image(`cld-sample`);

  return (
    <div className="w-[350px] sm:w-[350px] text-lg border-[3px] shadow-md p-4 flex flex-col gap-5 rounded-[24px] h-[450px] bg-slate-950 border-slate-700  shadow-slate-950">
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <img src={project.image} className="w-full h-full" />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h2 className="font-bold text-xl flex justify-between items-center gap-2">
          {project.title}{" "}
          <div className="text-2xl flex gap-2">
            {project.repoLink && (
              <a target="_blank" href={project.repoLink}>
                <Icon className="inline cursor-pointer" icon={"mdi:github"} />
              </a>
            )}
            {project.projectLink && (
              <a target="_blank" href={project.projectLink}>
                <Icon
                  className="inline cursor-pointer"
                  icon={"mdi:open-in-new"}
                />
              </a>
            )}
          </div>
        </h2>
        <p className="break-words overflow-hidden  max-w-full text-base">
          {/* process description text so it has max character length of 150 */}
          {project.description.length > 150
            ? project.description.slice(0, 147).concat("...")
            : project.description}
        </p>
      </div>
      <div className="w-full overflow-auto flex gap-3 pb-3 text-sm">
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
