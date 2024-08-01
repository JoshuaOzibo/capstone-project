import HeroSection from "./components/sections/HeroSection.jsx";
import SectionOne from "./components/sections/Sections.js";
import UserDashboard from "./components/pages/UserDashboard.js";
import PowerfulFeatures from "./components/sections/PowerfulFeatures.js";
import Footer from "./components/sections/Footer.js";
const App = () => {
  return (
    <div>
      <HeroSection />
      <SectionOne />
      <PowerfulFeatures />
      <Footer />

      {/* <UserDashboard /> */}
    </div>
  );
};

export default App;
