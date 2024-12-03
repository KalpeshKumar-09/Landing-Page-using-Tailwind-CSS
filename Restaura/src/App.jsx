import HeroSection from "./components/HeroSection";
import NavbarSection from "./components/NavbarSection";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <NavbarSection />
      <HeroSection />
    </main>
  );
}

export default App;
