import logo from '../Assets/NMSlogo.svg'; // Remplacez par le chemin de votre logo

const Header = () => {
    return (
        <header className="w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 bg-white z-100 shadow-md">
            {/* Logo */}
            <div className="flex items-center">
                <img src={logo} alt="Noise Maker Studio Logo" className="h-10" />
            </div>

            {/* Navigation */}
            <nav className="flex space-x-10">
                <a
                    href="#audio"
                    className="text-lg font-light tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
                >
                    Audio
                </a>
                <a
                    href="#gear"
                    className="text-lg font-light tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
                >
                    Gear
                </a>
                <a
                    href="#contact"
                    className="text-lg font-light tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;
