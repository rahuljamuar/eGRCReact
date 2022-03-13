import Navbar from "./components/Navbar";
import Transit from "./components/Transit";
import TransitDetails from "./components/TransitDetails";
import ControlGuidance from "./components/ControlGuidance";
import Transction from "./components/Transction";
import Hero from "./components/Hero";

function LandingPage() {
  return (
    <div className="min-h-screen w-full">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="px-32 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
        <div>
          <Transit />
        </div>
        <div className="col-span-2">
          <TransitDetails />
        </div>
        <div>
          <ControlGuidance />
        </div>
      </div>
      <div>
        <Transction />
      </div>
    </div>
  );
}

export default LandingPage;
