import Intro from "./component/Intro";
import NavBar from "./component/NavBar";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="relative text-white bg-slate-900 min-h-dvh">
      <NavBar />
      <main className="flex flex-col pt-10 items-center">
        {/* hero section */}
        <Intro id="home" />
        <Projects />
      </main>
    </div>
  );
}

export default App;
