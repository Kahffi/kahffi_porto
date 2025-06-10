import type { ChangeEvent } from "react";
import LabelledTextInput from "./InputWithLabel";
import TextAndIconInput from "./TextAndIconInput";
import { usePortofofolioContext } from "../../contexts/PortofolioContext";
import { v7 as uuid } from "uuid";

export default function AboutForm() {
  const {
    portofolioData: formData,
    setPortofolioData: setFormData,
    updateField,
  } = usePortofofolioContext()!;

  function addSkill() {
    updateField("skills", [
      ...formData.skills,
      { icon: "", skillName: "", id: uuid() },
    ]);
  }

  function deleteSkill(skillID: string) {
    setFormData((prev) => {
      const updatedSkills = prev.skills.filter((s) => {
        return s.id !== skillID;
      });

      return { ...prev, skills: updatedSkills };
    });
  }

  function handleSkillChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const skillID = e.target.dataset.id;

    setFormData((prev) => {
      const updatedSkills = prev.skills.map((s) => {
        if (skillID === s.id) {
          return {
            ...s,
            [name]: value,
          };
        }
        return s;
      });

      return { ...prev, skills: updatedSkills };
    });
  }

  //   Tools Handler
  function addTools() {
    setFormData((prev) => ({
      ...prev,
      tools: [...prev.tools, { icon: "", toolName: "", id: uuid() }],
    }));
  }

  function handleToolChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const toolID = e.target.dataset.id;

    setFormData((prev) => {
      const updatedTools = prev.tools.map((t) => {
        if (toolID === t.id) {
          return {
            ...t,
            [name]: value,
          };
        }
        return t;
      });

      return { ...prev, tools: updatedTools };
    });
  }

  function deleteTool(toolID: string) {
    setFormData((prev) => {
      const updatedTools = prev.tools.filter((t) => {
        return t.id !== toolID;
      });

      return { ...prev, tools: updatedTools };
    });
  }

  return (
    <fieldset className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">About</h1>
      <hr />
      <LabelledTextInput
        id="selfIntro"
        label="Self Introduction"
        type="text-area"
        value={formData.selfIntro}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          updateField(e.target.name, e.target.value);
        }}
      />

      {/* skills */}
      <div>
        <h3>Skills</h3>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={addSkill} className="bg-red-400 p-2">
            Add Skill
          </button>
          {formData.skills.map((s, idx) => {
            return (
              <TextAndIconInput
                sectionName="Skill"
                deleteHandler={deleteSkill}
                idx={idx}
                changeHandler={handleSkillChange}
                key={s.id}
                icon={s.icon}
                id={s.id}
                value={s.skillName}
              />
            );
          })}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h3>Tools</h3>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={addTools} className="bg-red-400 p-2">
            Add Tools
          </button>
          {formData.tools.map((t, idx) => {
            return (
              <TextAndIconInput
                sectionName="Tool"
                deleteHandler={deleteTool}
                idx={idx}
                changeHandler={handleToolChange}
                key={t.id}
                icon={t.icon}
                id={t.id}
                value={t.toolName}
              />
            );
          })}
        </div>
      </div>
    </fieldset>
  );
}
