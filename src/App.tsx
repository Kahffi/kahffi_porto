import About from "./components/About";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import ObservedElements from "./components/ObservedElements";
import Projects from "./components/Projects";
import PageContextProvider from "./contexts/PageContextProvider";

function App() {
  return (
    <div className=" relative text-white bg-slate-900 min-h-dvh px-16 scroll-smooth">
      <PageContextProvider>
        <NavBar />

        <ObservedElements className="flex flex-col gap-52 sm:gap-64 pt-10 items-center pb-20">
          {/* hero section */}
          <Intro id="Home" />

          <About id="About" />

          <Projects />
          <div
            className="h-[400px] w-full bg-white scroll-mt-20"
            id="Contacts"
          ></div>
        </ObservedElements>
      </PageContextProvider>
    </div>
  );
}

export default App;
