import MainButton from '../Components/Commons/Button.jsx';
import backgroundImage from '../Assets/BgHero.jpg';
import logo from '../Assets/NMSlogo.svg';

const HeroSection = () => {
  return (
      <div
          className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat font-sans"
          style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Logo */}
        <img
            src={logo}
            alt="Logo de Noise Maker Studio"
            className="relative z-10 w-96 mb-10 invert"
        />

        {/* Boutons */}
        <div className="relative z-10 flex gap-5">
          <MainButton href="#audio" title={"Audio"}/>
          <MainButton href="#contact" title={"Contact"}/>
        </div>
      </div>
  );
};

export default HeroSection;
