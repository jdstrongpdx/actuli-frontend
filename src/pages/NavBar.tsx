const Navbar = () => {
    return (
        <nav className="bg-primary rounded text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2 text-xl font-bold">
                            <img src="/android-chrome-192x192.png" alt="Logo" className="h-8 w-8" />
                            <span>Actuli</span>
                        </a>
                    </div>

                    {/* Links (Desktop) */}
                    <div className="hidden md:flex space-x-4">
                        <a href="/" className="hover:bg-secondary px-3 py-2 rounded-md">
                            Home
                        </a>
                        <a href="/profile" className="hover:bg-secondary px-3 py-2 rounded-md">
                            Profile
                        </a>
                        <a href="/goals" className="hover:bg-secondary px-3 py-2 rounded-md">
                            Goals
                        </a>
                        <a href="/achievements" className="hover:bg-secondary px-3 py-2 rounded-md">
                            Achievements
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-200 hover:text-white focus:outline-none focus:ring focus:ring-blue-500"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            <div className="md:hidden">
                <a href="/" className="block px-4 py-2 hover:bg-blue-700">
                    Home
                </a>
                <a href="/about" className="block px-4 py-2 hover:bg-blue-700">
                    About
                </a>
                <a href="/services" className="block px-4 py-2 hover:bg-blue-700">
                    Services
                </a>
                <a href="/contact" className="block px-4 py-2 hover:bg-blue-700">
                    Contact
                </a>
            </div>
        </nav>
    );

    function toggleMobileMenu() {
        const mobileLinks = document.querySelector("nav > div:nth-child(3)");
        if (mobileLinks) {
            mobileLinks.classList.toggle("hidden");
        }
    }
};

export default Navbar;