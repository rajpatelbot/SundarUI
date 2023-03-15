import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Container/Footer";
import Navbar from "./Container/Navbar";

const Homepage = lazy(() => import("./pages/Homepage"));
const Contribute = lazy(() => import("./pages/Contribute"));
const About = lazy(() => import("./pages/About"));
const Mobilecomponents = lazy(() => import("./pages/Mobilecomponents"));
const Tailwindcomponents = lazy(() => import("./pages/Tailwindcomponents"));
const Setupguide = lazy(() => import("./pages/Setupguide"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={"Loading..."}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/setupguides" element={<Setupguide />} />
          <Route
            exact
            path="/tailwindcomponents"
            element={<Tailwindcomponents />}
          />
          <Route
            exact
            path="/mobilecomponents"
            element={<Mobilecomponents />}
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contribute" element={<Contribute />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
