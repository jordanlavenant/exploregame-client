import React, { useState } from 'react';

const MenuBurger: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button 
                onClick={toggleMenu} 
                className="text-3xl z-50 relative focus:outline-none"
            >
                <img className="w-10" src="/Menu-Burger.png" alt="logo" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center">
                    {/* Contenu du menu */}
                    <header className="text-center text-white space-y-6">
                        {/* Logo */}
                        <div>
                            <img src="/logo-iut.svg" alt="Logo" className="w-40 mx-auto" />
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-4">
                            <ul className="text-lg font-semibold">
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Accueil
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Filières
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Profil
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Actualités
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Carte
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="text-white hover:underline">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <button
                            onClick={toggleMenu}
                            className="text-3xl text-white hover:text-gray-300 focus:outline-none"
                        >
                            ✕
                        </button>
                    </header>
                </div>
            )}
        </>
    );
};

export default MenuBurger;
