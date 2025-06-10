import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/AdminContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export default function Auth() {
  const navigate = useNavigate();
  const { admin } = useContext(AdminContext);

  async function signIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email && !password) {
      alert("Jangan kosong mAniess");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      console.log("aaa");

      if (admin) {
        navigate("/ohnoyoufoundithehe");
      }
    } catch (e) {
      alert("Try harder bolo");
      console.error(e);
    }
  }

  return (
    <div className="h-dvh w-full bg-slate-900 text-white">
      <form onSubmit={(e) => signIn(e)}>
        <div className="flex flex-col items-center h-full w-full gap-3">
          <h1>PROVE THAT YOU'RE AN ADMIN!</h1>
          <label htmlFor="email" className="flex flex-col">
            Email
            <input
              type="text"
              id="email"
              name="email"
              className="bg-transparent border-white border p-1"
            />
          </label>
          <label htmlFor="password" className="flex flex-col">
            Password
            <input
              type="password"
              id="password"
              name="password"
              className="bg-transparent border-white border p-1"
            />
          </label>
          <button
            type="submit"
            className="py-2 px-8 rounded-md font-semibold  bg-blue-800"
          >
            SIGN ME IN!
          </button>
        </div>
      </form>
    </div>
  );
}
