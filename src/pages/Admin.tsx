
import { type ChangeEvent, useState } from "react";
import { v7 as uuid } from "uuid";

import LabelledTextInput from "../components/adminForm/InputWithLabel";
import TextAndIconInput from "../components/adminForm/SkillInput";
import { database } from "../firebase";
import useImageUtils from "../hooks/useImageUtils";
import ProfileDisplay from "../components/ProfileDisplay";
import usePortofolioData from "../hooks/usePortofolioData";
import { ref, set } from "firebase/database";



export interface AdminFormData {
  header: string,
  subHeader: string,
  selfIntro: string,
  skills: Skill[],
  tools: Tool[]
}

export type Skill = {
  id: string
  skillName: string
  icon: string
}

export type Tool = {
  id: string,
  toolName: string,
  icon: string
}


export default function Admin() {


  const { portofolioData: formData, profileImage, setPortofolioData: setFormData } = usePortofolioData()

  const [previewImage, setPreviewImage] = useState<File | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  // Skill Handlers ====================

  function addSkill() {
    setFormData((prev) =>
      ({ ...prev, skills: [...prev.skills, { icon: "", skillName: "", id: uuid() }] }))
  }

  function handleSkillChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const skillID = e.target.dataset.id

    setFormData((prev) => {

      const updatedSkills = prev.skills.map((s) => {
        if (skillID === s.id) {
          return {
            ...s,
            [name]: value,
          }
        }
        return s
      })

      return { ...prev, skills: updatedSkills }
    })

  }

  function deleteSkill(skillID: string) {
    setFormData((prev) => {

      const updatedSkills = prev.skills.filter((s) => {
        return s.id !== skillID
      })

      return { ...prev, skills: updatedSkills }
    })

  }
  // =================================

  // Tool Handlers ======================
  function addTools() {
    setFormData((prev) =>
      ({ ...prev, tools: [...prev.tools, { icon: "", toolName: "", id: uuid() }] }))
  }
  // =============================================
  // Image Handler =======

  const { imtobase64 } = useImageUtils();

  // put selected image into state 
  function stageImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files

    if (!files || files.length < 1) {
      return
    }

    setPreviewImage(files[0])
  }



  function handleToolChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const toolID = e.target.dataset.id


    setFormData((prev) => {

      const updatedTools = prev.tools.map((t) => {
        if (toolID === t.id) {
          return {
            ...t,
            [name]: value,
          }
        }
        return t
      })

      return { ...prev, tools: updatedTools }
    })
  }

  function deleteTool(toolID: string) {
    setFormData((prev) => {

      const updatedTools = prev.tools.filter((t) => {
        return t.id !== toolID
      })

      return { ...prev, tools: updatedTools }
    })
  }

  function updatePortofolio() {
    return set(ref(database, "portofolio/"), { ...formData })
  }

  async function updateImage() {
    if (!previewImage) throw new Error("Image is required")
    const strImage = await imtobase64([previewImage])

    return set(ref(database, "portofolioImage/"), strImage)

  }


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await updatePortofolio()
      await updateImage()

      alert("Updated Successfully")
    } catch (e) {
      console.log("Error while updating portofolio")
      console.error(e)
      alert((e as Error).message)
    }
  }

  return <div className="bg-slate-900 min-h-dvh w-full text-white p-5">

    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
      {/* Home */}
      <fieldset className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">Home</h1>
        <hr />
        <div className="">
          {
            !previewImage && profileImage ? <ProfileDisplay image={`data:image/jpeg;base64,${profileImage}`} /> :
              previewImage ? <ProfileDisplay image={`data:image/jpeg;base64,${profileImage}`} /> : <></>
          }
        </div>
        <div className="bg-red-400 w-fit p-3 rounded-md">
          <label htmlFor="select-file" className="cursor-pointer">Add Image(s)</label>
          <input type="file" multiple onChange={stageImage} id="select-file" className="hidden" />
        </div>
        <LabelledTextInput id="header" label="Header" type="text" value={formData.header} onChange={handleChange} />
        <LabelledTextInput id="subHeader" label="Sub Header" type="text-area" value={formData.subHeader} onChange={handleChange} />
      </fieldset>

      {/* About */}
      <fieldset className="flex flex-col gap-5">
        <h1 className="font-bold text-xl">About</h1>
        <hr />
        <LabelledTextInput id="selfIntro" label="Self Introduction" type="text-area" value={formData.selfIntro} onChange={handleChange} />

        {/* skills */}
        <div>
          <h3>Skills</h3>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={addSkill} className="bg-red-400 p-2">
              Add Skill
            </button>
            {
              formData.skills.map((s, idx) => {
                return <TextAndIconInput sectionName="Skill" deleteHandler={deleteSkill} idx={idx} changeHandler={handleSkillChange} key={s.id} icon={s.icon} id={s.id} value={s.skillName} />
              })
            }
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3>Tools</h3>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={addTools} className="bg-red-400 p-2">
              Add Tools
            </button>
            {
              formData.tools.map((t, idx) => {
                return <TextAndIconInput sectionName="Tool" deleteHandler={deleteTool} idx={idx} changeHandler={handleToolChange} key={t.id} icon={t.icon} id={t.id} value={t.toolName} />
              })
            }
          </div>
        </div>


      </fieldset>

      <div className="flex justify-center">
        <button type="submit" className="bg-red-500 w-fit py-2 px-3 rounded-md">
          Confirm Update
        </button>
      </div>

    </form>
  </div>;
}
