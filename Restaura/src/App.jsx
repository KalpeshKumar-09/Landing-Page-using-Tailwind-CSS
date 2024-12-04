import About from "./components/About";
import Dishes from "./components/Dishes";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import NavbarSection from "./components/NavbarSection";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <NavbarSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
    </main>
  );
}

export default App;
