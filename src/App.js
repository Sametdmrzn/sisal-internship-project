import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ProdCard from './components/ProdCard';
import ResultChecker from './components/ResultChecker';

function App() {
  // Başlangıçta 1. butonu aktif yapabilirsiniz (MainContent'teki buttonData id'leriyle uyumluysa)
  const [activeButton, setActiveButton] = useState(1);

  // Banner arka planı Tailwind sınıfı olarak tutuluyor
  const [bannerColor, setBannerColor] = useState('bg-[#005C95]');

  // Dinamik logo için state ekleyelim (ProdCard bunu kullanıyor)
  const [logoSrc, setLogoSrc] = useState('/assets/default-logo.svg');

  return (
    <div className="App">
      <Header />
      <Navbar />

      <MainContent
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setBannerColor={setBannerColor}
        setLogoSrc={setLogoSrc}        // tanımlı state setter gönderiliyor
      />

      <ProdCard
        bannerColor={bannerColor}
        logoSrc={logoSrc}               //  ProdCard'ın beklediği prop gönderiliyor
      />

      <ResultChecker />
    </div>
  );
}

export default App;
