import React, { useState } from "react";
import axios from "axios";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import MainContent from "./components/layout/MainContent";
import ProdCard from "./components/layout/ProdCard";
import Tickets from "./components/layout/Tickets";
import Footer from "./components/layout/footer";

function App() {
  const [activeButton, setActiveButton] = useState(1);
  const [bannerColor, setBannerColor] = useState("bg-[#005C95]");
  const [logoSrc, setLogoSrc] = useState("/assets/default-logo.svg");

  return (
    <div className="App">
      <Header />
      <Navbar />

      <MainContent
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setBannerColor={setBannerColor}
        setLogoSrc={setLogoSrc}
      />
      {activeButton !== 1 && (
        <ProdCard bannerColor={bannerColor} logoSrc={logoSrc} />
      )}
      <Tickets activeButton={activeButton} />
      <Footer />
    </div>
  );
}

export default App;
