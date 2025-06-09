import About from "../components/About";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import ObservedElements from "../components/ObservedElements";
import Projects from "../components/Projects";
import { PageContextProvider, Sections } from "../contexts/PageContextProvider";
import Footer from "../components/Footer";
import Experiences from "../components/Experiences";
import { usePortofofolioContext } from "../contexts/PortofolioContext";

function App() {
  const { portofolioData, profileImage } = usePortofofolioContext()!;

  // Each section that would be displayed on navbar should have an id that
  // registered in PageContext

  return (
    <div className=" relative text-white bg-slate-900 min-h-dvh px-16 scroll-smooth pb-36">
      <PageContextProvider>
        <NavBar />

        <ObservedElements className="flex flex-col gap-52 sm:gap-64 pt-10 items-center pb-20">
          {/* hero section */}
          <Intro
            id={Sections.home}
            introContent={{
              header: portofolioData.header,
              subHeader: portofolioData.subHeader,
              image: profileImage,
            }}
          />

          <About
            id={Sections.about}
            aboutContent={{
              skills: portofolioData.skills,
              tools: portofolioData.tools,
              selfInfo: portofolioData.selfIntro,
            }}
          />

          <Projects />
          <Experiences
            id={Sections.experiences}
            experiences={portofolioData.experiences}
          />
        </ObservedElements>
      </PageContextProvider>
      <Footer />
    </div>
  );
}

export default App;
