import { ChangeEvent } from "react";
import ProfileDisplay from "../ProfileDisplay";
import LabelledTextInput from "./InputWithLabel";
import useImageUtils from "../../hooks/useImageUtils";
import { usePortofofolioContext } from "../../contexts/PortofolioContext";

export default function IntroForm() {
  const {
    portofolioData: formData,
    profileImage,
    setPortofolioData: setFormData,
    setProfileImage,
  } = usePortofofolioContext()!;

  const { imtobase64 } = useImageUtils();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function stageImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files?.length < 1) {
      return;
    }
    try {
      const file = e.target.files[0];
      const base64Img = await imtobase64([file]);
      setProfileImage(`data:image/png;base64,${base64Img[0]}`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <fieldset className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Home</h1>
      <hr />

      {/* Image */}
      <div className="">
        {/* if the user hasn't select an image, it will show image from database if exist */}
        {profileImage && <ProfileDisplay image={profileImage} />}
      </div>
      <div className="bg-red-400 w-fit p-3 rounded-md">
        <label htmlFor="select-file" className="cursor-pointer">
          Add Image
        </label>
        <input
          type="file"
          multiple
          onChange={stageImage}
          id="select-file"
          className="hidden"
        />
      </div>
      {/*  */}

      {/* Header */}
      <LabelledTextInput
        id="header"
        label="Header"
        type="text"
        value={formData.header}
        onChange={handleChange}
      />
      <LabelledTextInput
        id="subHeader"
        label="Sub Header"
        type="text-area"
        value={formData.subHeader}
        onChange={handleChange}
      />
      {/*  */}
    </fieldset>
  );
}
