import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ProdCard from './components/ProdCard';
import ResultChecker from './components/ResultChecker';

function App() {
  const [activeButton, setActiveButton] = useState(null);
  const [bannerColor, setBannerColor] = useState('bg-red-500'); // varsayılan renk

  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        setBannerColor={setBannerColor}
      />
      <ProdCard bannerColor={bannerColor} />
      <ResultChecker />
    </div>
  );
}

export default App;
