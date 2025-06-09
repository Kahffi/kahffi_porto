import { ChangeEvent } from "react";
import { usePortofofolioContext } from "../../contexts/PortofolioContext";
import { ExperienceType } from "../../hooks/usePortofolioData";
import Experiences from "../Experiences";
import { v7 as uuid } from "uuid";
import ExperienceInput from "./ExperienceInput";

export default function ExperienceForm() {
  const { portofolioData: formData, setPortofolioData: setFormData } =
    usePortofofolioContext()!;

  // Experience Handlers
  function addExperience() {
    const currentDate = new Date();

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
        },
      ],
    }));
  }

  function handleExperienceChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, type } = e.target;
    const id = e.target.dataset.id;

    let value;

    if (type === "checkbox") {
      value = e.target.checked;
    } else {
      value = e.target.value;
    }

    switch (type) {
      case "checkbox":
        value = e.target.checked;
        break;
      case "date":
        value = new Date(e.target.value);
        break;
      default:
        value = e.target.value;
    }

    console.log(value, typeof value);

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
