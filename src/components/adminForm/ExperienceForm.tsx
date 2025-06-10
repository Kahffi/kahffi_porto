import { ChangeEvent } from "react";
import { usePortofofolioContext } from "../../contexts/PortofolioContext";
import { ExperienceType } from "../../hooks/usePortofolioData";
import Experiences from "../Experiences";
import { v7 as uuid } from "uuid";
import ExperienceInput from "./ExperienceInput";
import useImageUtils from "../../hooks/useImageUtils";

export default function ExperienceForm() {
  const {
    portofolioData: formData,
    setPortofolioData: setFormData,
    formatDate,
  } = usePortofofolioContext()!;

  const { imtobase64 } = useImageUtils();

  // Experience Handlers
  function addExperience() {
    const currentDate = formatDate(new Date());

    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          id: uuid(),
          companyLink: "",
          companyName: "",
          currentlyWorkHere: true,
          location: "",
          role: "",
          startDate: currentDate,
          summary: "",
          type: ExperienceType.internship,
          companyImage: "",
        },
      ],
    }));
  }

  function updateFormDataByValueID(
    id: string,
    fieldName: string,
    value: unknown
  ) {
    setFormData((prev) => {
      const updatedExperiences = prev.experiences.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [fieldName]: value,
          };
        }
        return exp;
        //
      });
      return {
        ...prev,
        experiences: updatedExperiences,
      };
      //
    });
  }

  function handleExperienceChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, type } = e.target;
    const id = e.target.dataset.id;
    if (!id) {
      console.error("Cannot update field, id is undefined");
      return;
    }

    let value: unknown;

    switch (type) {
      case "checkbox":
        value = e.target.checked;
        break;
      //   file is an image
      case "file":
        imtobase64([e.target.files![0]])
          .then((val) => {
            const imgStr = `data:image/webp;base64,${val[0]}`;
            value = imgStr;
          })
          .catch(() => (value = ""))
          .finally(() => {
            return updateFormDataByValueID(id, name, value);
          });
        break;
      default:
        value = e.target.value;
    }
    setFormData((prev) => {
      const updatedExperiences = prev.experiences.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [name]: value,
          };
        }
        return exp;
        //
      });
      return {
        ...prev,
        experiences: updatedExperiences,
      };
      //
    });
  }

  function deleteExperience(experienceID: string) {
    setFormData((prev) => {
      const updatedExperiences = prev.experiences.filter((exp) => {
        return exp.id !== experienceID;
      });

      return { ...prev, experiences: updatedExperiences };
    });
  }

  return (
    <fieldset className="flex flex-col gap-5">
      {/* Experiences */}
      <div>
        <h3 className="text-xl font-bold">Experiences</h3>
        <button
          type="button"
          onClick={addExperience}
          className="bg-red-400 p-2"
        >
          Add Experience
        </button>
        {/* Exprerience input */}
        <div className="flex flex-wrap gap-3">
          {formData.experiences.map((exp) => {
            return (
              <ExperienceInput
                key={"expInput" + exp.id}
                experience={exp}
                onChange={handleExperienceChange}
                onDelete={deleteExperience}
              />
            );
          })}
        </div>

        {/* Experiences preview */}
        <h4>Preview</h4>
        <div className="border">
          <Experiences experiences={formData.experiences} />
        </div>
      </div>
    </fieldset>
  );
}
