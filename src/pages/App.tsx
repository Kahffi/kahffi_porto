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

  const isLoading = portofolioData.header === "" || profileImage === "";

  // Each section that would be displayed on navbar should have an id that
  // registered in PageContext
  return (
    <>
      {isLoading ? (
        /* loading */
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white space-y-8">
          <div className="text-2xl font-semibold tracking-wide">Loading...</div>
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 bg-gradient-to-b to-blue-800 from-purple-800 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        // content
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
      )}
    </>
  );
}

export default App;
