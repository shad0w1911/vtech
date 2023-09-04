import "./App.css";
import Contact from "./Pages/contact";
import Home from "./Pages/home";
import Services from "./Pages/services";
import NavigationBar from "./components/navigationBar";
import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import Portfolio from "./Pages/portfolio";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/preLoader";

function App() {
  const location = useLocation();
  return (
    <>
      <PreLoader />
      <TopBar />
      <NavigationBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact_us" element={<Contact />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
