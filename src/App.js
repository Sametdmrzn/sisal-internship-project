import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ProdCard from "./components/ProdCard";
import Tickets from "./components/Tickets";

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
    </div>
  );
}

export default App;
