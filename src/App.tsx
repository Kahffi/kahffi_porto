import Intro from "./component/Intro";
import NavBar from "./component/NavBar";
import ObservedElements from "./component/ObservedElements";
import Projects from "./component/Projects";
import PageContextProvider from "./contexts/PageContextProvider";

function App() {
  return (
    <div className=" relative text-white bg-slate-900 min-h-dvh px-16 scroll-smooth">
      <PageContextProvider>
        <NavBar />

        <ObservedElements className="flex flex-col gap-20 sm:gap-40 pt-10 items-center">
          {/* hero section */}
          <Intro id="Home" />

          <div className="h-[400px] w-full bg-white" id="About"></div>

          <Projects />
          <div className="h-[400px] w-full bg-white" id="Contacts"></div>
        </ObservedElements>
      </PageContextProvider>
    </div>
  );
}

export default App;
