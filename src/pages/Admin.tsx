import { database } from "../firebase";
import { ref, set } from "firebase/database";
import IntroForm from "../components/adminForm/IntroForm";
import { usePortofofolioContext } from "../contexts/PortofolioContext";
import AboutForm from "../components/adminForm/AboutForm";
import ExperienceForm from "../components/adminForm/ExperienceForm";

export default function Admin() {
  const { portofolioData: formData, profileImage } = usePortofofolioContext()!;

  function updatePortofolio() {
    return set(ref(database, "portofolio/"), { ...formData });
  }

  async function updateImage() {
    if (!profileImage) throw new Error("Image is required");
    return set(ref(database, "portofolioImage/"), profileImage);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await Promise.all([updatePortofolio(), updateImage()]);
      alert("Updated Successfully");
    } catch (e) {
      console.log("Error while updating portofolio");
      console.error(e);
      alert((e as Error).message);
    }
  }

  return (
    <div className="bg-slate-900 min-h-dvh w-full text-white p-5">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
        {/* Home */}
        <IntroForm />
        {/* About */}
        <AboutForm />
        <ExperienceForm />

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 w-fit py-2 px-3 rounded-md"
          >
            Confirm Update
          </button>
        </div>
      </form>
    </div>
  );
}
