import IntroSection from "./components/intro";
import ExperienceSection from "./components/experience/";
import ProjectsSection from "./components/projects";

export default function App() {
  return (
    <main className="p-5 flex justify-center min-h-svh">
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
